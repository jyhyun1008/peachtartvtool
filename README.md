This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 시작하기

### 코드 받고 설치하기

```bash
git clone https://github.com/jyhyun1008/peachtartvtool.git
cd peachtartvtool
npm i
```

### .env 파일의 준비

```
NEXT_PUBLIC_DOMAIN=http://localhost:3010 - (빌드시 연결한 도메인으로 수정필요)

BSKY_HANDLE=(블루스카이 허브 계정 핸들)
BSKY_PASS=(블루스카이 허브 계정)

DATABASE_URL=(네온 콘솔에서 확인 가능)

NAVER_CLIENT_ID=(네이버 Client ID)
NAVER_CLIENT_SECRET=(네이버 Client Secret)
SECRET_KEY=(임의의 문자열)
```

(치지직 기준이라 네이버 로그인만 지원하게 되었습니다.)

### 데이터베이스 셋팅 및 시작
```
npx drizzle-kit generate
npx drizzle-kit push
npm run dev
```
