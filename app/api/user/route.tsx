import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { createUser, getAllUsers } from "@/prisma/user";
import prisma from "@/prisma/prisma";
import * as bcrypt from 'bcryptjs';
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
    const encrptPassword = await bcrypt.hash(body.password, 10)
    body.password = encrptPassword
    const user = await createUser(body)
    return NextResponse.json(user)
}
export async function PUT(request: NextRequest) {
    const body = await request.json()
    const validate = schema.safeParse(body)
    const findUser = await prisma.user.findUnique({ where: { id: body.id } })
    console.log(findUser, "findUser")
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: 400 })
    }
    if (!findUser) {
        return NextResponse.json({ error: "User Not found" }, { status: 400 })
    }
    const users = await prisma.user.update({ where: { id: body.id }, data: { name: body.name, number: body.number, email: body.email } })
    return NextResponse.json(users)
}
