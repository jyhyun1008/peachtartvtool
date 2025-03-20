import { signinUser, addUser, getUserByEmail, getUserByHandle } from "@/src/actions/db"
import { verifyJwt } from "@/jwt"
import { redirect } from "next/navigation"
import { ChzzkClient } from "chzzk"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const accessToken = req.headers['authorization']
    
        if (!accessToken || !verifyJwt(accessToken)) {
            res.status(401).json({error: "No Authorization"})
        } else {
            let params = req.body
            let result = await getUserByEmail(params.email)
            
            if (result.length == 1) {
                let knownAs
                let avatar
                if (result[0].group == 'member' || result[0].group == 'pending'){
                    const client = new ChzzkClient()
                    const chzzkCh = await client.channel(result[0].chzzkid)
                    knownAs = chzzkCh.channelName
                    avatar = chzzkCh.channelImageUrl
                } else {
                    knownAs = result[0].knownas
                    avatar = result[0].avatar
                }
                let user = await signinUser({
                    email: params.email,
                    knownAs: knownAs,
                    avatar: avatar,
                })
                res.status(200).json({rows: user})
                redirect('/')
            } else if(result.length == 0) {
                let user = await addUser(params)
                res.status(200).json({rows: ['회원가입을 마저 진행해 주세요!']})
                redirect('/join/form')
            }
        }
    }
}