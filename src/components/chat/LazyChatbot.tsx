"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the ChatbotWrapper with SSR disabled
const ChatbotWrapper = dynamic(
    () => import("./ChatbotWrapper").then((mod) => mod.ChatbotWrapper),
    { ssr: false }
);

export default function LazyChatbot() {
    return <ChatbotWrapper />;
}
