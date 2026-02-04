"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScroller() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Only run on client side
        if (typeof window === "undefined") return;

        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Remove the '#' to get the ID
                const id = hash.substring(1);
                const element = document.getElementById(id);

                if (element) {
                    // Small timeout to allow layout to settle
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                } else {
                    // If element not found immediately, retry a few times (for dynamic content)
                    let retries = 0;
                    const maxRetries = 20; // Try for 2 seconds (20 * 100ms)
                    const interval = setInterval(() => {
                        const el = document.getElementById(id);
                        if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                            clearInterval(interval);
                        }
                        retries++;
                        if (retries >= maxRetries) clearInterval(interval);
                    }, 100);
                }
            }
        };

        // Run on mount
        handleHashScroll();

        // Also listen for hash changes (though usually handled by browser, this reinforces it)
        window.addEventListener("hashchange", handleHashScroll);
        return () => window.removeEventListener("hashchange", handleHashScroll);

    }, [pathname, searchParams]); // Re-run if path/query changes (though loading same page usually doesn't trigger this for hash only)

    return null;
}
