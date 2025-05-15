"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const MOCK_RESPONSES = {
  "How do I sell my license?":
    'To sell your license, simply go to our "Sell My Licenses" page, upload your license details, and our system will provide you with a valuation. Once accepted, we handle the entire sales process for you!',
  "What types of software can I sell?":
    "We accept most major commercial software licenses including Microsoft, Adobe, Autodesk, VMware, and many others. Visit our Sell page for a complete list.",
  "How long does the process take?":
    "You can get an instant valuation, and the entire sales process typically completes within 3-5 business days after you accept an offer.",
  "Is this service secure?":
    "Absolutely! We use bank-grade encryption and secure transfer protocols to ensure all transactions are completely safe and confidential.",
};

export default function ChatWidget({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponseText =
        MOCK_RESPONSES[inputValue] ||
        "I'm sorry, I don't have information about that. Please contact our support team for assistance.";
      const botMessage = {
        text: botResponseText,
        sender: "bot",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of software can I sell?",
    "How long does the process take?",
    "Is this service secure?",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-24 right-6 z-50 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-semibold">AI Assistant</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <div className="rounded-full bg-purple-100 p-4 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300">
                  <Bot className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  How can I help you today?
                </h4>
                <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
                  Ask me anything about selling your software licenses
                </p>
                <div className="grid grid-cols-2 gap-2 pt-4">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => setInputValue(question)}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs rounded-lg px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p
                        className={`mt-1 text-xs ${
                          message.sender === "user"
                            ? "text-purple-200"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="rounded-lg bg-purple-600 px-4 py-2 text-white disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
