"use server";

import { createAdminClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export async function markAsDone(id: string) {
    const supabase = createAdminClient();

    const { error } = await supabase
        .from("contacts")
        .update({ status: "done" })
        .eq("id", id);

    if (error) {
        console.error("Error updating contact status:", error);
        return { success: false, error: error.message };
    }

    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/dashboard/pending");
    revalidatePath("/admin/dashboard/completed");
    return { success: true };
}
