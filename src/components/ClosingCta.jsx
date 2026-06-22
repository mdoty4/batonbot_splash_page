import { ScrollReveal } from './ScrollReveal';

const GITHUB_URL = 'https://github.com/mdoty4/batonbot?ref=splash';

export function ClosingCta() {
  return (
    <section
      id="closing-cta"
      className="relative section overflow-hidden"
      aria-labelledby="closing-cta-heading"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="relative max-w-narrow mx-auto text-center">
        <ScrollReveal>
          <h2 id="closing-cta-heading" className="text-section-lg text-text-primary mb-4">
            Stop chatting with agents.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-teal">
              Start sequencing them.
            </span>
          </h2>
          <p className="text-body-base text-text-secondary mb-8">
            BatonBot is free, MIT-licensed, and runs entirely on your machine.
            Star the repo, clone it, and have your first pipeline running in under a minute.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
            </a>
            <a href="#installation" className="btn-secondary">
              Quick Install
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
