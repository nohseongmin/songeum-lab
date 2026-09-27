# 손금연구소

손 사진을 서버로 보내지 않고 브라우저 안에서 선을 보기 쉽게 만든 뒤, 감정선·두뇌선·생명선·운명선·태양선·관계선 특징을 전통 손금술 기준으로 해석하고 한 줄 총평까지 만드는 반응형 웹 MVP입니다. 지원되는 데스크톱 Chrome에서는 브라우저 내장 Prompt API와 Translator API로 사진 판독과 한국어 총평을 기기 안에서 처리하고, 미지원 브라우저와 모바일에서는 직접 선택 방식으로 대체합니다. 화면 하단에는 Google AdSense 연결을 위한 반응형 광고 자리를 예약해 두었습니다.

## 실행

```powershell
cd 'C:\Codex Projects\songeum-lab'
python -m http.server 4173 --directory dist
```

브라우저에서 `http://localhost:4173`을 엽니다. 별도 설치나 API 키가 없습니다.

## 구조

- `dist/index.html` — UI, 사진 처리, 해석 로직을 담은 단일 배포 파일
- `BLUEPRINT.md` — 시장성, BM, 보안, 범위와 로드맵
- `.openai/hosting.json` — 정적 호스팅 설정
- `.github/workflows/site.yml` — 푸시/PR 검증과 `main`의 GitHub Pages 배포

## 주의

손금은 과학적으로 검증된 성격 검사나 미래 예측법이 아닙니다. 이 프로젝트는 오락·자기성찰용이며 의료·재정·법률 판단에 사용하면 안 됩니다.

## GitHub Actions

`main` 푸시와 PR마다 GitHub Actions가 `dist/index.html`의 JavaScript 구문과 필수 콘텐츠를 검사합니다. `main` 검증이 통과하면 `dist`를 GitHub Pages에 자동 배포합니다.
