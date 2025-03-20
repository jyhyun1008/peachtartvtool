
import MarkedParser from "@/components/MarkedParser";
import Link from "next/link";
export const dynamic = 'force-dynamic';

export default async function Home({params}) {

    const userid = (await params).userid

    if (parseInt(userid) != userid) {
        redirect('/')
    }

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
    let user
    if (json.rows.length == 1 && json.rows[0].group == 'member') {
        user = json.rows[0]
    } else {
        redirect('/')
    }


    const getVideo = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/getVideosOfUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            pid: userid
        })
    })
    const videoJson = await getVideo.json()
    const userVideo = videoJson.rows

    // const userVideo = [{
    //     title: '키즈나 뮤직',
    //     url: 'https://www.youtube.com/embed/NLZa9x9VWYg',
    //     category: '커버 곡',
    // }, {
    //     title: '보천가',
    //     url: 'https://www.youtube.com/embed/IlO02-R7x6Q',
    //     category: '오리지널 곡'
    // }, {
    //     title: '태양은 몇 번이고',
    //     url: 'https://www.youtube.com/embed/Tl9XYm8Q2yE',
    //     category: '커버 곡'
    // }]

    const userVideoCategory = userVideo.map(video => video.category);
    const userVideoCategorySet = [...new Set(userVideoCategory)]

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
                {userVideoCategorySet.map((category, index)=> (
                    <div key={`cate${index}`}>
                    <h1 className="h1">{category}</h1>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                        {userVideo.filter((el)=>el.category == category).map((video, ind)=> (
                            <div key={`video${ind}`}>
                                <iframe width="100%" style={{aspectRatio: '16 / 9', borderRadius: 20}} src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <div style={{width: '100%', display: 'flex', gap: 10, alignItems: 'center', color: `var(--foreground)`}}>
                                    <img src={user.avatar} style={{height: 48, aspectRatio: 1, borderRadius: 20}} />
                                    <div>
                                        <p>{video.title}</p>
                                        <p><b>{user.knownas}</b></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        </div>
    );
}