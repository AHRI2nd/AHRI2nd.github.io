#!/usr/bin/env bash
# DevFlash 배포용 폴더(dist/) 생성 스크립트
# Cloudflare Pages 대시보드에 dist 폴더를 드래그&드롭하면 됩니다.
set -euo pipefail
cd "$(dirname "$0")"

rm -rf dist
mkdir -p dist

# 사이트 구성 파일만 복사 (.DS_Store 등 잡파일 제외)
rsync -a --exclude='.DS_Store' \
  index.html \
  css \
  week \
  quiz \
  dist/

echo "dist/ 생성 완료:"
find dist -type f | sort
