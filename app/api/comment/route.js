import dbConnect from "../db";

export async function GET(req) {
    const {client, collection} = await dbConnect("comment");
    let data = await collection.find().toArray();

    await client.close();
    return Response.json(data);
}

export async function POST(req) {
    const qData = await req.json();
    const {client, collection} = await dbConnect("comment");
    await collection.insertOne({key : qData.key, text : qData.text, id : qData.id, password : qData.password});
    const data = await collection.find().toArray();

    await client.close();
    return Response.json(data);
}

export async function PUT(req) {
    const key = await Object.fromEntries(req.nextUrl.searchParams);
    const qData = await req.json();
    const {client, collection} = await dbConnect("comment");
    let comment = await collection.find({key : key.editNum}).toArray();

    if(comment[0].password === qData.password){
        let data = await collection.updateOne({key : key.editNum}, {$set: {text: qData.text}});
        await client.close();
        return Response.json({ success: true, data });
    }else {
        await client.close();
        return Response.json({ success: false, message: '비밀번호가 일치하지 않습니다.' });
    }

}

export async function DELETE(req) {
    const qData = await Object.fromEntries(req.nextUrl.searchParams);
    const {client, collection} = await dbConnect("comment");
    let comment = await collection.find({key : qData.editNum}).toArray();

    if(comment[0].password === qData.password){
        let data = await collection.deleteOne({key:qData.editNum});
        await client.close();
        return Response.json({ success: true, data });
    }else {
        await client.close();
        return Response.json({ success: false, message: '비밀번호가 일치하지 않습니다.' });
    }

}