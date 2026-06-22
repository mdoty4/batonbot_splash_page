import { useState } from 'react';
import { motion } from 'framer-motion';

const ONE_LINER = 'git clone https://github.com/mdoty4/batonbot.git && cd batonbot && npm install';

export function HeroInstallationSnippet() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ONE_LINER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inline-flex max-w-full items-center gap-3 bg-background-secondary border border-border rounded-code px-4 py-3 shadow-code-block group">
      <span className="text-teal text-code-xs font-mono shrink-0">$</span>
      <code className="text-text-primary text-code-xs font-mono overflow-x-auto whitespace-nowrap">
        {ONE_LINER}
      </code>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCopy}
        className={`transition-colors ml-2 shrink-0 ${copied ? 'text-teal' : 'text-text-tertiary hover:text-text-primary'}`}
        aria-label="Copy install command to clipboard"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7L6 10L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M10 4V2.5A1.5 1.5 0 008.5 1h-6A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        )}
      </motion.button>
      {copied && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-label-xs text-teal font-medium -ml-2 shrink-0"
        >
          Copied!
        </motion.span>
      )}
    </div>
  );
}
