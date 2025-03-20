import { getUsers } from "@/src/actions/db"

export default async function handler(req, res) {
    if (req.method === 'POST') {

        let result = await getUsers()

        // function shuffle(array) {
        //     if (array.length > 1) {

        //         for (let i = array.length - 1; i > 0; i--) {
        //             // 무작위로 index 값 생성 (0 이상 i 미만)
        //         let j = Math.floor(Math.random() * (i + 1));
        //         [array[i], array[j]] = [array[j], array[i]];
        //       }
        //     }
        //     return array
        // }

        // let result2 = shuffle(result)
        res.setHeader('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.status(200).json({rows: result})
    }
}