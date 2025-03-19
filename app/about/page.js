import Link from "next/link";

export default function Home() {


  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
          <div style={{width: '100%'}}>
            <img style={{borderRadius: 20}} src="https://bucket.peacht.art/misskey/a15f5456-f28d-4fe5-92bd-07f3dcba7865.png"/>
          </div>
          <div style={{flexGrow: 1, textAlign: 'center'}}>
            <h1>가입하면 뭐가 좋나요?</h1>
            <p>자신의 페이지를 커스텀할 수 있게 됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
