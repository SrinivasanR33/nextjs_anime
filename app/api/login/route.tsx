import { NextRequest, NextResponse } from "next/server"
import * as bcrypt from 'bcryptjs';
import { connect } from "@/utils/connection";
import { store } from "@/redux/store/store";
import { AdminState } from "@/redux/actions/userSlice";
import { redirect } from "next/dist/server/api-utils";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { Adminuser } = await connect();

        // Find user by email
        const user = await Adminuser.findOne({ email: body.email });

        if (user) {
            // Compare hashed password
            const isPasswordMatch = await bcrypt.compare(body.password, user.password);

            if (isPasswordMatch) {
                // Passwords match, you can proceed with authentication
                console.log("Authentication successful!");
                store.dispatch(AdminState(true))

                return NextResponse.json({ success: true, user });
            } else {
                // Passwords do not match
                console.log("Incorrect password");
                return NextResponse.json({ success: false, error: "Incorrect password" });
            }
        } else {
            // User not found
            console.log("User not found");
            return NextResponse.json({ success: false, error: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" });
    }
}