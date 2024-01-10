
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend"
import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { statusCode } from '@/app/commen/CommenName';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    const body = await request.json()
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: `${body.email}`,
        subject: "hello world",
        react: <WelcomeTemplate name={body.name} />
    })
    return NextResponse.json({ data: body }, { status: statusCode.accepted })
}