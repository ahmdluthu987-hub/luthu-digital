import { ChatbotWrapper } from "@/components/chat/ChatbotWrapper";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <ChatbotWrapper />
        </>
    );
}
