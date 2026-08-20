#!/usr/bin/env python3
"""Generate an execution manifest by mapping FSD Markdown rows to API YAML artifacts.

Usage:
  python scripts/generate_manifest_from_fsd.py \
    --fsd artifacts/Test_Case/Markdown/FSD_Journey/FSD_Local_Transfer_TestCases.md \
    --out artifacts/Test_Case/Executions/FSD_Local_Transfer_Execution_full.yaml
"""
import argparse
import re
from pathlib import Path
import yaml


API_MAP = {
    'GetSourceAccountList': 'artifacts/api/PT_Local_Transfer/getsourceaccountlist/GetSourceAccountList-001-positive.yaml',
    'InitiateIntraTransfer': 'artifacts/api/PT_Local_Transfer/initiateintratransfer/InitiateIntraTransfer-001-positive.yaml',
    'ExecuteIntraTransfer': 'artifacts/api/PT_Local_Transfer/executeintratransfer/ExecuteIntraTransfer-001-positive.yaml',
    'GetPTMaintemamceBankListing': 'artifacts/api/PT_Local_Transfer/getptmaintemamcebanklisting/GetPTMaintemamceBankListing-001-positive.yaml',
    'GetPTMaintenanceTransferInit': 'artifacts/api/PT_Local_Transfer/getptmaintenancetransferinit/GetPTMaintenanceTransferInit-001-positive.yaml',
    'InitiateInterTransfer': 'artifacts/api/PT_Local_Transfer/initiateintertransfer/InitiateInterTransfer-001-positive.yaml',
    'ExecuteInterTransfer': 'artifacts/api/PT_Local_Transfer/executeintertransfer/ExecuteInterTransfer-001-positive.yaml',
    'GetScheduledListing': 'artifacts/api/PT_Local_Transfer/getscheduledlisting/GetScheduledListing-001-positive.yaml',
    'GetScheduledDetails': 'artifacts/api/PT_Local_Transfer/getscheduleddetails/GetScheduledDetails-001-positive.yaml',
    'InquireTransferFee': 'artifacts/api/PT_Local_Transfer/inquiretransferfee/InquireTransferFee-001-positive.yaml',
    'InterPreMonetaryCheck': 'artifacts/api/PT_Local_Transfer/interpremonetarycheck/InterPreMonetaryCheck-001-positive.yaml',
    'IntraPreMonetaryCheck': 'artifacts/api/PT_Local_Transfer/intrapremonetarycheck/IntraPreMonetaryCheck-001-positive.yaml',
    'LimitSettingInquiry': 'artifacts/api/PT_Local_Transfer/limitsettinginquiry/LimitSettingInquiry-001-positive.yaml',
    'LimitSettingMaintanenceInquiry': 'artifacts/api/PT_Local_Transfer/limitsettingmaintanenceinquiry/LimitSettingMaintanenceInquiry-001-positive.yaml',
    'LimitSettingUpdate': 'artifacts/api/PT_Local_Transfer/limitsettingupdate/LimitSettingUpdate-001-positive.yaml',
    'RemoveScheduled': 'artifacts/api/PT_Local_Transfer/removescheduled/RemoveScheduled-001-positive.yaml',
    'GetPTMaintenanceCountries': 'artifacts/api/PT_Local_Transfer/getptmaintenancecountries/GetPTMaintenanceCountries-001-positive.yaml',
}


def parse_table_rows(text):
    rows = []
    for line in text.splitlines():
        line = line.strip()
        if not line.startswith('|'):
            continue
        # skip separator row
        if re.match(r'^\|\s*-+', line):
            continue
        cols = [c.strip() for c in line.split('|')[1:-1]]
        # Expect at least 8 columns per the FSD table
        if len(cols) < 8:
            continue
        rows.append(cols)
    return rows


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--fsd', required=True)
    p.add_argument('--out', required=True)
    args = p.parse_args()

    fsd_text = Path(args.fsd).read_text(encoding='utf-8')
    rows = parse_table_rows(fsd_text)

    # header detection - find header row and skip it
    header = None
    data_rows = []
    for r in rows:
        if header is None and 'Journey' in r[0] and 'Test Case Code' in r[1]:
            header = r
            continue
        if header is not None:
            data_rows.append(r)

    suites = {}
    ambiguous = []

    for cols in data_rows:
        journey = cols[0]
        test_code = cols[1] or 'UNKN'
        test_title = cols[2]
        step_no = cols[3]
        test_step = cols[4]
        api_triggered = cols[5]

        if test_code not in suites:
            suites[test_code] = {'journey': journey, 'code': test_code, 'title': test_title, 'steps': []}

        step_entry = {'seq': int(step_no) if step_no.isdigit() else step_no, 'action': test_step}

        # extract API key token from api_triggered (e.g., GetSourceAccountList (GET))
        api_key = None
        if api_triggered and api_triggered != '—' and api_triggered != '—':
            m = re.match(r'([A-Za-z0-9_]+)', api_triggered)
            if m:
                api_key = m.group(1)

        if api_key and api_key in API_MAP:
            api_file = API_MAP[api_key]
            api_test_id = Path(api_file).stem
            step_entry.update({'apiTestId': api_test_id, 'apiFile': api_file})
        else:
            step_entry.update({'apiTestId': None, 'apiFile': None})
            if api_key:
                ambiguous.append({'test_code': test_code, 'step': step_no, 'api_triggered': api_triggered})

        suites[test_code]['steps'].append(step_entry)

    # convert suites dict to list preserving insertion order
    suite_list = [suites[k] for k in suites]

    manifest = {
        'id': 'FSD_Local_Transfer_Execution_full',
        'title': 'FSD Local Transfer - Full Execution Manifest (positive) ',
        'description': 'Auto-generated mapping of FSD rows to positive API test artifacts.',
        'environment': ['SIT', 'UAT'],
        'suites': suite_list,
        'ambiguous_rows': ambiguous,
    }

    outp = Path(args.out)
    outp.parent.mkdir(parents=True, exist_ok=True)
    outp.write_text(yaml.safe_dump(manifest, sort_keys=False, allow_unicode=True), encoding='utf-8')
    print(f'Wrote manifest to {outp} with {len(suite_list)} suites; ambiguous rows: {len(ambiguous)}')


if __name__ == '__main__':
    main()
