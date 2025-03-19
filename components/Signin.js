"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

function Signin(props) {

    const { data: session } = useSession()
    
    const span = {
        cursor: 'pointer',
        color: 'var(--foreground)'
    }

    if(session && session.user.group == 'guest') {
        return (
            <>
            <div style={span} onClick={() => signOut()}>로그아웃</div>
            <div><Link href="/join/form">가입신청 완료하기</Link></div>
            </>
        )
    } else if (session) {
        return (
            <>
              <div><b>{session.user.knownAs}</b> 님</div>
              <div style={span} onClick={() => signOut()}>로그아웃</div>
              <div><Link href="/my" style={{color: 'var(--foreground)'}} >마이페이지</Link></div>
              <div><Link href="/" style={{color: 'var(--foreground)'}} >디스코드</Link></div>
            </>
        )
    }
    return (
        <div style={span} onClick={() => signIn("naver", { redirect: false, callbackUrl: "/" })}>
            네이버 로그인
        </div>
  )
}
  
export default Signin
  