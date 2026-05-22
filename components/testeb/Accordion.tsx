"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  testId?: string;
}

function AccordionItem({ question, answer, isOpen, onClick, testId }: AccordionItemProps) {
  return (
    <div style={{ borderBottom: "1px solid #2A2520" }} data-testid={testId}>
      <button
        onClick={onClick}
        className="w-full text-left py-4 flex items-center justify-between"
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: "15px",
          fontWeight: 400,
          color: "#F5F0E8",
        }}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "#C9A84C", fontSize: "18px", marginLeft: "12px" }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-4"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#A09880",
                lineHeight: 1.75,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  testId?: string;
}

export function Accordion({ items, testId }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div data-testid={testId}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
          testId={`accordion-item-${i}`}
        />
      ))}
    </div>
  );
}
