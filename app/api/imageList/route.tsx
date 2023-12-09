import { connect } from "@/utils/connection";
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { Upload } = await connect();
        const targetType = body.type;
        const documents = await Upload.find({ type: targetType }).exec();
        return NextResponse.json({ data: documents }, { status: 200 })
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: error }, { status: 400 })
    }
}