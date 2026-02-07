"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import the ChatbotWrapper with SSR disabled
const ChatbotWrapper = dynamic(
    () => import("./ChatbotWrapper").then((mod) => mod.ChatbotWrapper),
    { ssr: false }
);

export default function LazyChatbot() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Defer loading until browser is idle or after a delay
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const requestIdleCallback = (window as any).requestIdleCallback;

        if (requestIdleCallback) {
            const handle = requestIdleCallback(() => {
                setShouldLoad(true);
            }, { timeout: 5000 });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return () => (window as any).cancelIdleCallback(handle);
        } else {
            const timer = setTimeout(() => {
                setShouldLoad(true);
            }, 4000); // Fallback for browsers without requestIdleCallback
            return () => clearTimeout(timer);
        }
    }, []);

    if (!shouldLoad) return null;

    return <ChatbotWrapper />;
}
