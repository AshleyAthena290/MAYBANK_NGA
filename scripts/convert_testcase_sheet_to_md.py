#!/usr/bin/env python3
"""
Convert an Excel sheet (default sheet: 'Test Case') to a Markdown file.

Usage:
  python scripts/convert_testcase_sheet_to_md.py \
    "input/Journey_Test_cases/FSD_Local_Transfer_Enhanced_With_APIs.xlsx" \
    --sheet "Test Case" \
    --output output.md

The script is reusable for other files and sheets.
"""
from __future__ import annotations
import argparse
from pathlib import Path
import pandas as pd
from typing import Optional


def df_to_md_table(df: pd.DataFrame) -> str:
    cols = list(df.columns)
    header = "| " + " | ".join(cols) + " |"
    sep = "| " + " | ".join(["---"] * len(cols)) + " |"
    lines = [header, sep]
    for _, row in df.iterrows():
        cells = []
        for v in row.tolist():
            if pd.isna(v):
                cells.append("")
            else:
                s = str(v)
                s = s.replace("\n", "<br>")
                s = s.replace("|", "\\|")
                cells.append(s)
        lines.append("| " + " | ".join(cells) + " |")
    return "\n".join(lines)


def write_markdown(df: pd.DataFrame, out_path: Path, sheet_name: str) -> None:
    title = f"# Sheet: {sheet_name}"
    md = [title, ""]

    # Try to create per-test-case sections if an ID column exists
    id_cols = [c for c in df.columns if c.strip().lower() in ("test case id", "testcaseid", "id", "test id", "tcid")]
    title_cols = [c for c in df.columns if c.strip().lower() in ("title", "name", "summary")]

    if id_cols:
        id_col = id_cols[0]
        title_col = title_cols[0] if title_cols else None
        for test_id in df[id_col].fillna("").unique():
            if test_id == "":
                continue
            sub = df[df[id_col] == test_id]
            heading = f"## {test_id}"
            if title_col and sub.iloc[0].get(title_col):
                heading += f" - {sub.iloc[0].get(title_col)}"
            md.extend([heading, ""])
            md.append(df_to_md_table(sub.drop(columns=[id_col]) if len(sub.columns) > 1 else sub))
            md.append("")
        # also include any rows without an id
        rest = df[df[id_col].isna() | (df[id_col].astype(str).str.strip() == "")]
        if not rest.empty:
            md.extend(["## Miscellaneous", "", df_to_md_table(rest)])
    else:
        md.append(df_to_md_table(df))

    out_path.write_text("\n".join(md), encoding="utf-8")


def main(argv: Optional[list[str]] = None) -> int:
    p = argparse.ArgumentParser(description="Convert an Excel sheet to Markdown")
    p.add_argument("input", help="Path to input Excel file")
    p.add_argument("--sheet", default="Test Case", help="Sheet name to convert (default: 'Test Case')")
    p.add_argument("--output", help="Path to output markdown file (default: same name as input + .md)")
    args = p.parse_args(argv)

    inp = Path(args.input)
    if not inp.exists():
        print(f"Input file not found: {inp}")
        return 2

    out = Path(args.output) if args.output else inp.with_suffix("").with_suffix("")
    if args.output is None:
        # default to input filename + .md in current dir
        out = Path(inp.stem + ".md")

    try:
        df = pd.read_excel(inp, sheet_name=args.sheet, dtype=object)
    except Exception as e:
        print(f"Failed to read sheet '{args.sheet}' from {inp}: {e}")
        return 3

    # Normalize dataframe: keep columns as strings
    df.columns = [str(c) for c in df.columns]

    write_markdown(df, out, args.sheet)
    print(f"Wrote Markdown to: {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
