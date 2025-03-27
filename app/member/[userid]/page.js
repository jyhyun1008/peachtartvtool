
import BskyFeedsByUser from "@/components/BskyFeedsByUser";
import Chzzk from "@/components/Chzzk";
import MarkedParser from "@/components/MarkedParser";
import Link from "next/link";
import { redirect } from "next/navigation";
export const dynamic = 'force-dynamic';

export default async function Home({params}) {

    const userid = (await params).userid

    const getUser = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUserByHandle`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
            handle: userid
        })
    })
    const json = await getUser.json()
    let user
    if (json.rows.length == 1 && json.rows[0].group == 'member') {
        user = json.rows[0]
    } else {
        redirect('/')
    }

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
            <MarkedParser raw={user.bio.replace(/\n/gm, '\n\n')} align='center' />
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
            <BskyFeedsByUser xrss={user.xrss}/>
            </div>
        </div>
        </div>
    );
}

export async function generateMetadata(
    { params },
    parent
  ) {
    // read route params
    const { userid } = await params
   
    // fetch data
    const product = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUserByHandle`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
            handle: userid
        })
    }).then((res) => res.json())

    let user
    if (product.rows.length == 1 && product.rows[0].group == 'member') {
        user = product.rows[0]
    }
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
        title: `${user.knownas} - PeachtArt Hub`,
        description: user.bio,
        openGraph: {
            title: `${user.knownas} - PeachtArt Hub`,
            description: user.bio,
            siteName: user.knownas,
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/member/${userid}`,
            images: [user.avatar,...previousImages],
        },
        twitter: {
            card: 'summary', // 여기다가 player 지정하면 플레이어 된대
            title: `${user.knownas} - PeachtArt Hub`,
            description: user.bio,
            images: [user.avatar,...previousImages],
        }
    }
  }