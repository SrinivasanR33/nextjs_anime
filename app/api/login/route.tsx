import { NextRequest, NextResponse } from "next/server"
import * as bcrypt from 'bcryptjs';
import { connect } from "@/utils/connection";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { Adminuser } = await connect()
    const user = await Adminuser.findOne({ email: body.email });
    const encrptPassword = await bcrypt.compare(body.password, user.password)
    console.log(user, "user12344")
    if (encrptPassword) {
        console.log(user)
    }

    return NextResponse.json(user)
}