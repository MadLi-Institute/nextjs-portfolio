import connect from "@/libs/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    try {
        const {id} = await params;
        await connect();
        const blog_data = await Blog.findById(id);
        return new NextResponse(JSON.stringify(blog_data), {status : 200});
    } catch (error) {
        return new NextResponse(JSON.stringify({message : "Cannot fetch data..."}), {status : 500});
    }
}