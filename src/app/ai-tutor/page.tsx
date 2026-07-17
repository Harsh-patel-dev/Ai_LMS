'use client';

import { useState } from 'react';
import { Send, MessageCircle, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AiTutorPage() {
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'ai' }>>([
    {
      id: '1',
      text: 'Hello! I am your AI Tutor. I can help you with any subject. What would you like to learn about?',
      sender: 'ai',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user' as const,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          text: `Great question about "${input}"! Let me help you understand this concept. Here's a comprehensive explanation: This is a demo response from the AI tutor. In production, this would be powered by Google Gemini API for more intelligent and context-aware responses.`,
          sender: 'ai' as const,
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      toast.error('Failed to get AI response');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-96 flex flex-col">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-2">🤖 AI Tutor</h1>
          <p className="text-slate-400">Ask me anything about your courses</p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 rounded-lg bg-slate-800/50 border border-slate-700 overflow-hidden flex flex-col backdrop-blur-md">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-700/50 text-slate-100 border border-slate-600'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 text-slate-100 border border-slate-600 px-4 py-3 rounded-lg flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin" />
                  AI is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-slate-600 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white rounded-lg font-semibold flex items-center gap-2 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            '📝 Generate Notes',
            '📊 Create Quiz',
            '⚡ Quick Summary',
            '🎓 Study Plan',
          ].map((action, i) => (
            <button
              key={i}
              onClick={() => setInput(action.split(' ')[1])}
              className="px-4 py-2 bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 text-white rounded-lg text-sm transition"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
