import { verifyJwt } from "@/jwt"
import { addUserByForm } from "@/src/actions/db"
import { ChzzkClient } from "chzzk"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const accessToken = req.headers['authorization']
    
        if (!accessToken || !verifyJwt(accessToken)) {
            res.status(401).json({error: "No Authorization"})
        } else {
            let params = req.body

            const client = new ChzzkClient()
            const chzzkCh = await client.channel(params.chzzkId)
            const knownAs = chzzkCh.channelName
            const chzzkId = chzzkCh.channelId
            const avatar = chzzkCh.channelImageUrl
            let result = await addUserByForm({
                knownAs: knownAs,
                bskyHandle: params.bskyHandle,
                handle: params.bskyHandle,
                chzzkId: chzzkId,
                avatar: avatar,
                bioLong: params.bioLong,
                uid: params.uid
            })
    
            res.status(200).json({rows: result})
        }
    }
}