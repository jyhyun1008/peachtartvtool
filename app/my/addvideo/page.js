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
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    async function fetchData(){
      session.current = await getSession()

      if (!session.current) {
        router.push('/')
      }

      const myData = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/getUserByEmail', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: session.current.user.email
        })
      })
      
      const rows = await myData.json()
      me.current = rows.rows[0]
      setUser(me.current)

    }

    fetchData()
  }, [])

  function changeTitle(e){
    setTitle(e.target.value)
  }

  function changeUrl(e){
    setUrl(e.target.value)
  }

  function changeCategory(e){
    setCategory(e.target.value)
  }

  function submit() {

    if (title && url && category) {
      fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/addVideo', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': session.current?.user.accessToken,
        },
        body: JSON.stringify({
          title: title,
          url: `https://www.youtube.com/embed/${url}`,
          category: category,
          email: session.current?.user.email,
        })
      })
      .then((result)=> {router.push(`/member/${me.current.pid}/video`)})
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
            <h1>새 영상 추가</h1>
            <p>영상 제목</p>
            <input id="title" onChange={changeTitle} value={title}/>
            <p>주소 (/v/ 뒷부분)</p>
            <input id="url" onChange={changeUrl} value={url}/>
            <p>영상 카테고리 (정확히 지정)</p>
            <input id="category" onChange={changeCategory} value={category}/>
            <hr />
            <div className="button" onClick={()=>submit()}>저장</div>
          </div>
        </div>
      </div>
    </div>
  )

}
