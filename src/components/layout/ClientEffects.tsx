"use client";

import dynamic from "next/dynamic";

const MouseEffect = dynamic(() => import("./MouseEffect"), { ssr: false });

export default function ClientEffects() {
    return <MouseEffect />;
}
