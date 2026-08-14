# 스마트폰 전문수리점 — Next.js 버전

기존에 만들었던 단일 HTML 파일을 Next.js App Router 구조로 나눈 프로젝트입니다.

## 폴더 구조

```
app/
  globals.css     ← 색상 변수, 타이포그래피, 레이아웃 등 전체 CSS
  layout.tsx      ← 모든 페이지에 공통으로 붙는 헤더/공지배너/푸터/모바일 네비 (metadata 포함)
  page.tsx        ← Hero · BrandStory · Trust · Reviews를 조립하는 홈 페이지 (스크롤 리빌 로직 포함)
components/
  Hero.tsx        ← 첫 화면 (헤드라인 + 3가지 안심 포인트)
  BrandStory.tsx  ← 브랜드 이야기 섹션
  Trust.tsx       ← "확인해보세요" 3가지 신뢰 카드 섹션
  Reviews.tsx     ← 후기 · 별점 · 네이버 플레이스 링크 섹션
  Header.tsx      ← 스크롤하면 그림자가 생기는 상단 고정 헤더 (인터랙션이 있어 별도 분리)
  AnnounceBar.tsx ← 4.2초마다 문구/색이 바뀌는 공지 배너 (인터랙션이 있어 별도 분리)
  Footer.tsx      ← 정적 푸터
  MobileNav.tsx   ← 모바일 화면에서만 보이는 하단 CTA + 네비게이션 바
public/
  logo-icon.png   ← 업로드해주신 로고에서 흰색 아이콘만 투명 배경으로 추출한 파일
```

`page.tsx`의 스크롤 리빌 효과(`.reveal` → `.in`)는 마운트 후 DOM 전체를 훑는 방식이라
Hero/BrandStory/Trust/Reviews로 섹션이 나뉘어도 그대로 동작합니다.

## 왜 파일이 3개보다 많아졌나요?

`layout.tsx`는 `metadata`를 export해야 해서 서버 컴포넌트로 남겨야 했어요. 그런데 헤더의
스크롤 그림자 효과와 배너의 자동 전환은 `useState`/`useEffect`가 필요한 클라이언트 로직이라
같은 파일 안에 넣을 수 없었습니다. 그래서 그 두 부분만 `components/Header.tsx`,
`components/AnnounceBar.tsx`로 분리했고, 나머지 정적인 Footer·MobileNav도 같은 이유로
가독성을 위해 컴포넌트로 뺐습니다. 요청하신 세 파일(`globals.css`, `layout.tsx`, `page.tsx`)의
핵심 골격은 그대로 유지했습니다.

## 실행 방법

```bash
npm install
npm run dev
```

이후 http://localhost:3000 에서 확인하실 수 있습니다.

## 수정 포인트

- 색상은 `app/globals.css` 최상단 `:root` 블록의 CSS 변수만 바꾸면 전체가 따라 바뀝니다.
- 로고를 교체하려면 `public/logo-icon.png`를 같은 파일명으로 덮어쓰면 됩니다.
- 실제 네이버 플레이스 후기 데이터로 교체하려면 `app/page.tsx`의 `review-card` 부분을
  수정하거나, 나중에 API로 불러오는 방식으로 바꿀 수 있습니다.
