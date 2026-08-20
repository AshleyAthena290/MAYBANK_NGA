Runner for FSD execution manifest

Quick steps

1. Install dependencies (prefer virtualenv):

```bash
python -m pip install -r requirements-test-runner.txt
```

2. Set environment variables (at minimum `BASE_URL` or `PAYMENT_HOST`+`PAYMENT_PORT`, and `AUTH_TOKEN` if required):

```bash
export BASE_URL="https://api.sit.example.com"
export AUTH_TOKEN="ey..."
```

3. Run the runner:

```bash
python scripts/run_execution_manifest.py --manifest artifacts/Test_Case/Executions/FSD_Local_Transfer_Execution.yaml
```

4. Results will be written to `artifacts/Test_Case/Executions/results.json` by default.

Notes
- The runner performs a best-effort JSON body construction from the `body` section in API YAMLs. Use `TESTDATA_<FIELD>` environment variables to provide values for fields that are `<value>` placeholders.
- This script is intentionally minimal; adapt it if you need authentication flows, request signing, or richer assertions.
