import { connect } from "@/utils/connection"
import { NextResponse } from "next/server"

export async function GET() {
    const { users } = await connect()
    const res = await users.find({})
    return NextResponse.json({ data: res }, { status: 200 })
}