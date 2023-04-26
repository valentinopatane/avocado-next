import DB from '@database'
import { NextApiRequest, NextApiResponse } from "next";

const getAllAvos = async (req: NextApiRequest, res:NextApiResponse) => {
    const db = new DB();

    const id = req.query.id;

    const avo = await db.getById(id as string);

    // res.statusCode = 200;
    // res.setHeader('Content-type','application/json');
    // res.end(JSON.stringify({ data: avo }));

    res.status(200)
        .setHeader('Content-type','application/json')
        .json({ data: avo })
}

export default getAllAvos;

