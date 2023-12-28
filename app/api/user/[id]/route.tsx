import { connectAdminUser } from "@/utils/CommenSchema";
import { connect } from "@/utils/connection";
import { NextRequest, NextResponse } from "next/server";
interface Props {
    params: {
        id: number
    }
}
export function GET(request: NextRequest, { params }: Props) {
    if (params.id > 10) {
        return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    return NextResponse.json([{ id: 1, name: "mosh" }])
}
export async function PUT(request: NextRequest, { params }: {
    params: {
        id: number
    }
}) {
    const body = await request.json()
    if (!body.name) {
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (params.id > 10) {
        return NextResponse.json({ error: 'not found' }, { status: 404 })
    }
    return NextResponse.json({ id: 1, name: body.name })
}
export async function DELETE(request: NextRequest, { params }: {
    params: {
        id: string
    }
}) {
    const Adminuser = await connectAdminUser();
    const findUser = await Adminuser.findById(params.id)
    if (!findUser) {
        return NextResponse.json({ error: 'User Not found' }, { status: 400 })
    }
    const user = await Adminuser.findByIdAndDelete(params.id)
    return NextResponse.json(user)
}
