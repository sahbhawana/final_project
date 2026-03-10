"use client";
import { useState } from "react";
import { MessageCircle, X, Minus } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          title="Open chat"
          className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl transition"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] bg-white rounded-2xl shadow-2xl border overflow-hidden">
          
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="font-semibold">HomeFix Support</div>

            <div className="flex gap-2">
              <button
                onClick={() => setOpen(false)}
                aria-label="Minimize chat"
                title="Minimize chat"
              >
                <Minus size={18} />
              </button>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-sm font-medium">
              Hi 👋 Welcome to HomeFix!  
              Tell us how we can help you.
            </p>

            {/* Name Input */}
            <input
              aria-label="Enter your name"
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter your name"
            />

            {/* Phone Section */}
            <div className="flex gap-2">
              <select
                aria-label="Country code"
                className="border rounded-lg p-2"
              >
                <option value="+977">+977</option>
              </select>

              <input
                aria-label="Mobile number"
                type="tel"
                className="flex-1 border rounded-lg p-2"
                placeholder="Mobile number"
              />
            </div>

            {/* Message */}
            <textarea
              aria-label="Write your query"
              className="w-full border rounded-lg p-2"
              rows={3}
              placeholder="Write your query..."
            />

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </>
  );
}