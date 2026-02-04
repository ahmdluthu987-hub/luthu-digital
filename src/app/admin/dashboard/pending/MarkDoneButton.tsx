"use client";

import { Check } from "lucide-react";
import { markAsDone } from "./actions";
import { useState } from "react";

export default function MarkDoneButton({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            const result = await markAsDone(id);
            if (!result.success) {
                alert("Failed to update status: " + result.error);
            }
        } catch {
            alert("An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className={`w-full md:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm active:scale-95 whitespace-nowrap ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Mark as Done"
        >
            <Check className={`w-4 h-4 ${loading ? 'animate-pulse' : ''}`} />
            <span>{loading ? 'Updating...' : 'Mark Done'}</span>
        </button>
    );
}
