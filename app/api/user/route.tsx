import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { createUser, getAllUsers } from "@/prisma/user";
interface Props {
    params: {
        id: number
    }
}
export async function GET() {
    const user = await getAllUsers()
    return NextResponse.json(user)
}
export async function POST(request: NextRequest) {
    const body = await request.json()
    const validate = schema.safeParse(body)
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: 400 })
    }
    const user = await createUser(body)
    return NextResponse.json(user)
}
