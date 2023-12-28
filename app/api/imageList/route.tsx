import { connectUpload } from "@/utils/CommenSchema";
import { connect } from "@/utils/connection";
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const Upload = await connectUpload();
        const targetType = body.type;
        const page = body?.page || 1;
        const pageSize = body?.pageSize || 10; // You can adjust the default pageSize

        // Calculate skip based on pagination parameters
        const skip = (page - 1) * pageSize;

        // Query documents with pagination
        const documents = await Upload.find({ type: targetType })
            .skip(skip)
            .limit(pageSize)
            .exec();
        const totalCount = await Upload.countDocuments({ type: targetType });
        return NextResponse.json({ data: documents, page, pageSize, totalCount }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: error }, { status: 400 })
    }
}