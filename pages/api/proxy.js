export default async function handler(req, res) {
    try {
        console.log(decodeURIComponent(req.query.url))
        console.log(req.body)
      const response = await fetch(decodeURIComponent(req.query.url));

        if (!response.ok) {
            throw new Error(`Twitter API error: ${response.status}`);
      }
      const json = await response.json()
        console.log(json)
        
      res.status(response.status).json(json);
    } catch (error) {
        console.log(error.message)
      res.status(error.response ? error.response.status : 500).json({
        message: error.message,
      });
    }
  }