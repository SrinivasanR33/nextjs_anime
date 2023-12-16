
import { NextRequest, NextResponse } from 'next/server';
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import * as React from "react";
import WelcomeTemplate from '@/emails/WelcomeTemplate';

export async function POST(req: NextRequest) {

    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
            user: "vasan4649@gmai.com",
            pass: "rs2ssvvmm",
        },
    });

    const emailHtml = render(<WelcomeTemplate name="https://example.com" />);

    const options = {
        from: "rssoftware@gmail.com",
        to: `adhanamcom1@gmail.com`,
        subject: "hello world",
        html: emailHtml,
    };

    const res = await transporter.sendMail(options);
    return NextResponse.json({ data: res })
}