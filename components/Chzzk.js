import { ChzzkClient } from "chzzk"

export default async function Chzzk({channel}) {

const client = new ChzzkClient()

// 채널 검색
const result = await client.search.channels(channel.knownAs)
const channelRes = result.channels[0]
const liveDetail = await client.live.detail(channelRes.channelId)

return (
    <>
    {liveDetail.status!='CLOSE'
        ?<>
            <div className="now-streaming" style={{width: '100%', aspectRatio:'16 / 9', background: `url('${liveDetail.liveImageUrl}')`}}></div>
            <div style={{width: '100%', display: 'flex', gap: 10, alignItems: 'center'}}>
                <img src={channel.avatar} style={{height: 48, aspectRatio: 1, borderRadius: '50%', border: '3px solid var(--accent)'}} /> 
                <div>
                    <p>{liveDetail.liveTitle}</p>
                    <p><b>{channel.knownAs}</b></p>
                </div>
            </div>
        </>
        :<></>
    }
    </>
)
}