#!/bin/bash

# Fix all YAML files with the context-path value issue
find artifacts/api -name "*.yaml" -type f | while read file; do
  if grep -q "^context-path value:" "$file"; then
    # Use sed to comment out lines 4-10
    sed -i '4,10s/^/# /' "$file"
    echo "Fixed: $file"
  fi
done
