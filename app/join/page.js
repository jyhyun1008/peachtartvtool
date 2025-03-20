import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section'>
          <div>
            <h1>오른쪽 위의 네이버 로그인 버튼을 눌러주세요</h1>
            <p>감사합니다!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
