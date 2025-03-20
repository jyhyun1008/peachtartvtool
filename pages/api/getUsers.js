import { getUsers } from "@/src/actions/db"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let result = await getUsers()
        res.status(200).json({rows: result})
    }
}