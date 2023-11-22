
## 환경 구성
  1. 라이브러리: React
  2. 언어: TypeScript
  3. 상태관리: React-query(서버 상태) / MobX(클라이언트 상태)
  4. 테스트: jest
  5. 스타일링: styled-components

## 실행 순서

  1. npm install
  2. npm run start(:dev / :production) # 각 실행 환경별로 cli 별도

## 프로젝트 구성

/src
  + components: 화면 별 사용되는 각종 Component 폴더
  + hooks: Custom Hook 폴더
  + pages: 각 화면 파일 폴더
  + queries: query Provider 및 react query 관련 폴더
  + server: API 기능 개발 전 msw 관련 폴더
  + service: API 통신 관련 폴더
  + stores: 클라이언트 상태관리 (MobX) 관련 폴더
  + styles: styled-components로 작성된 파일 폴더
  + systemConfig: Error / lazy loading / 화면 접근제한 관련 폴더

## 주요 기능 개발

  1. 화면 컴포넌트 lazy로딩 및 preload적용
    + 랜딩 화면을 제외한 다른 화면 lazy 로딩을 적용하여 main.js의 번들링 사이즈를 줄여 초기 화면 TTV 향상
    + 300ms 이후 별도 화면 chunk preload를 적용해 화면 이동 시 끊김없는 사용자 경험 향상

  2. CustomErrorBoundary 개발
    + UI 내 Uncatched Error 발생 시 에러가 발생 된 UI를 대체하는 Error Component 개발

  3. useRouter Custom Hook 개발
    + routing 가능한 URL Type을 명시하여 Router Push 관련 로직 개발 시 개발 실수를 줄이기 위해 개발

  4. API Fetching Suspense적용
    + API 호출 상태가 Pending인 경우 해당 컴포넌트 UI 로딩 요소 사용자에게 제공
    + 컴포넌트 별로 분기 되어있어 Waterfall 방식이 아닌 병렬적으로 로딩되게끔 개발

  5. 구글 OAuth로그인 및 JWT Token 기반 로그인 개발
    + 어드민 웹을 고려하여 JWT를 Session Storage에 저장
    + 미 로그인: 랜딩화면 제외 타 화면 이동 불가
    + 로그인: 랜딩화면 이동 불가

  6. User List 화면 개발
    + Pagination 및 email 기반 Like 검색 기능 개발

  7. Test Code 작성
    + ErrorBoundary / User Api Test 코드 작성 (**.spec.tsx)

  8. 실행 환경 분기처리
    + .env-cmd 라이브러리를 통한 local, dev, production 환경 변수 분기처리

  9. API 통신 관련 공통 처리 함수 및 Error Handler 구현

