import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function Home() {

  const getVideo = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getAllVideos`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    mode: 'no-cors',
    body: JSON.stringify({})
  })
  const videoJson = await getVideo.json()
  const userVideo = videoJson.rows

  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section'  style={{textAlign: 'center', justifyContent: 'center'}}>
          <div>
              <h1>영상 / 클립 모음</h1>
          </div>
        </div>
      </div>
      <div className='main section' id="livelist">
        {userVideo.map((video, ind)=> (
            <div key={`video${ind}`}>
                <iframe width="100%" style={{aspectRatio: '16 / 9', borderRadius: 20}} src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Link style={{width: '100%', display: 'flex', gap: 10, alignItems: 'center', color: `var(--foreground)`}} href={`/member/${video.user.handle}`}>
                  <img src={video.user.avatar} style={{height: 48, aspectRatio: 1, borderRadius: 20}} />
                  <div>
                      <p>{video.title}</p>
                      <p><b>{video.user.knownas}</b></p>
                  </div>
                </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
