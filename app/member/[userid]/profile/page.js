
import MarkedParser from "@/components/MarkedParser";
import Link from "next/link";

export default async function Home({params}) {

    const userid = (await params).userid

    //TODO: API POST userid

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
                <h1 className="h1" >프로필 <span>&gt;</span></h1>
                <div style={{width: '100%', textAlign: 'center', paddingBottom: '2rem'}}>
                    <h2>전신</h2>
                    {user.avatarlong != ''
                        ?<img src={user.avatarlong} style={{maxHeight: 800}} />
                        :<></>
                    }
                </div>
                <MarkedParser raw={user.biolong} align='center' />
            </div>
        </div>
        </div>
    );
}