import Chzzk from "@/components/Chzzk";
import CountLives from "@/components/CountLives";

export const dynamic = 'force-dynamic';

export default async function Home() {

  const getUsers = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUsers`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    mode: 'no-cors',
    body: JSON.stringify({})
  })
  const json = await getUsers.json()
  const members = json.rows

  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
        <CountLives />
      </div>
      </div>
      <div className='main section' id="livelist">
        {members.map((mem, ind)=>(
          <Chzzk key={`chzzk${ind}`} channel={mem}  />
        ))}
      </div>
    </div>
  );
}
