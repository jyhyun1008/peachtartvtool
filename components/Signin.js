"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

function Signin(props) {

    const { data: session } = useSession()
    
    const span = {
        cursor: 'pointer',
        color: 'var(--foreground)'
    }

    if(session && session.user.group != 'member') {
        return (
            <>
            <div className="desktop-menu" style={span} onClick={() => signOut()}>로그아웃</div>
            <div className="desktop-menu"><Link href="/join/form">가입신청 완료하기</Link></div>
            </>
        )
    } else if (session) {
        return (
            <>
              <div><b>{session.user.knownAs}</b> 님</div>
              <div className="desktop-menu"><Link href="/my" style={{color: 'var(--foreground)'}} >설정</Link></div>
              <div className="desktop-menu"><Link href="https://discord.gg/dY9RcyJztN" style={{color: 'var(--foreground)'}} >디스코드</Link></div>
              <div className="desktop-menu" style={span} onClick={() => signOut()}>로그아웃</div>
            </>
        )
    }
    return (
        <div style={span} onClick={() => signIn("naver", { redirect: false, callbackUrl: "/" })} className="desktop-menu">
            네이버 로그인
        </div>
  )
}
  
export default Signin
  