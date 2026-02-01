import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Contact form submission:", body);

        // Here you would typically send an email or save to a database
        // For now, we'll just simulate a successful response

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
