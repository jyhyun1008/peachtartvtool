import { getUserByHandle } from "@/src/actions/db"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let params = req.body
        let result = await getUserByHandle(params.handle)
        res.status(200).json({rows: result})
    }
}