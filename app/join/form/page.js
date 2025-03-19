'use client'
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()
  const { data: session } = useSession()
  if (!session || session.user.group != 'guest') {
    router.push('/')
  }

  const [chzzkId, setChzzkId] = useState('')
  const [bskyHandle, setBskyHandle] = useState('')

  function updateChzzkId(e) {
    if (e.target.value.split('chzzk.naver.com/').length == 2) {
      setChzzkId(e.target.value.split('chzzk.naver.com/')[1])
    } else {
      setChzzkId('')
    }
  }

  function updateHandle(e) {
    if (e.target.value.split('@').length == 2) {
      setBskyHandle(e.target.value.split('@')[1])
    } else {
      setBskyHandle(e.target.value)
    }
  }

  const submit = async () => {

    if (chzzkId != '' && bskyHandle != '') {
      //chzzk
      const result = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/addUserByForm', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': session?.user.accessToken,
        },
        body: JSON.stringify({
          chzzkId: chzzkId,
          bskyHandle: bskyHandle,
          email: session.user.email,
        })
      })
      router.push('/')
    }
  }

  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section-feed' style={{maxWidth: 450}}>
          <h1>가입 신청 완료하기</h1>
          <div>계속하기 위해서 다음 정보를 작성해주세요.</div>
          <div>
            <p>치지직 닉네임</p>
            <input id="chzzkId" onInput={updateChzzkId} />
          </div>
          <div>
            <p>블루스카이 핸들</p>
            <input id="bskyHandle" onInput={updateHandle} />
          </div>
          <div className="button" style={{color: 'var(--accent)'}} onClick={()=>submit()}>제출하기</div>
        </div>
      </div>
    </div>
  );
}
