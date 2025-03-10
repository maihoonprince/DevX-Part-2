'use client';

import { useState } from "react";

const ChatBotPage = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState<{ user: string; bot: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    const userMessage = message;
    setMessage("");
    
    setResponses(prev => [...prev, { user: userMessage, bot: "Typing..." }]);
    
    try {
      const res = await fetch("https://devx-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setResponses(prev => {
        const newResponses = [...prev];
        newResponses[newResponses.length - 1].bot = data.response || "No response received.";
        return newResponses;
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Chatbot Error:", errorMessage);
      setResponses(prev => {
        const newResponses = [...prev];
        newResponses[newResponses.length - 1].bot = "Error fetching response.";
        return newResponses;
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">AI Assistant</h1>
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col flex-grow overflow-hidden">
        <div className="flex-grow overflow-y-auto max-h-[400px] space-y-2 p-2">
          {responses.map((resp, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="bg-blue-600 p-2 rounded-lg self-end max-w-[80%]">{resp.user}</div>
              <div className="bg-gray-700 p-2 rounded-lg self-start max-w-[80%] mt-1">{resp.bot}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            className="flex-grow p-2 rounded-l-lg bg-gray-700 focus:outline-none"
            placeholder="Ask anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-500 p-2 rounded-r-lg disabled:opacity-50"
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
