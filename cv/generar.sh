#!/bin/sh
# Genera public/CV_Ignacio_Penamaria.pdf a partir de cv/cv.html con Chrome sin interfaz.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SALIDA="../public/CV_Ignacio_Penamaria.pdf"
PERFIL="$(mktemp -d -t cvchrome)"
rm -f "$SALIDA"
"$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir="$PERFIL" --no-pdf-header-footer --print-to-pdf="$SALIDA" \
  "file://$(pwd)/cv.html" >/dev/null 2>&1 &
PID=$!
# Chrome a veces termina de escribir el PDF y no se cierra: se espera el archivo y se lo cierra.
i=0
until [ -s "$SALIDA" ] || [ $i -ge 60 ]; do sleep 1; i=$((i + 1)); done
sleep 1
kill "$PID" 2>/dev/null || true
pkill -f "user-data-dir=$PERFIL" 2>/dev/null || true
rm -rf "$PERFIL"
[ -s "$SALIDA" ] || { echo "No se generó el PDF" >&2; exit 1; }
echo "PDF generado: $SALIDA"
