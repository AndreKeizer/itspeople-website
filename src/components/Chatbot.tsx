"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    greeting: "Hallo! 👋 Ik ben Nikki, de virtuele assistent van ITsPeople. Hoe kan ik u helpen?",
    quickActions: [
      "Vertel me over jullie diensten",
      "Ik wil een assessment doen",
      "Ik zoek een baan",
      "Ik wil contact opnemen",
    ],
    defaultResponse: "Bedankt voor uw vraag! Ik verbind u graag met één van onze experts. U kunt ons bereiken op info@itspeople.nl of +31 (0) 30 22 70 954.",
    responses: {
      diensten: "Wij bieden 5 kerndiensten: Business Consultancy, Project Management, Proces Management, Data Management en Testen & QA. Wilt u meer weten over een specifieke dienst?",
      assessment: "Goed idee! Wij hebben drie gratis self-assessments: de Innovation Readiness Scan, IT-Governance Scan en NIS2 Readiness Check. Welke past het beste bij uw vraag?",
      baan: "Geweldig dat je interesse hebt! Bij ITsPeople werk je aan uitdagende transformatieprojecten met een team van experts. Bekijk onze vacatures op itspeople.nl/werken-bij of stuur je CV naar hr@itspeople.nl.",
      contact: "U kunt ons bereiken via:\n📧 info@itspeople.nl\n📞 +31 (0) 30 22 70 954\n📍 Hogeweg 105, Zaltbommel\n\nOf plan direct een vrijblijvend gesprek in!",
    },
    placeholder: "Typ uw vraag...",
    botName: "Nikki",
    botTitle: "ITsPeople Assistant",
  },
  en: {
    greeting: "Hello! 👋 I'm Nikki, ITsPeople's virtual assistant. How can I help you?",
    quickActions: [
      "Tell me about your services",
      "I'd like an assessment",
      "I'm looking for a job",
      "I want to get in touch",
    ],
    defaultResponse: "Thank you for your question! I'd be happy to connect you with one of our experts. You can reach us at info@itspeople.nl or +31 (0) 30 22 70 954.",
    responses: {
      diensten: "We offer 5 core services: Business Consultancy, Project Management, Process Management, Data Management and Testing & QA. Would you like to know more about a specific service?",
      assessment: "Great idea! We have three free self-assessments: the Innovation Readiness Scan, IT-Governance Scan and NIS2 Readiness Check. Which one best fits your needs?",
      baan: "Wonderful that you're interested! At ITsPeople you work on challenging transformation projects with a team of experts. Check our vacancies at itspeople.nl/werken-bij or send your CV to hr@itspeople.nl.",
      contact: "You can reach us via:\n📧 info@itspeople.nl\n📞 +31 (0) 30 22 70 954\n📍 Hogeweg 105, Zaltbommel\n\nOr schedule a no-obligation conversation!",
    },
    placeholder: "Type your question...",
    botName: "Nikki",
    botTitle: "ITsPeople Assistant",
  },
};

export default function Chatbot() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: d.greeting,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    // Simulated responses
    setTimeout(() => {
      let response = d.defaultResponse;

      const lowerText = text.toLowerCase();
      if (lowerText.includes("diensten") || lowerText.includes("services")) {
        response = d.responses.diensten;
      } else if (lowerText.includes("assessment") || lowerText.includes("scan")) {
        response = d.responses.assessment;
      } else if (lowerText.includes("baan") || lowerText.includes("vacature") || lowerText.includes("job")) {
        response = d.responses.baan;
      } else if (lowerText.includes("contact")) {
        response = d.responses.contact;
      }

      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    }, 800);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-its-green hover:bg-its-green-dark text-white shadow-lg shadow-its-green/25 flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[520px] rounded-2xl bg-white shadow-2xl border border-its-gray-light/30 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-its-dark p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image src={asset("/images/nikki-avatar.jpg")} alt="Nikki" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{d.botName}</p>
                <p className="text-white/50 text-xs">{d.botTitle}</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-its-green animate-pulse" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-its-green text-white rounded-br-md"
                        : "bg-its-warm text-its-charcoal rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick actions (only show initially) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {d.quickActions.map((action) => (
                    <button
                      key={action}
                      onClick={() => handleSend(action)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-its-green/20 text-its-green-dark hover:bg-its-green/5 transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-its-gray-light/20">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder={d.placeholder}
                  className="flex-1 px-4 py-2.5 rounded-full bg-its-warm border border-its-gray-light/30 text-sm text-its-charcoal placeholder:text-its-gray-mid focus:outline-none focus:border-its-green/50"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="w-10 h-10 rounded-full bg-its-green hover:bg-its-green-dark text-white flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
