"use client";

import { useState, useEffect, useRef } from "react";
import { Send, MessageSquare, X, Minus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "assistant" | "user";
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I'm Growth Assistant. I help businesses grow with SEO, Ads, and AI-driven marketing. How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isLeadCaptured, setIsLeadCaptured] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const handleOpenChatbot = () => setIsOpen(true);
        window.addEventListener('openChatbot', handleOpenChatbot);
        return () => window.removeEventListener('openChatbot', handleOpenChatbot);
    }, []);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: userMessage }],
                    isLeadCaptured,
                }),
            });

            const data = await response.json();

            if (data.leadCaptured) {
                setIsLeadCaptured(true);
                // Save lead data to our database
                await fetch("/api/leads", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data.leadCaptured),
                });
            }

            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "I'm having trouble connecting. Please try again later." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="floating-trigger"
                        initial={{ scale: 0, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open chatbot"
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-[#004D40] text-white rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] z-50 flex items-center justify-center group border-2 border-[#FF6B35]"
                    >
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-full bg-[#FF6B35]/20 animate-ping group-hover:hidden" />

                        {/* Button Glow */}
                        <div className="absolute inset-0 rounded-full bg-[#004D40] blur-md opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative z-10">
                            <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute top-0 right-0 w-4.5 h-4.5 bg-green-500 border-[3px] border-white rounded-full shadow-sm z-20">
                            <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse"></span>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 sm:hidden"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="dialog"
                        aria-label="Customer support chat"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            height: isMinimized ? "auto" : "min(650px, 80vh)" // Default for desktop
                        }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 
                            w-full sm:w-[400px] 
                            flex flex-col z-50 font-sans shadow-2xl 
                            rounded-t-3xl rounded-b-none sm:rounded-3xl 
                            border-t border-x sm:border border-primary/10 bg-white
                            ${!isMinimized ? 'h-[85dvh] sm:h-auto' : ''} 
                            will-change-transform`}
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between relative overflow-hidden shrink-0 rounded-t-3xl sm:rounded-t-[inherit]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light opacity-50"></div>
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm leading-none">Growth Assistant</h3>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Active Now</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 relative z-10">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/70 hover:text-white"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close chat"
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/70 hover:text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        {!isMinimized && (
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream bg-[url('/grid.svg')] bg-fixed overscroll-contain">
                                    {messages.map((m, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.05 }}
                                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-3 sm:p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm break-words ${m.role === "user"
                                                    ? "bg-primary text-white rounded-tr-none shadow-primary/10"
                                                    : "bg-white text-primary border border-primary/5 rounded-tl-none"
                                                    }`}
                                            >
                                                {m.content}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white text-primary border border-primary/5 p-4 rounded-2xl rounded-tl-none flex gap-1.5 shadow-sm">
                                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-150"></span>
                                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-300"></span>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-3 sm:p-4 bg-white border-t border-primary/5 shrink-0 safe-area-pb">
                                    <div className="relative flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                            placeholder="Ask anything..."
                                            aria-label="Type your message"
                                            className="w-full bg-soft-bg border border-primary/10 text-primary rounded-2xl py-3 pl-4 pr-12 text-[16px] sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-primary/30"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleSend}
                                            disabled={isLoading}
                                            aria-label="Send message"
                                            className="absolute right-2 p-3 bg-primary hover:bg-primary-light disabled:opacity-30 text-white rounded-xl transition-all shadow-lg shadow-primary/20"
                                        >
                                            <Send className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                    <p className="text-[10px] text-center text-primary/30 mt-3 font-semibold tracking-widest uppercase">
                                        Growth Assistant usually responds in seconds
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
