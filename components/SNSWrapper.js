
import Feed from "./Feed";

export default function SNSWrapper({feeds}) {

    const snsWrapper = {
        width: '100%',
        borderRadius: 20,
        border: '1px solid #cccccc',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    }

    return (
        <div style={snsWrapper}>
            {feeds.map((feed, index)=>(
                <div key={`feed${index}`}>
                {index == 0
                    ?<></>
                    :<hr style={{background:'#cccccc', height:1, border:0, width: '100%'}}/>
                }
                <Feed raw={feed.text} handle={feed.user.handle} knownAs={feed.user.knownAs} avatar={feed.user.avatar} date={feed.date} url={feed.url} images={feed.images} />
                </div>
            ))}
        </div>
    )
}