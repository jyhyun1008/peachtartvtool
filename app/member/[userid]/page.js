
import BskyFeedsByUser from "@/components/BskyFeedsByUser";
import Chzzk from "@/components/Chzzk";
import MarkedParser from "@/components/MarkedParser";
import Link from "next/link";

export default async function Home({params}) {

    const userid = (await params).userid

    const getUser = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/getUserById', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            pid: userid
        })
    })
    const json = await getUser.json()
    let user = json.rows[0]

    // const user = {
    //     pid: 1,
    //     handle: 'however_ina',
    //     bskyHandle: 'however-ina.peacht.art.ap.brid.gy',
    //     knownAs: '연이나',
    //     accentColor: '#593bc4',
    //     bio: `천문대에서 노래하면서 베이스 치는 치즈냥이.\n\n과거와 현재의 하늘을 잇는\n\n싱어송라이터를 목표하고 있습니다.\n\n오래 전, 관상감의 천문학 생도였어요.`,
    //     avatar: '/ina.png',
    //     avatarLong: '/ina_long.png',
    //     bioLong: `옛 사람들은 별을 보고 이야기를 만들고, 악기를 연주하며 호기심을 노래하고\n\n그러면서 자신들이 어디로 나아가야 할지, 그 길을 찾았다.\n\n그렇지 않고서는, 우리 모두가 여기까지 도달할 수 없었을 것이다.\n\n시간이 흘러, 영원히 반짝일 것만 같던 검푸른 비단이 빛을 잃고,\n\n대신 인류 자신이 쏘아올린 빛이 하늘 끝까지 닿았을 때,\n\n결국 길을 잃는 자들이 하나둘 생겨났다.\n\n시대의 틈에서 길을 잃었으나 포기하지 않고, 노래라는 낯선 일에 도전하지만\n\n'그러나' 이를 통해 과거의 빛깔을 다시금 불러올 사명을 지닌 삶.\n\n## 기본정보\n\n연이나 (However_Ina)\n\n153cm`,
    // }

    const artistMain = {
        width: '100%',
        height: '100%',
        background: `linear-gradient(120deg, var(--background), ${user.accentcolor})`,
    }

    const sidebar = {
        background: `linear-gradient(120deg, var(--background), ${user.accentcolor})`,
    }

    const circle = {
        background: '#fff0e9',
        color: user.accentcolor,
    }

    const largeImgStyle = {
        width: 200,
        maxWidth: '100%',
        aspectRatio: 1,
        borderRadius: 20,
        boxShadow: '3px 3px 5px #00000022',
    }

    return (
        <div>
        <div style={artistMain}>
            <div className="sidebar" style={sidebar}>
            <img
                src={user.avatar}
                alt={user.handle}
                style={largeImgStyle}
            />
            <h1 className="h1-nickname">{user.knownas}</h1>
            <div>@{user.handle}</div>
            <div style={{height: '1rem'}}></div>
            <MarkedParser raw={user.bio} align='center' />
            </div>
            <div className="artistMenu">
            <Link href={`/member/${userid}`}><div style={circle}><p>홈</p></div></Link>
            <Link href={`/member/${userid}/profile`}><div style={circle}><p>프로필</p></div></Link>
            <Link href={`/member/${userid}/video`}><div style={circle}><p>영상</p></div></Link>
            <Link href={`/member/${userid}/links`}><div style={circle}><p>링크</p></div></Link>
            </div>
            <div className="content">
            <h1 style={{paddingBottom: '0.3em'}}>진행 중인 라이브 <span>&gt;</span></h1>
            <Chzzk channel={user} isProfile={true} />
            <h1 className="h1" >최신 피드 <span>&gt;</span></h1>
            <BskyFeedsByUser bskyHandle={user.bskyhandle}/>
            </div>
        </div>
        </div>
    );
}