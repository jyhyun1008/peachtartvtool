import { addVideo } from "@/src/actions/db"
import { verifyJwt } from "@/jwt"

export default async function handler(req, res) {
    if (req.method === 'POST') {
            const accessToken = req.headers['authorization']
        
            if (!accessToken || !verifyJwt(accessToken)) {
                res.status(401).json({error: "No Authorization"})
            } else {
                let params = req.body
                let result = await addVideo(params)
                res.status(200).json({rows: result})
            }
    }
}