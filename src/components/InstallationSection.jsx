import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

export function InstallationSection() {
  const [copied, setCopied] = useState(false);

  const commands = [
    { comment: '# Clone the repository', cmd: 'git clone https://github.com/mdoty4/batonbot_splash_page.git' },
    { comment: '# Enter the project directory', cmd: 'cd batonbot' },
    { comment: '# Install dependencies', cmd: 'npm install' },
    { comment: '# Create .env file with PORT=4321', cmd: 'echo "PORT=4321" > .env' },
    { comment: '# Start the server', cmd: 'npm start' },
  ];

  const fullText = commands.map((c) => `${c.comment}\n${c.cmd}`).join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="installation"
      className="section"
      aria-labelledby="installation-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="installation-heading">Get Up and Running in Seconds</h2>
            <p className="max-w-xl mx-auto">
              Clone, install, configure, and run. No cloud account required.
            </p>
          </header>
        </ScrollReveal>

        {/* Code Block with Scroll Reveal */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-border bg-background-secondary shadow-code-block overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background-tertiary">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error/70" />
                  <span className="w-3 h-3 rounded-full bg-warning/70" />
                  <span className="w-3 h-3 rounded-full bg-success/70" />
                </div>
                <span className="text-label-xs text-text-tertiary font-mono">terminal</span>

                {/* Enhanced Copy Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className={`transition-all duration-300 text-label-xs font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                    ${copied
                      ? 'text-teal bg-teal-glow border border-teal/30'
                      : 'text-text-tertiary hover:text-text-primary hover:bg-background-elevated border border-transparent'
                    }`}
                  aria-label="Copy to clipboard"
                >
                  <motion.div
                    key={copied ? 'check' : 'copy'}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7L6 10L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M10 4V2.5A1.5 1.5 0 008.5 1h-6A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    )}
                  </motion.div>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </motion.button>
              </div>

              {/* Terminal Body */}
              <pre className="p-6 font-mono text-code-xs overflow-x-auto" aria-label="Installation commands">
                {commands.map((block, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="mb-3 last:mb-0"
                  >
                    <span className="text-text-tertiary select-none">
                      {block.comment}
                    </span>
                    <div className="flex items-start gap-2 mt-1">
                      <span className="text-teal select-none mt-0.5">$</span>
                      <code className="text-text-primary">{block.cmd}</code>
                    </div>
                  </motion.div>
                ))}

                {/* Simulated Output */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 pt-4 border-t border-border text-text-secondary"
                >
                  <div>✓ Dependencies installed</div>
                  <div>✓ Environment configured</div>
                  <div>✓ Server running on http://localhost:4321</div>
                  <div className="mt-2 text-teal">
                    ▸ Batonbot ready. Open your browser to get started.
                  </div>
                </motion.div>
              </pre>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}