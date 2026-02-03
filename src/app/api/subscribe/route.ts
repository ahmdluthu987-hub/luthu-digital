import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check for duplicate
        const { data: existingData, error: fetchError } = await supabaseAdmin
            .from('subscriptions')
            .select('id')
            .eq('email', email)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is 'not found' which is what we want
            console.error('Supabase Check Error:', fetchError);
            return NextResponse.json(
                { error: 'Database error checking subscription' },
                { status: 500 }
            );
        }

        if (existingData) {
            return NextResponse.json(
                { message: 'This email is already subscribed.' },
                { status: 409 } // Conflict
            );
        }

        // Insert new subscription
        const { error: insertError } = await supabaseAdmin
            .from('subscriptions')
            .insert([
                {
                    email,
                    status: 'active',
                    source: 'footer',
                },
            ]);

        if (insertError) {
            console.error('Supabase Insert Error:', insertError);
            return NextResponse.json(
                { error: 'Failed to save subscription' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "You're subscribed! 🎉 Thanks for joining us." },
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
