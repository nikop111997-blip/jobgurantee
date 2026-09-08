"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Mic, MicOff, Settings2, Send } from "lucide-react";
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

export default function ChatPromptBox() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const isLoading = status === 'submitted' || status === 'streaming';

  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);

  // Original streaming text logic for initial empty state
  const fullText = "280-Hour AI + DevOps + MLOps Training • 4-Month Internship • Interview Bootcamp • Active Placement Support • ₹3 LPA Minimum CTC Guarantee*";
  const highlightStartIndex = fullText.indexOf("₹3 LPA"); 
  
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 25); 
      return () => clearInterval(interval);
    }, 600); 
    return () => clearTimeout(startDelay);
  }, [fullText]);

  // Speech Recognition Setup with safe no-speech error handling
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false; 
        recognition.interimResults = true; 
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
          let transcript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setInput(transcript);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onerror = (event) => {
          // Ignore 'no-speech' error gracefully (it just means user didn't speak in time)
          if (event.error === 'no-speech') {
            console.log("No speech detected, closing microphone.");
          } else {
            console.error("Speech recognition error:", event.error);
          }
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Try Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error("Mic start error:", err);
        setIsListening(false);
      }
    }
  };

  // Inner container auto-scroll logic
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const normalText = displayedText.slice(0, highlightStartIndex);
  const highlightedText = displayedText.length > highlightStartIndex ? displayedText.slice(highlightStartIndex) : "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (isListening && recognitionRef.current) {
        recognitionRef.current.stop();
        setIsListening(false);
      }
      sendMessage({ text: input });
      setInput(""); 
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="w-full max-w-3xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-[20px] p-5 text-left mb-8 shadow-2xl flex flex-col"
    >
      {/* Chat History Container */}
      <div 
        ref={chatContainerRef}
        className="max-h-[200px] sm:max-h-[250px] overflow-y-auto mb-4 pr-2 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        {messages.length === 0 ? (
          <div className="text-white/60 text-sm md:text-base leading-relaxed font-medium min-h-[80px] sm:min-h-[50px]">
            {normalText}
            {highlightedText && <span className="text-[#ff6b00]">{highlightedText}</span>}
            <span className="inline-block w-1.5 h-4 ml-1 bg-white/70 animate-pulse align-middle" /> 
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`text-sm md:text-sm leading-relaxed flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className={`inline-block p-3 rounded-xl max-w-[90%] ${m.role === 'user' ? 'bg-[#ff6b00]/20 border border-[#ff6b00]/30 text-white' : 'bg-white/5 border border-white/5 text-white/80'}`}>
                {m.parts.map((part, index) => 
                  part.type === 'text' ? <span key={index}>{part.text}</span> : null
                )}
              </span>
            </div>
          ))
        )}
        
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="text-white/40 text-sm animate-pulse flex items-start">
             <span className="inline-block p-3 rounded-2xl bg-white/5 border border-white/5">
                Typing...
             </span>
          </div>
        )}
      </div>

      {/* Interactive Input Area */}
      <form onSubmit={onSubmit} className="flex items-center justify-between text-white/50 pt-3 border-t border-white/10 gap-3 mt-auto">
        <button type="button" className="flex-shrink-0 hover:text-white transition-colors">
          <Plus size={18} />
        </button>

       <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder={
    isListening
      ? "Listening... Speak now..."
      : "Ask a question about the program..."
  }
  className={`w-full bg-transparent border-none outline-none text-white/90 placeholder:text-white/30 text-sm font-medium focus:ring-0 ${
    isListening
      ? "animate-pulse text-[#ff6b00]"
      : "animate-placeholder-blink"
  }`}
  autoComplete="off"
/>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button 
            type="button" 
            onClick={toggleListening}
            title={isListening ? "Stop listening" : "Start voice input"}
            className={`transition-colors p-1.5 rounded-full ${isListening ? "bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse" : "hover:text-white bg-white/5 text-white/70"}`}
          >
            {isListening ? <MicOff size={14} /> : <Mic size={14} />}
          </button>
          
          <button 
            type="submit" 
            disabled={input.trim().length === 0 || isLoading}
            className="hover:text-white transition-colors bg-[#ff6b00] text-white p-1.5 rounded-full disabled:opacity-50 disabled:bg-white/5 disabled:text-white/50 cursor-pointer disabled:cursor-not-allowed"
          >
            <Send size={14} className={input.trim() && !isLoading ? "translate-x-[-1px] translate-y-[1px]" : ""} />
          </button>
        </div>
      </form>
    </motion.div>
  );
}