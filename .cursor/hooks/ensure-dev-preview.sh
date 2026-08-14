#!/usr/bin/env bash
# Cursor stop hook: keep a fresh dev server running after agent tasks.
cat >/dev/null

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

if "$ROOT/scripts/dev-fresh.sh" >/dev/null 2>&1; then
  echo '{"followup_message":"Dev preview refreshed at http://127.0.0.1:5173/ — use this URL (not 5174/5175)."}'
else
  echo '{"followup_message":"Dev server failed to start. Run: npm run dev:fresh"}'
fi

exit 0
