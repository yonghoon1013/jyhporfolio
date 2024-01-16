import { MongoClient } from "mongodb";

export default async (str) => {
    const client = new MongoClient(process.env.YHHOST);
    await client.connect();
    const db = client.db("portfolio");
    const collection = db.collection(str);
    console.log("MongoDB 접속성공");

    return {client, collection};
};
