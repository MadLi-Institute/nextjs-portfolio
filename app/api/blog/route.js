import connect from "@/libs/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connect();
        const blog_data = await Blog.find();
        return new NextResponse(JSON.stringify(blog_data), {status : 200});
    } catch (error) {
        return new NextResponse(JSON.stringify({message : "Cannot fetch data..."}), {status : 500});
    }
}
