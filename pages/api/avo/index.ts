import { ServerResponse } from "http";
import DB from '@database'
import { NextApiRequest } from "next";

const getAllAvos = async (req: NextApiRequest, res:ServerResponse) => {
    const db = new DB();
    const allAvos = await db.getAll();
    const length = allAvos.length;


    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.end(JSON.stringify({ data: allAvos, length }));
}

export default getAllAvos;

