#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT=5173
HOST=127.0.0.1
PID_FILE="$ROOT/.cursor/dev-server.pid"
LOG_FILE="$ROOT/.cursor/dev-server.log"

mkdir -p "$ROOT/.cursor"

kill_port() {
  local pids
  pids="$(lsof -ti "tcp:${PORT}" -sTCP:LISTEN 2>/dev/null || true)"
  if [ -n "$pids" ]; then
    # shellcheck disable=SC2086
    kill $pids 2>/dev/null || true
    sleep 0.4
  fi
}

is_ready() {
  curl -sf "http://${HOST}:${PORT}/" >/dev/null 2>&1
}

cd "$ROOT"

kill_port

if [ -f "$PID_FILE" ]; then
  old_pid="$(cat "$PID_FILE")"
  kill "$old_pid" 2>/dev/null || true
fi

nohup npm run dev -- --host "$HOST" --port "$PORT" --strictPort >"$LOG_FILE" 2>&1 &
echo $! >"$PID_FILE"

for _ in $(seq 1 40); do
  if is_ready; then
    echo "http://${HOST}:${PORT}/"
    exit 0
  fi
  sleep 0.25
done

echo "Dev server failed to start. See ${LOG_FILE}" >&2
exit 1
