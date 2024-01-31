import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { connectRequest } from "@/utils/CommenSchema";
import { SuccessMessage, statusCode } from "@/app/commen/CommenName";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const Request = await connectRequest();
    const validate = schema.safeParse(body);
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: statusCode.badRequest });
    }
    const masters = await Request.create(body);
    return NextResponse.json({ data: masters, message: `${SuccessMessage.defaultCreate}`, }, { status: statusCode.create });
}
export async function PUT(request: NextRequest) {
    const body = await request.json();
    const Request = await connectRequest();
    const validate = schema.safeParse(body);
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: statusCode.badRequest });
    }
    const masters = await Request.findByIdAndUpdate(body._id, { requestMessage: body.requestMessage, isActive: body.isActive }, { new: true });
    if (!masters) {
        return NextResponse.json({ error: "Master not found" }, { status: statusCode.badRequest });
    }
    return NextResponse.json({ data: masters, message: `${masters.name} ${SuccessMessage.defaultUpdate}`, }, { status: statusCode.create });
}
export async function GET() {
    const Request = await connectRequest();
    const masters = await Request.find();
    return NextResponse.json({ data: masters }, { status: statusCode.ok });
}
