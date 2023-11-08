import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
interface Props {
    params: {
        id: number
    }
}
export function GET(request: NextRequest) {
    return NextResponse.json([{ id: 1, name: "mosh" }, { id: 2, name: "hi" }])
}
export async function POST(request: NextRequest) {
    const body = await request.json()
    const validate = schema.safeParse(body)
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: 400 })
    }
    return NextResponse.json({ id: 1, name: body.name })
}
