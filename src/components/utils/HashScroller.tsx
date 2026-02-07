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
                const id = hash.substring(1);

                const scrollToElement = (targetId: string) => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        // scroll-padding-top in globals.css (100px) will be respected
                        element.scrollIntoView({ behavior: "smooth" });
                        return true;
                    }
                    return false;
                };

                // Try immediately
                if (!scrollToElement(id)) {
                    // Retry logic for dynamic/suspended content
                    let retries = 0;
                    const maxRetries = 20;
                    const interval = setInterval(() => {
                        if (scrollToElement(id) || retries >= maxRetries) {
                            clearInterval(interval);
                        }
                        retries++;
                    }, 100);
                }
            }
        };

        // Run on mount and path changes
        handleHashScroll();

        window.addEventListener("hashchange", handleHashScroll);
        return () => window.removeEventListener("hashchange", handleHashScroll);

    }, [pathname, searchParams]); // Re-run if path/query changes (though loading same page usually doesn't trigger this for hash only)

    return null;
}
