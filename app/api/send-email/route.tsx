import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_6gpZVMTD_Kbududhw6foEq9PC2fRxuL6f');
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: body.email,
            subject: 'Welcome Email From RS Enterprice',
            react: <WelcomeTemplate name={body.name} />
        });
        console.log(body, "body")
        return NextResponse.json({ emailsent: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ emailsent: error }, { status: 400 })

    }
}