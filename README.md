# 손금연구소

손 사진을 서버로 보내지 않고 브라우저 안에서 선을 보기 쉽게 만든 뒤, 사용자가 확인한 감정선·두뇌선·생명선 특징을 전통 손금술 기준으로 해석하는 정적 웹 MVP입니다.

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
- `.github/workflows/site.yml` — 푸시/PR 시 정적 검증

## 주의

손금은 과학적으로 검증된 성격 검사나 미래 예측법이 아닙니다. 이 프로젝트는 오락·자기성찰용이며 의료·재정·법률 판단에 사용하면 안 됩니다.

## GitHub Actions

`main` 푸시와 PR마다 GitHub Actions가 `dist/index.html`의 JavaScript 구문과 필수 콘텐츠를 검사합니다. 실제 배포는 현재 연결된 Sites 주소를 사용합니다. GitHub Pages가 필요하면 저장소를 공개하거나 Pages 사용 권한을 먼저 활성화한 뒤 배포 job을 추가하면 됩니다.
