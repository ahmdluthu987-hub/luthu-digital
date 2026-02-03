import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service, source = "chatbot" } = body;

        // Validate inputs
        if (!name || !email || !phone || !service) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, phone, and service are required." },
                { status: 400 }
            );
        }

        // Insert into Supabase using admin client to bypass RLS
        const { data, error } = await supabaseAdmin
            .from("leads")
            .insert([
                {
                    name,
                    email,
                    phone,
                    service,
                    source,
                    status: "new",
                },
            ])
            .select();

        if (error) {
            console.error("Supabase Insert Error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: unknown) {
        const err = error as { message?: string };
        console.error("API Leads Error:", err.message || error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
