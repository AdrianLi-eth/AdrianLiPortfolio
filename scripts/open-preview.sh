#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ROUTE="${1:-}"

BASE="$("$ROOT/scripts/dev-fresh.sh")"
URL="$BASE"

if [ -n "$ROUTE" ]; then
  URL="${BASE%/}/#/project/${ROUTE}"
fi

if command -v open >/dev/null 2>&1; then
  open "$URL"
fi

echo "$URL"
