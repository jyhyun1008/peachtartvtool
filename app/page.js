import BskyFeeds from "@/components/BskyFeeds";
import MemberList from "@/components/MemberList";
import Link from "next/link";

export default function Home() {

  const users = [{
    pid: 2,
    handle: 'however_ina',
    knownas: '연이나',
    accentcolor: '#593bc4',
    bio: `천문대에서 노래하면서 베이스 치는 치즈냥이.\n\n과거와 현재의 하늘을 잇는\n\n싱어송라이터를 목표하고 있습니다.\n\n오래 전, 관상감의 천문학 생도였어요.`,
    avatar: '/ina.png',
    avatarlong: '/ina_long.png',
    biolong: `옛 사람들은 별을 보고 이야기를 만들고, 악기를 연주하며 호기심을 노래하고\n\n그러면서 자신들이 어디로 나아가야 할지, 그 길을 찾았다.\n\n그렇지 않고서는, 우리 모두가 여기까지 도달할 수 없었을 것이다.\n\n시간이 흘러, 영원히 반짝일 것만 같던 검푸른 비단이 빛을 잃고,\n\n대신 인류 자신이 쏘아올린 빛이 하늘 끝까지 닿았을 때,\n\n결국 길을 잃는 자들이 하나둘 생겨났다.\n\n시대의 틈에서 길을 잃었으나 포기하지 않고, 노래라는 낯선 일에 도전하지만\n\n'그러나' 이를 통해 과거의 빛깔을 다시금 불러올 사명을 지닌 삶.\n\n---\n\n## 기본정보\n\n연이나 (However_Ina)\n\n153cm`,
    links: `[{
        "title": "치지직",
        "url": "https://peachtart.me",
        "thumb": "/ina.png"
    },{
        "title": "유튜브",
        "url": "https://peachtart.me",
        "thumb": "/ina.png"
    }]`
}]

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
