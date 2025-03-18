import Image from "next/image";
import "./page.module.css";
import Link from "next/link";

export default function Home() {

  const artistMain = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, var(--background),rgb(89, 59, 196))',
  }

  const sidebar = {
    background: 'linear-gradient(120deg, var(--background),rgb(89, 59, 196))',
  }

  const circle = {
    background: '#fff0e9',
    color: 'rgb(89, 59, 196)',
  }

  const largeImgStyle = {
    width: 200,
    maxWidth: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    boxShadow: '3px 3px 5px #00000022',
  }

  const profileImgStyle = {
    width: 70,
    height: 70,
    aspectRatio: 1,
    borderRadius: 14,
  }

  const snsWrapper = {
    width: '100%',
    borderRadius: 20,
    border: '1px solid #cccccc',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  }

  const snsFeed = {
    display: 'flex',
    gap: 10,
  }

  return (
    <div>
      <div style={artistMain}>
        <div className="sidebar" style={sidebar}>
          <img
            src="/ina.png"
            alt="however_ina"
            style={largeImgStyle}
          />
          <h1 className="h1-nickname">연이나</h1>
          <div>@however_ina</div>
          <div style={{height: '1rem'}}></div>
          <div>천문대에서 노래하면서 베이스 치는 치즈냥이.</div>
          <div>과거와 현재의 하늘을 잇는</div>
          <div>싱어송라이터를 목표하고 있습니다.</div>
          <div>오래 전, 관상감의 천문학 생도였어요.</div>
        </div>
        <div className="artistMenu">
          <div style={circle}><p>홈</p></div>
          <div style={circle}><p>프로필</p></div>
          <div style={circle}><p>영상</p></div>
          <div style={circle}><p>링크</p></div>
        </div>
        <div className="content">
          <h1 style={{paddingBottom: '0.3em'}}>진행 중인 라이브 <span>&gt;</span></h1>
          <div style={{width: '100%', aspectRatio: '16 / 9', background: '#000', borderRadius: 20}}></div>
          <h1 className="h1" >SNS 최신글 <span>&gt;</span></h1>
          <div style={snsWrapper}>
            <div style={snsFeed}>
              <img src="/ina.png" style={profileImgStyle} />
              <div>
                <p><b>연이나</b> @however_ina</p>
                <p>예시 트윗입니다!</p>
              </div>
            </div>
            <hr style={{background:'#cccccc', height:1, border:0}} />
            <div style={snsFeed}>
              <img src="/ina.png" style={profileImgStyle} />
              <div>
                <p><b>연이나</b> @however_ina</p>
                <p>예시 트윗입니다! 조금 더 긴 글을 적어 보았어요. 근데 뭘 적지 로렘입숨어쩌고저쩌고.</p>
              </div>
            </div>
            <hr style={{background:'#cccccc', height:1, border:0}} />
            <div style={snsFeed}>
              <img src="/ina.png" style={profileImgStyle} />
              <div>
                <p><b>연이나</b> @however_ina</p>
                <p>링크가 있는 경우. <Link href="https://peachtart.me/">https://peachtart.me/</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
