import BskyFeeds from "@/components/BskyFeeds";
import Link from "next/link";

export default function Home() {


  return (
    <div>
      <div className="slidebar">
        <img src="https://images.pexels.com/photos/4765390/pexels-photo-4765390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section'>
          <div style={{flexGrow: 1}}>
            <h1>피치타르트</h1>
            <p>정말 느슨한 음악계 버츄얼 동맹을 지향합니다!</p>
            <Link href="/join" className="button">관심이 있다면?</Link>
          </div>
          <div style={{width: '100%', maxWidth: '300px', overflow: 'hidden', borderRadius: 20}}>
            <img src="/ina.png"/>
          </div>
        </div>
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
        <h1>멤버 소식 (Bsky)</h1>
          <BskyFeeds />
        </div>
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
        <h1>멤버 목록</h1>
        </div>
      </div>
    </div>
  );
}
