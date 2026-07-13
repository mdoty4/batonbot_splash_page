import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

// Keep these in sync with the FAQPage JSON-LD in index.html —
// Google requires FAQ content to be visible on the page for rich results.
const faqs = [
  {
    question: 'What is an AI agent orchestrator?',
    answer:
      'An AI agent orchestrator coordinates multiple AI agents and LLM calls into a repeatable workflow. Instead of chatting with one agent at a time, BatonBot lets you design a sequence of tasks on a Kanban board, assign the best agent to each step (baton-code, Aider, Cline, or Telegram), and execute the entire pipeline with one click while tracking live status.',
  },
  {
    question: 'Can I run AI coding agents with a local LLM?',
    answer:
      'Yes. BatonBot is local-first: route all requests through LM Studio (or any local OpenAI-compatible server) for privacy and zero API cost, or connect to cloud APIs when you want maximum intelligence. Each project can have its own LLM configuration.',
  },
  {
    question: 'How do I automate Jira tickets with AI?',
    answer:
      "BatonBot's Jira channel polls Jira Cloud over outbound HTTPS — no webhook, tunnel, or public URL required. File a ticket, label it fix-now, and BatonBot imports it as a card, runs an agent on it, comments the result back on the ticket, and transitions it to Done. Trust guards (assignee guard, autostart cap, first-run watermark) are on by default.",
  },
  {
    question: 'Is BatonBot free and open source?',
    answer:
      'Yes. BatonBot is free and MIT-licensed. Install from source with npm, run it with Docker, or download a portable no-install bundle for Windows x64 or macOS Apple Silicon — unzip and double-click, no Node or git required.',
  },
  {
    question: 'Does BatonBot work offline?',
    answer:
      'BatonBot runs entirely on your machine and can operate against a fully local model via LM Studio. A strict local-only mode (hard-failing any request that would leave the machine) is on the roadmap for v3.5.',
  },
  {
    question: 'Is BatonBot like Jira for AI agents?',
    answer:
      "That's the idea — BatonBot is a project management board where AI agents work the tickets. Tasks live as cards in Pending, Queue, and Completed columns; you assign an agent to each card and hit Start. It even connects to real Jira: tickets flow onto the board, and results are commented back automatically.",
  },
  {
    question: "What's the best way to run multiple AI coding agents at once?",
    answer:
      'Use an orchestrator instead of juggling chat windows. With BatonBot you queue tasks on a kanban board, assign a different agent to each (baton-code, Aider, Cline), and execute the sequence in one click. BatonBot manages the hand-off between agents and streams live status for every task.',
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <article className="rounded-xl border border-border bg-background-tertiary overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-background-elevated/50 transition-colors"
      >
        <h3 className="text-body-base text-text-primary font-medium">{faq.question}</h3>
        <span
          className={`shrink-0 text-text-tertiary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-5 pb-5 text-body-sm text-text-secondary">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="section bg-background-secondary"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="faq-heading">Frequently asked questions.</h2>
            <p className="max-w-xl mx-auto">
              Everything you need to know about orchestrating AI agents with BatonBot.
            </p>
          </header>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.05}>
              <FaqItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
