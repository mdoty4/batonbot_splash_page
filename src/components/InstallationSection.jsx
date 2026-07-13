import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const TABS = {
  portable: {
    label: 'Portable',
    output: [
      '✓ No Node, no npm, no git required',
      '✓ Settings, projects, and logs live in config/ next to the launcher',
      '✓ Server running on http://localhost:4321',
    ],
    commands: [
      { comment: '# 1. Download the bundle for your platform from the Releases page', cmd: 'open https://github.com/mdoty4/batonbot/releases' },
      { comment: '# 2. Unzip it (Windows x64: batonbot-portable-win-x64.zip · macOS Apple Silicon: batonbot-portable-mac-arm64.zip)', cmd: 'unzip batonbot-portable-*.zip' },
      { comment: '# 3. Double-click the launcher (start.cmd on Windows · start.command on macOS)', cmd: './start.command  # or start.cmd on Windows' },
    ],
  },
  npm: {

    label: 'npm',
    output: [
      '✓ Dependencies installed',
      '✓ Environment configured',
      '✓ Server running on http://localhost:4321',
    ],
    commands: [
      { comment: '# Clone the repository',           cmd: 'git clone https://github.com/mdoty4/batonbot.git' },
      { comment: '# Enter the project directory',    cmd: 'cd batonbot' },
      { comment: '# Install dependencies',           cmd: 'npm install' },
      { comment: '# Initialize project state',       cmd: 'cp prompts.json.example prompts.json' },
      { comment: '# Create .env file',               cmd: 'echo "PORT=4321\\nLM_STUDIO_URL=http://localhost:1234/v1" > .env' },
      { comment: '# Start the server',               cmd: 'npm start' },
    ],
  },
  docker: {
    label: 'Docker',
    output: [
      '✓ Image built',
      '✓ Container started (detached)',
      '✓ Health check passing on /health',
      '✓ Server available at http://localhost:4321',
    ],
    commands: [
      { comment: '# Clone the repository',                       cmd: 'git clone https://github.com/mdoty4/batonbot.git && cd batonbot' },
      { comment: '# Create your .env (PORT, LM_STUDIO_URL)',     cmd: 'echo "PORT=4321\\nLM_STUDIO_URL=http://localhost:1234/v1" > .env' },
      { comment: '# Build and start in background',              cmd: 'docker compose up --build -d' },
      { comment: '# Follow logs (optional)',                     cmd: 'docker compose logs -f' },
    ],
  },
};

export function InstallationSection() {
  const [tab, setTab] = useState('portable');
  const [copied, setCopied] = useState(false);

  const active = TABS[tab];
  const fullText = active.commands.map((c) => `${c.comment}\n${c.cmd}`).join('\n');

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
        <ScrollReveal>
          <header className="section-header">
            <h2 id="installation-heading">Up and running in under a minute.</h2>
            <p className="max-w-xl mx-auto">
              Grab a portable bundle (no install), clone with npm, or run the full stack with
              one Docker command. No cloud account, no signup, no telemetry.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            {/* Tab switcher */}
            <div
              role="tablist"
              aria-label="Installation method"
              className="inline-flex p-1 mb-4 rounded-xl bg-background-tertiary border border-border"
            >
              {Object.entries(TABS).map(([key, t]) => {
                const isActive = key === tab;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`install-panel-${key}`}
                    onClick={() => { setTab(key); setCopied(false); }}
                    className={`px-4 py-2 rounded-lg text-body-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-background-elevated text-text-primary shadow-card'
                        : 'text-text-tertiary hover:text-text-secondary'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              whileHover={{ scale: 1.005 }}
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
                <span className="text-label-xs text-text-tertiary font-mono">terminal · {active.label.toLowerCase()}</span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className={`transition-all duration-300 text-label-xs font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                    ${copied
                      ? 'text-teal bg-teal-glow border border-teal/30'
                      : 'text-text-tertiary hover:text-text-primary hover:bg-background-elevated border border-transparent'
                    }`}
                  aria-label="Copy installation commands to clipboard"
                >
                  {copied ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7L6 10L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M10 4V2.5A1.5 1.5 0 008.5 1h-6A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  )}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </motion.button>
              </div>

              {/* Terminal Body */}
              <AnimatePresence mode="wait">
                <motion.pre
                  key={tab}
                  id={`install-panel-${tab}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 font-mono text-code-xs overflow-x-auto"
                  aria-label={`${active.label} installation commands`}
                >
                  {active.commands.map((block, index) => (
                    <div key={index} className="mb-3 last:mb-0">
                      <span className="text-text-tertiary select-none">{block.comment}</span>
                      <div className="flex items-start gap-2 mt-1">
                        <span className="text-teal select-none mt-0.5">$</span>
                        <code className="text-text-primary whitespace-pre-wrap">{block.cmd}</code>
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 pt-4 border-t border-border text-text-secondary">
                    {active.output.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div className="mt-2 text-teal">
                      ▸ BatonBot ready. Open http://localhost:4321 to start orchestrating.
                    </div>
                  </div>
                </motion.pre>
              </AnimatePresence>
            </motion.div>

            <p className="mt-6 text-center text-body-sm text-text-tertiary">
              Cross-platform: macOS · Linux · Windows (native or via WSL2). Portable bundles
              available for Windows x64 and macOS Apple Silicon.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
