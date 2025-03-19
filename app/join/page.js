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
            <h1>채널에 필요한 모든 것을 정리합시다.</h1>
            <p>로렘 입숨 돌러 싯 아멧...</p>
          </div>
          <div style={{width: '100%', maxWidth: '300px', overflow: 'hidden', borderRadius: 20}}>
            <img src="/ina.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}
