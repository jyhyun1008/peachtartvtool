'use client'
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { getSession } from "next-auth/react";
import MarkedParser from "@/components/MarkedParser";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  let session = useRef({})
  let me = useRef({})
  const [user, setUser] = useState({})
  const [bskyHandle, setBskyHandle] = useState('')
  const [bio, setBio] = useState('')
  const [bioLong, setBioLong] = useState('')
  const [avatarLong, setAvatarLong] = useState('')
  const [accentColor, setAccentColor] = useState('')
  const [links, setLinks] = useState([])
  const [linkTitle, setLinkTitle] = useState('')
  const [linkThumb, setLinkThumb] = useState('')
  const [linkUrl, setLinkUrl] = useState('')

  useEffect(() => {
    async function fetchData(){
      session.current = await getSession()

      if (!session.current) {
        router.push('/')
      }

      const myData = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUserByEmail`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
            email: session.current.user.email
        })
      })
      
      const rows = await myData.json()
      me.current = rows.rows[0]
      setUser(me.current)
      setBskyHandle(me.current.bskyhandle)
      setBio(me.current.bio)
      setBioLong(me.current.biolong)
      setAccentColor(me.current.accentcolor)
      setAvatarLong(me.current.avatarlong)
      setLinks(JSON.parse(me.current.links))

    }

    fetchData()
  }, [])

  function changeBskyHandle(e){
    if (e.target.value.split('@').length == 2) {
      setBskyHandle(e.target.value.split('@')[1])
    } else if (e.target.value.split('@').length == 1) {
      setBskyHandle(e.target.value)
    }
  }

  function changeBio(e){
    setBio(e.target.value)
  }

  function changeBioLong(e){
    setBioLong(e.target.value)
  }
  
  function changeAvatarLong(e){
    setAvatarLong(e.target.value)
  }

  function changeAccentColor(e){
    setAccentColor(e.target.value)
  }

  function changeLinkTitle(e) {
    setLinkTitle(e.target.value)
  }

  function changeLinkThumb(e) {
    setLinkThumb(e.target.value)
  }

  function changeLinkUrl(e) {
    setLinkUrl(e.target.value)
  }

  function addLink() {
    if (linkUrl && linkTitle && linkThumb) {
      setLinks([...links, {title: linkTitle, thumb: linkThumb, url: linkUrl}])
      setLinkTitle('')
      setLinkThumb('')
      setLinkUrl('')
    }
  }

  function deleteLink(i) {
    links.splice(i, 1)
    setLinks([...links])
  }

  function upLink(i) {
    var linksSelf = links.splice(i, 1)
    var linksFront = links.splice(0, i-1)
    setLinks([...linksFront, ...linksSelf, ...links])
  }

  function downLink(i) {
    var linksSelf = links.splice(i, 1)
    var linksFront = links.splice(0, i+1)
    setLinks([...linksFront, ...linksSelf, ...links])
  }

  function submit() {

    if (bskyHandle) {
      fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/updateUser`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': session.current?.user.accessToken,
        },
        mode: 'no-cors',
        body: JSON.stringify({
          handle: bskyHandle.split('.')[0],
          bskyHandle: bskyHandle,
          accentColor: accentColor?accentColor:'#FF4971',
          avatarLong: avatarLong,
          bio: bio,
          bioLong: bioLong,
          links: JSON.stringify(links),
          email: session.current?.user.email,
        })
      })
      .then((result)=> {router.push(`/member/${me.current.pid}`)})
    }
  }

  return (
    <div>
      <div className="slidebar">
        <img src="/check.png" style={{width: '100%', height: '300px', objectFit:'cover', objectPosition: 'center'}} />
      </div>
      <div className='main section'>
        <div className='inner-section-feed'>
          <div>
            <h1><span style={{color: 'var(--accent)'}}>{user?.knownas}</span> 님의 설정페이지</h1>
            <p><Link href={`/member/${user?.pid}`}>내 페이지 보러 가기</Link></p>
            <p><Link href={`/my/addvideo`}>새 영상 추가하러 가기</Link></p>
            <h2>프로필 사진</h2>
            <div style={{width: '100%', maxWidth: '300px', overflow: 'hidden', borderRadius: 20}}>
              <img src={user?.avatar} />
            </div>
            <div>프로필 사진은 재 로그인 시 치지직 기준으로 변경됩니다.</div>
            <hr />
            <h2>블루스카이 핸들 변경</h2>
            <input id="bskyHandle" onChange={changeBskyHandle} value={bskyHandle} placeholder="@example.bsky.social"/>
            <hr />
            <h2>이미지 컬러(Hex값)</h2>
            <input id="accentColor" onChange={changeAccentColor} value={accentColor} placeholder="#000000" />
            <h2>짧은 소개 (개행 지원)</h2>
            <textarea id="bio" onChange={changeBio} value={bio}></textarea>
            <h2>긴 소개글 (마크다운 지원)</h2>
            <textarea id="bioLong" onChange={changeBioLong} value={bioLong}></textarea>
            <MarkedParser raw={bioLong} align="center" />
            <hr />
            <h2>전신 프로필 주소</h2>
            <p>imgur 등의 이미지 주소를 권장합니다.</p>
            <input id="avatarLong" onChange={changeAvatarLong} value={avatarLong} />
            <hr />
            <h2>링크</h2>
            <h3>링크 추가하기</h3>
            <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
              <div style={{flexGrow: 1}}>
                <p>제목:</p>
                <input id="linkTitle" onChange={changeLinkTitle} value={linkTitle} />
                <p>이미지 주소(imgur 등):</p>
                <input id="linkThumb" onChange={changeLinkThumb} value={linkThumb} />
                <p>타겟 URL:</p>
                <input id="linkUrl" onChange={changeLinkUrl} value={linkUrl} />
              </div>
              <div>
                <div className="button" onClick={()=>addLink()}>추가</div>
              </div>
            </div>
            <h3>링크 미리보기</h3>
            <p>최종 저장하지 않으면 반영되지 않습니다.</p>
            <>
            {links.map((lnk, ind)=> (
              <div key={`link${ind}`} style={{display: "flex", alignItems: 'center', gap: 10, margin: '10px 0'}}>
                <div style={{ borderRadius: 20, width: '100%', maxWidth: 250, aspectRatio: 2, backgroundImage: `url(${lnk.thumb})`, backgroundPosition: 'center', backgroundSize: 'cover', }} className="channel-link" ></div>
                <div style={{flexGrow: 1}}>
                  <p><b>링크 제목</b>: {lnk.title}</p>
                  <p><b>링크 주소</b>: {lnk.url}</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                  <div className="button" style={{marginTop: 0, padding: '5px 20px'}} onClick={()=>upLink(ind)}>위로</div>
                  <div className="button" style={{marginTop: 0, padding: '5px 20px'}} onClick={()=>deleteLink(ind)}>삭제</div>
                  <div className="button" style={{marginTop: 0, padding: '5px 20px'}} onClick={()=>downLink(ind)}>아래로</div>
                </div>
              </div>
            ))}
            </>
            <h1>최종 저장</h1>
            <div className="button" onClick={()=>submit()}>저장</div>
          </div>
        </div>
      </div>
    </div>
  )

}
