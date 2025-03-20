import BskyFeeds from "@/components/BskyFeeds";
import MemberList from "@/components/MemberList";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function Home() {

  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section'>
          <div style={{flexGrow: 1}}>
            <h1>피치타르트</h1>
            <p>정말 느슨한 음악계 버츄얼 동맹을 지향하는 허브, 피치타르트예요.</p>
            <p>현재 블루스카이 및 브릿지를 통한 연합우주의 2종류의 SNS 연동,</p>
            <p>그리고 치지직과의 동기화를 지원하고 있답니다!</p>
            <Link href="/about" className="button">관심이 있다면?</Link>
          </div>
          <div style={{width: '100%', maxWidth: '300px',}}>
            <img src="/peachtart_without_bg.png" style={{borderRadius: 20}}/>
          </div>
        </div>
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
        <h1>멤버 소식</h1>
          <BskyFeeds />
        </div>
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
        <h1>멤버 목록</h1>
        <MemberList />
        </div>
      </div>
    </div>
  );
}
