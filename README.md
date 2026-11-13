# EDUtech Asia 2026 전시회 참가 결과 보고 사이트

## 바로 보기
`index.html`을 브라우저에서 열면 됩니다.

## GitHub Pages 올리기
1. GitHub에서 새 Repository 생성 (예: `EduTech_Asia_2026`)
2. 이 폴더 안의 파일(`index.html`, `videos.js`, `README.md`)과 `assets` 폴더를 그대로 업로드
3. Repository → Settings → Pages
4. `Deploy from a branch`
5. Branch `main`, Folder `/ (root)` 선택 후 Save
6. `https://사용자명.github.io/저장소명/` 주소로 발표 가능

> ⚠️ 무료 계정의 GitHub Pages는 **링크를 아는 누구나 볼 수 있는 공개 페이지**입니다.
> 미팅 상대 실명·후속 조치 등 내부 정보가 포함되어 있으니 공유 범위를 확인하세요.

## 폴더 구조
```
index.html          발표 페이지 (본문·차트 데이터)
videos.js           현장 영상 목록
assets/images/      사진·로고 (PPT에서 추출, 웹용으로 압축)
assets/videos/      MP4 영상 넣는 곳
```

## 영상 추가
1. MP4를 `assets/videos/` 폴더에 넣기 (GitHub 웹 업로드는 파일당 25MB 이하)
2. `videos.js`를 열기
3. 아래처럼 추가

```js
const VIDEO_CONFIG = [
  { title:"Kinderboard 부스 시연", src:"assets/videos/kinderboard.mp4", poster:"assets/images/demo-01.jpg" },
  { title:"LumiTeach 상담",       src:"assets/videos/lumiteach.mp4",   poster:"assets/images/demo-04.jpg" }
];
```
`poster`로 지정한 사진은 본문에서 클릭하면 그 자리에서 영상이 재생됩니다.

## 영상 삭제 / 순서 변경
`videos.js`의 `VIDEO_CONFIG` 배열에서 해당 줄 삭제 또는 줄 순서 변경.

## 숫자(차트) 수정
`index.html` 맨 아래 `<script>`의 `DAILY`, `CHARTS` 배열 숫자만 바꾸면 막대그래프가 자동으로 다시 그려집니다.
KPI 카드(572 · 414 · 24 · 94%)는 `#overview` 섹션의 숫자를 직접 수정하세요.

## 사진 교체
`assets/images/`에서 같은 파일명으로 덮어쓰면 됩니다. 첫 화면 사진은 `hero-edutech.jpg`, 로고는 `edutech-logo.png`.

## 발표 조작
- 우측 아래 ↑ / ↓ : 섹션 이동
- 키보드 ↑ / ↓, Page Up / Page Down: 섹션 이동
- 사진 클릭: 크게 보기 (Esc 또는 클릭으로 닫기)
- 우측 상단 `영상 관리`: 로컬 영상 임시 테스트
- 키보드 `E`: 영상 관리 패널 열기/닫기

※ `영상 관리` 패널에서 추가한 영상은 새로고침하면 사라집니다.
GitHub에 영구 반영하려면 `assets/videos` + `videos.js` 방식으로 추가하세요.
