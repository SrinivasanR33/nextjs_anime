import { ErrorMessage, SuccessMessage, statusCode } from "@/app/commen/CommenName"
import { connectUploadMaster } from "@/utils/CommenSchema"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest, { params }: {
    params: {
        id: string
    }
}) {
    const id = params?.id
    const UploadMasters = await connectUploadMaster()
    if (!id) {
        return NextResponse.json({ error: ErrorMessage.defaultDelete }, { status: statusCode.badRequest })
    }
    const masters = await UploadMasters.findById(id)
    const masterData = await UploadMasters.findByIdAndDelete(id)
    if (!masterData) {
        return NextResponse.json({ error: "Master not found" }, { status: statusCode.notFound });
    }
    return NextResponse.json({ data: masters, message: `${masters.name} ${SuccessMessage.defaultDelete}` }, { status: statusCode.ok })
}
export async function GET(req: NextRequest, { params }: {
    params: {
        id: string
    }
}) {
    const id = params.id
    const UploadMasters = await connectUploadMaster()
    if (!id) {
        return NextResponse.json({ error: ErrorMessage.defaultDelete }, { status: statusCode.badRequest })
    }
    const masterData = await UploadMasters.findById(id)
    // const master = await UploadMasters.findByIdAndDelete({ id: id })
    return NextResponse.json({ data: masterData, message: `${SuccessMessage.defaultget}` }, { status: statusCode.ok })
}