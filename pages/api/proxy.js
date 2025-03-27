

export default async function handler(req, res) {
    if (req.method === 'GET') {
        let query = req.query
        let url = decodeURIComponent(query.url)
        let result = await fetch(url)
        let text = await result.text()
        res.status(200).json({result: text})
    }
}