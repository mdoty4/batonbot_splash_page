import { motion } from 'framer-motion';
import { KanbanMock } from './hero/KanbanMock';
import { HeroInstallationSnippet } from './hero/HeroInstallationSnippet';

const GITHUB_URL = 'https://github.com/mdoty4/batonbot?ref=splash';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 z-[1] overflow-hidden"
      aria-label="Introduction"
    >
      {/* Hero gradient glow */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="max-w-hero mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-narrow"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-background-tertiary"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-label-xs text-text-secondary uppercase tracking-widest">
                Local-First &middot; Open Source &middot; MIT
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-hero-xl text-text-primary mb-6"
            >
              The visual{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-teal">
                orchestrator
              </span>
              <br />
              for AI agent
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-teal">
                pipelines.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-body-base text-text-secondary mb-4 max-w-lg"
            >
              Chain <span className="text-text-primary font-medium">native agents</span>,{' '}
              <span className="text-text-primary font-medium">Aider</span>,{' '}
              <span className="text-text-primary font-medium">Cline</span>, and{' '}
              <span className="text-text-primary font-medium">local LLMs</span> into repeatable
              pipelines. Drag-and-drop a Kanban board, hit start, and watch real work get done —
              even straight from a Jira ticket.
            </motion.p>

            {/* Mission line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-body-sm text-text-tertiary italic mb-8 max-w-lg"
            >
              Like Jira — but your agents work the tickets. Built to free you from your
              computer, by making your computer work for you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="mr-2 w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Star on GitHub
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#installation" className="btn-secondary">
                Quick Install
              </a>
            </motion.div>

            {/* Installation Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <HeroInstallationSnippet />
            </motion.div>
          </motion.div>

          {/* Right: Kanban board mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <KanbanMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
