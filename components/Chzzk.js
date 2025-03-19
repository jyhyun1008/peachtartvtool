import { ChzzkClient } from "chzzk"
import Link from "next/link"

export default async function Chzzk({channel, isProfile=false}) {

const client = new ChzzkClient()

// // 채널 검색
// const result = await client.channel(channel.knownas)
// const channelRes = result.channels[0]
const liveDetail = await client.live.detail(channel.chzzkid)

return (
    <>
    {liveDetail.status!='CLOSE'
        ?<Link href={`https://chzzk.naver.com/${liveDetail.channel.channelId}`} style={{color: 'var(--foreground'}}>
            <div className="now-streaming" style={{width: '100%', aspectRatio:'16 / 9', background: `url('${liveDetail.liveImageUrl}')`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: 20, marginBottom: '1rem',}}></div>
            <div style={{width: '100%', display: 'flex', gap: 10, alignItems: 'center'}}>
                <img src={channel.avatar} style={{height: 48, aspectRatio: 1, borderRadius: 20, border: '3px solid var(--accent)'}} />
                <div>
                    <p>{liveDetail.liveTitle}</p>
                    <p><b>{channel.knownAs}</b></p>
                </div>
            </div>
        </Link>
        :<>{isProfile
            ?<Link href={`https://chzzk.naver.com/${liveDetail.channel.channelId}`} style={{color: 'var(--foreground'}}>
                <div className="now-streaming" style={{width: '100%', aspectRatio:'16 / 9', background: `url('${liveDetail.channel.channelImageUrl}')`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: 20, marginBottom: '1rem', }}><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', aspectRatio: '16 / 9', background: '#00000055', borderRadius: 20}}>방송이 종료되었습니다.</div></div>
                <div style={{width: '100%', display: 'flex', gap: 10, alignItems: 'center'}}>
                    <img src={channel.avatar} style={{height: 48, aspectRatio: 1, borderRadius: 20, border: 0}} /> 
                    <div>
                        <p>{liveDetail.liveTitle}</p>
                        <p><b>{channel.knownas}</b></p>
                    </div>
                </div>
            </Link>
            :<></>
        }</>
    }
    </>
)
}