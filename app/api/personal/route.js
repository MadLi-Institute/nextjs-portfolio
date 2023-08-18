import connect from "@/libs/mongodb";
import Personal from "@/models/Personal";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connect();
        const personal_data = await Personal.find();
        return new NextResponse(JSON.stringify(personal_data), { status: 200 });
    } catch (error) {
      return new NextResponse(JSON.stringify({message : "Cannot fetch data..."}), {status : 500});
    }
}
