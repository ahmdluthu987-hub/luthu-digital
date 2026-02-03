import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;


        // Server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, or message' },
                { status: 400 }
            );
        }

        // Email format validation (basic)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Insert into Supabase 'contacts' table
        // Fields: name, email, message, status, source, created_at (auto)
        const { data, error } = await supabaseAdmin
            .from('contacts')
            .insert([
                {
                    name,
                    email,
                    message,
                    status: 'new',
                    source: 'contact_form',
                    // created_at is handled by default CURRENT_TIMESTAMP in SQL usually, 
                    // or we can pass it if the column expects it. 
                    // Best practice is to let DB handle it, but we can send it just in case 
                    // if we are unsure of the default value setting.
                    // However, user said "created_at (auto)", so I will omit it.
                },
            ])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            return NextResponse.json(
                { error: 'Failed to save contact message' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Message sent successfully', data },
            { status: 200 }
        );

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
