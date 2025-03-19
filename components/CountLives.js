'use client'
import { useEffect } from "react"

function CountLives() {

    useEffect(() => {
        const lives = document.querySelector('#livelist').innerText
        if (!lives) {
            document.querySelector('#counts').innerText = '진행 중인 라이브가 없어요.'
        } else {
            document.querySelector('#counts').innerText = `현재 진행 중인 라이브는 ${document.querySelectorAll('.now-streaming').length} 개예요!`
        }
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h1 id="counts"></h1>
        </div>
    )
}
  
export default CountLives