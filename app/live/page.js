import Chzzk from "@/components/Chzzk";
import CountLives from "@/components/CountLives";
import Link from "next/link";

export default async function Home() {

  const getUsers = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUsers`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({})
  })
  const json = await getUsers.json()
  const members = json.rows

//   const members = [{
//     pid: 1,
//     handle: 'however_ina',
//     bskyhandle: 'howeverina.bsky.social',
//     knownas: '연이나',
//     accentcolor: '#593bc4',
//     bio: `천문대에서 노래하면서 베이스 치는 치즈냥이.\n\n과거와 현재의 하늘을 잇는\n\n싱어송라이터를 목표하고 있습니다.\n\n오래 전, 관상감의 천문학 생도였어요.`,
//     avatar: '/ina.png',
//     avatarlong: '/ina_long.png',
//     chzzkid: '1bba9a34d4d2b8b998c36c5cdbc9f4fe',
//     biolong: `옛 사람들은 별을 보고 이야기를 만들고, 악기를 연주하며 호기심을 노래하고\n\n그러면서 자신들이 어디로 나아가야 할지, 그 길을 찾았다.\n\n그렇지 않고서는, 우리 모두가 여기까지 도달할 수 없었을 것이다.\n\n시간이 흘러, 영원히 반짝일 것만 같던 검푸른 비단이 빛을 잃고,\n\n대신 인류 자신이 쏘아올린 빛이 하늘 끝까지 닿았을 때,\n\n결국 길을 잃는 자들이 하나둘 생겨났다.\n\n시대의 틈에서 길을 잃었으나 포기하지 않고, 노래라는 낯선 일에 도전하지만\n\n'그러나' 이를 통해 과거의 빛깔을 다시금 불러올 사명을 지닌 삶.\n\n## 기본정보\n\n연이나 (However_Ina)\n\n153cm`,
// }]

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
