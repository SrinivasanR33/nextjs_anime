import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { connectUploadMaster } from "@/utils/CommenSchema";
import { SuccessMessage, statusCode } from "@/app/commen/CommenName";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const UploadMasters = await connectUploadMaster()
    const validate = schema.safeParse(body)
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: statusCode.badRequest })
    }
    const masters = await UploadMasters.create(body)
    return NextResponse.json({ data: masters, message: `${masters.name} ${SuccessMessage.defaultCreate}` }, { status: statusCode.create })
}
export async function PUT(request: NextRequest) {
    const body = await request.json()
    const UploadMasters = await connectUploadMaster()
    const validate = schema.safeParse(body)
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: statusCode.badRequest })
    }
    const masters = await UploadMasters.findByIdAndUpdate(body._id, { name: body.name, codeName: body.codeName, uploadId: body.uploadId }, { new: true })
    if (!masters) {
        return NextResponse.json({ error: "Master not found" }, { status: statusCode.badRequest });
    }
    return NextResponse.json({ data: masters, message: `${masters.name} ${SuccessMessage.defaultUpdate}` }, { status: statusCode.create })
}
export async function GET() {
    const UploadMasters = await connectUploadMaster()
    const masters = await UploadMasters.find()
    return NextResponse.json({ data: masters }, { status: statusCode.ok })
}
