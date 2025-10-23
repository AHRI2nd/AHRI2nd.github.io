---
title: Second Test
date: 2025-10-23 10:19:00 +0900 # 발행 시간 (한국 시간: +0900)
categories: [Amazing]        # 메인 카테고리 (예: Computer Science)
tags: [amazing, lol, Github, Chirpy]              # 검색을 위한 키워드 (예: Jekyll, GitHub, Chirpy)
# math: true                      # 수식 사용 시 주석 제거
mermaid: true                   # 다이어그램 사용 시 주석 제거
# pin: true                       # 메인 페이지 상단에 고정 시 주석 제거
---

'''mermaid
flowchart TD
    A[사용자 접속] --> B{Cloudflare 캐시 확인};
    B -- 캐시 없음 --> C[GitHub Pages 요청];
    B -- 캐시 있음 --> D[캐시된 HTML 전달];
    C --> D;
'''