import { connectUpload } from "@/utils/CommenSchema";
import { connect } from "@/utils/connection";
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
    const body = await request.json()
    const Upload = await connectUpload();
    const res = await Upload.create(body)
    return NextResponse.json({ data: res }, { status: 201 })
}