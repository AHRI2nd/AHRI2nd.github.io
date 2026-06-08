# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에게 지침을 제공합니다.

## 현재 배포 상태

이 리포지토리(`AHRI2nd/AHRI2nd.github.io`)의 블로그 소스코드는 현재 **사용되지 않습니다.**

블로그는 아래 리포지토리로 이전되어 Cloudflare Pages를 통해 서비스되고 있습니다.

| 항목 | 내용 |
|---|---|
| 블로그 소스 리포 | `AHRI2nd/ARIS-Blog` |
| 배포 서비스 | Cloudflare Pages |
| 도메인 | https://ahri2nd.xyz |
| 로컬 경로 | `/Users/ahri2nd/Working/ARIS-Blog` |

이 리포의 `Original-Blog-Sources` 브랜치에 이전 소스코드가 보존되어 있습니다.

---

## 프로젝트 개요

[Fuwari](https://github.com/saicaca/fuwari) Astro 블로그 템플릿 기반의 개인 블로그(**ahri2nd.xyz**)입니다. Astro(정적 사이트 생성), Svelte(인터랙티브 컴포넌트), Tailwind CSS(스타일링), TypeScript를 사용합니다.

**패키지 매니저: pnpm** (강제 적용 — `npm`이나 `yarn` 대신 반드시 `pnpm` 사용)

## 주요 명령어

```bash
pnpm dev          # localhost:4321에서 개발 서버 실행
pnpm build        # 프로덕션 빌드 → ./dist/ (pagefind 인덱싱 포함)
pnpm preview      # 프로덕션 빌드 로컬 미리보기
pnpm check        # Astro 타입 체크
pnpm type-check   # TypeScript 타입 체크 (--noEmit)
pnpm lint         # Biome으로 린트 및 자동 수정
pnpm format       # Biome으로 코드 포맷
pnpm new-post <파일명>  # 새 블로그 포스트 생성
```

---

## GitHub Pages로 재전환하는 방법

나중에 이 리포 또는 다른 리포에서 GitHub Pages로 다시 서비스할 경우 아래 순서를 따릅니다.

### 1단계 — Cloudflare Pages 커스텀 도메인 제거

Cloudflare 대시보드 → Pages → `aris-blog` → 커스텀 도메인 탭 → `ahri2nd.xyz` 제거

### 2단계 — GitHub Pages 활성화

배포할 리포 → Settings → Pages → Source: `GitHub Actions` 선택

### 3단계 — 워크플로우 파일 확인

`.github/workflows/deploy.yml`이 있어야 합니다. 없으면 아래 내용으로 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build Astro
        run: pnpm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4단계 — DNS 변경

Cloudflare DNS → `ahri2nd.xyz` CNAME 레코드를 `ahri2nd.github.io`로 변경  
(또는 GitHub Pages 커스텀 도메인 설정에서 `ahri2nd.xyz` 입력 후 DNS 레코드 업데이트)

### 5단계 — astro.config.mjs 확인

```js
site: "https://ahri2nd.xyz/",
base: "/",
```

이 값은 GitHub Pages와 Cloudflare Pages 모두 동일하게 사용 가능합니다.

### 6단계 — Cloudflare Pages 프로젝트 삭제 (선택)

Cloudflare 대시보드 → Pages → `aris-blog` → Settings → Delete project
