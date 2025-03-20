
import Link from "next/link";

export default async function MemberList() {

    const getUsers = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUsers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({})
    })
    const json = await getUsers.json()
    const users = json? json.rows :[]

    return (
        <div style={{display: 'flex', overflowX: 'auto', gap: 10,}}>
        {users.map((user, index)=>(
          <Link key={`member${index}`} href={`/member/${user.handle}`} ><div style={{textAlign: 'center', border: '1px solid #cccccc', padding: 40, borderRadius: 20}}>
            <img src={user.avatar} style={{width: 128, aspectRatio: 1, borderRadius: 75, border: '3px solid var(--accent)'}} />
            <p><b>{user.knownas}</b></p>
          </div></Link>
        ))}
        </div>
    )
}