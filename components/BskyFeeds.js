import SNSWrapper from "./SNSWrapper"

export default async function BskyFeeds() {

    const login = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
            identifier: process.env.BSKY_HANDLE,
            password: process.env.BSKY_PASS,
        })
    })
    const result = await login.json()

    const data = await fetch(`https://bsky.social/xrpc/app.bsky.feed.getListFeed?list=at://did:plc:y6rdmkdbzzy3nh3xrfcucjlm/app.bsky.graph.list/3lkp3t2zila25&limit=20`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${result.accessJwt}`
        },
    })
    const result2 = await data.json()

    const feeds = result2.feed.map(eachfeed => ({
        user: {
            handle: eachfeed.post.author.handle,
            knownAs: eachfeed.post.author.displayName? eachfeed.post.author.displayName: eachfeed.post.author.handle,
            avatar: eachfeed.post.author.avatar
        },
        text: eachfeed.post.record.text,
        date: eachfeed.post.record.createdAt.split('.')[0],
        url: `https://bsky.app/profile/${eachfeed.post.author.handle}/post/${eachfeed.post.uri.split('feed.post/')[1]}`
    }))

    //   console.log(data)
  //const letsgo = fetch(`/api/proxy?url=${encodeURIComponent('https://x.com/However_Ina/status/1899406975055933862')}`)
  //const letsgo = fetch(`/api/proxy?url=${encodeURIComponent('https://api.fxtwitter.com/however_ina')}`)

  return (
    <SNSWrapper feeds={feeds} />
  );
}