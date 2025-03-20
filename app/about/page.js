import Link from "next/link";

export default function Home() {


  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
          <div style={{flexGrow: 1, textAlign: 'center'}}>
            <h1>소개</h1>
          </div>
      </div></div>
      <div className='main section'>
        <div className='inner-section-feed'>
          <div style={{width: '100%'}}>
            <img style={{borderRadius: 20}} src="https://bucket.peacht.art/misskey/c06143d9-be0f-44de-8b41-0fe6dcf42239.webp"/>
          </div>
          <div style={{flexGrow: 1, textAlign: 'center'}}>
            <h1>자신만의 고유한 프로필 페이지</h1>
            <p>전용 페이지를 커스텀할 수 있는 게 메인 기능!</p>
            <p>각자의 페이지에서는 현재 스트리밍 중인 영상의 내용,</p>
            <p>블루스카이나 연합우주 타임라인에 남긴 글을 조회할 수 있을 뿐 아니라,</p>
            <p>그동안 올렸던 영상들을 분류해 두거나,</p>
            <p>프로필, 링크 등을 정리해둘 수 있어요.</p>
          </div>
        </div>
        </div>
      <div className='main section'>
        <div className='inner-section'>
          <div style={{flexGrow: 1, textAlign: 'start'}}>
            <h1>홍보 효과</h1>
            <p>진행 중인 라이브 정보나, 모아진 영상 정보는</p>
            <p>허브 홈페이지 상단 라이브 / 영상 메뉴에서 모아 보여지게 되어요.</p>
          </div>
          <div style={{width: '100%', maxWidth:300}}>
            <img style={{borderRadius: 20}} src="/marketing.png"/>
          </div>
        </div>
      </div>
      <div className='main section'>
        <div className='inner-section'>
          <div style={{width: '100%', maxWidth:300}}>
            <img style={{borderRadius: 20}} src="/community.png"/>
          </div>
          <div style={{flexGrow: 1, textAlign: 'end'}}>
            <h1>멤버끼리의 교류</h1>
            <p>단순 허브 서비스가 아니라</p>
            <p>음악계 버츄얼 동맹-그 이상을 추구하고 있어요.</p>
            <p>분야가 비슷한 멤버들끼리의 교류를 통해</p>
            <p>굉장한 시너지를 만들어내면 좋을 것 같아요.</p>
          </div>
        </div>
      </div>
      <div className='main section'>
        <div className='inner-section'>
          <div style={{flexGrow: 1, textAlign: 'start'}}>
            <h1>승인제</h1>
            <p>허브 가입은 승인제로 이루어져요.</p>
            <p>"음악계 버츄얼 스트리머 / 유튜버" 라는 주제가 있는만큼</p>
            <p>해당 주제를 만족하는 분들만 멤버로 받고 있어요.</p>
            <p>높은 수준을 요구하는 것은 전혀 아니에요.</p>
            <p>커버곡 / 자작곡 / 연주 영상 등의 활동 내역이 있다면 오케이!</p>
          </div>
          <div style={{width: '100%', maxWidth:300}}>
            <img style={{borderRadius: 20}} src="/approved.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}
