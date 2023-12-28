import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import * as bcrypt from 'bcryptjs';
import { connect } from "@/utils/connection";
import { connectAdminUser } from "@/utils/CommenSchema";
interface Props {
    params: {
        id: number
    }
}

export async function GET() {
    const Adminuser = await connectAdminUser();
    const user = await Adminuser.find()
    return NextResponse.json(user)
}
export async function POST(request: NextRequest) {
    const Adminuser = await connectAdminUser();
    const body = await request.json()
    const validate = schema.safeParse(body)
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: 400 })
    }
    const encrptPassword = await bcrypt.hash(body.password, 10)
    body.password = encrptPassword
    const user = await Adminuser.create(body)
    return NextResponse.json(user)
}
export async function PUT(request: NextRequest) {
    const Adminuser = await connectAdminUser();
    const body = await request.json()
    const validate = schema.safeParse(body)
    const findUser = await Adminuser.findById({ id: body.id })
    console.log(findUser, "findUser")
    if (!validate.success) {
        return NextResponse.json({ error: validate.error.errors }, { status: 400 })
    }
    if (!findUser) {
        return NextResponse.json({ error: "User Not found" }, { status: 400 })
    }
    const users = await Adminuser.findOneAndUpdate({ id: body.id, data: { name: body.name, number: body.number, email: body.email } })
    return NextResponse.json(users)
}
