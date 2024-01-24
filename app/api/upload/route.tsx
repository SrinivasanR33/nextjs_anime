import { SuccessMessage } from "@/app/commen/CommenName";
import { connectUpload } from "@/utils/CommenSchema";
import { connect } from "@/utils/connection";
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
    const body = await request.json()
    const Upload = await connectUpload();
    const res = await Upload.create(body)
    return NextResponse.json({ data: res }, { status: 201 })
}
export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const Upload = await connectUpload();
    const res = await Upload.findByIdAndDelete({ _id: body._id })
    return NextResponse.json({ data: res, message: SuccessMessage.defaultDelete }, { status: 200 })
}