#!/usr/bin/env python3
"""Simple execution runner for the FSD execution manifest.

Usage:
  python scripts/run_execution_manifest.py \
    --manifest artifacts/Test_Case/Executions/FSD_Local_Transfer_Execution.yaml \
    --results artifacts/Test_Case/Executions/results.json

Environment variables:
  PAYMENT_HOST    e.g. api.example.com
  PAYMENT_PORT    e.g. 443
  BASE_URL        e.g. https://api.example.com (optional - overrides PAYMENT_HOST/PORT)
  AUTH_TOKEN      Bearer token to replace Authorization header placeholder
  TESTDATA_<FIELD>  Optional per-field overrides for request body fields

Notes:
  - The runner expects the apiFile paths in the manifest to point to valid YAML test-case files.
  - It sends the declared method, headers and a best-effort JSON body when available.
"""
import argparse
import json
import os
from pathlib import Path
import sys

try:
    import yaml
    import requests
except Exception:
    print("Missing dependencies. Run: python -m pip install -r requirements-test-runner.txt")
    sys.exit(1)


def load_yaml(p):
    with open(p, 'r', encoding='utf-8') as f:
        return yaml.safe_load(f)


def resolve_url(raw_url):
    if not raw_url:
        return None
    base = os.environ.get('BASE_URL')
    if base:
        # if raw_url contains placeholders, replace base portion
        raw_url = raw_url.replace('https://{Payment-IP}:{Payment-PORT}', base)
    else:
        host = os.environ.get('PAYMENT_HOST')
        port = os.environ.get('PAYMENT_PORT')
        if host and port:
            raw_url = raw_url.replace('{Payment-IP}', host).replace('{Payment-PORT}', port)
    # remove any remaining braces if not replaced
    return raw_url


def build_body(template: dict):
    if not isinstance(template, dict):
        return None
    body = {}
    for k, v in template.items():
        if isinstance(v, str) and ('<value>' in v or v.strip() == '<value>'):
            env_k = f'TESTDATA_{k.upper()}'
            if env_k in os.environ:
                val = os.environ[env_k]
                # try to parse JSON numbers/booleans
                try:
                    val = json.loads(val)
                except Exception:
                    pass
                body[k] = val
            else:
                body[k] = None
        else:
            body[k] = v
    return body


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--manifest', default='artifacts/Test_Case/Executions/FSD_Local_Transfer_Execution.yaml')
    p.add_argument('--results', default='artifacts/Test_Case/Executions/results.json')
    args = p.parse_args()

    manifest_path = Path(args.manifest)
    if not manifest_path.exists():
        print(f'Manifest not found: {manifest_path}')
        sys.exit(2)

    manifest = load_yaml(manifest_path)
    suites = manifest.get('suites') or []
    results = []

    for suite in suites:
        journey = suite.get('journey')
        code = suite.get('code')
        title = suite.get('title')
        print(f'Running journey {code} - {title}')
        for step in suite.get('steps', []):
            seq = step.get('seq')
            action = step.get('action')
            api_file = step.get('apiFile')
            api_test_id = step.get('apiTestId')

            print(f'  Step {seq}: {action} -> {api_test_id}')
            if not api_file:
                print('    Skipped: no apiFile specified')
                results.append({'journey': code, 'step': seq, 'action': action, 'status': 'skipped', 'reason': 'no apiFile'})
                continue

            api_path = Path(api_file)
            if not api_path.exists():
                print(f'    ERROR: apiFile not found: {api_file}')
                results.append({'journey': code, 'step': seq, 'action': action, 'status': 'error', 'reason': 'file missing'})
                continue

            api_spec = load_yaml(api_path)
            req = api_spec.get('request') or {}
            method = (req.get('method') or 'GET').upper()
            raw_url = req.get('url') or req.get('endpoint')
            url = resolve_url(raw_url)
            headers = req.get('headers') or {}

            # replace Authorization placeholder
            auth = os.environ.get('AUTH_TOKEN')
            if auth and 'Authorization' in headers and '<token>' in headers.get('Authorization', ''):
                headers['Authorization'] = f'Bearer {auth}'

            body_template = req.get('body')
            body = build_body(body_template) if body_template else None

            try:
                resp = None
                if method == 'GET':
                    resp = requests.get(url, headers=headers, timeout=30)
                else:
                    resp = requests.request(method, url, headers=headers, json=body, timeout=30)

                expected = api_spec.get('response', {}).get('successStatusCode', 200)
                ok = (resp.status_code == expected)
                result = {'journey': code, 'step': seq, 'action': action, 'apiTestId': api_test_id, 'status_code': resp.status_code, 'expected': expected, 'pass': ok}
                print(f"    -> {resp.status_code} (expected {expected}) {'PASS' if ok else 'FAIL'}")
                results.append(result)
            except Exception as e:
                print(f'    ERROR: request failed: {e}')
                results.append({'journey': code, 'step': seq, 'action': action, 'status': 'error', 'reason': str(e)})

    # write results
    out = Path(args.results)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(results, indent=2))
    print('\nExecution finished. Results written to', out)


if __name__ == '__main__':
    main()
