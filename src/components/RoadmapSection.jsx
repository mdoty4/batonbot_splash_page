import { ScrollReveal } from './ScrollReveal';

const items = [
  {
    title: 'Enterprise Gateway',
    description: 'Native support for OpenAI, Anthropic, and Azure API keys, with per-project routing.',
  },
  {
    title: 'Template Library',
    description: '"Golden Pipelines" — shareable, importable sequences for common development tasks.',
  },
  {
    title: 'Conditional Logic',
    description: 'Branching pipelines based on the output of a previous step. Loops, retries, gates.',
  },
  {
    title: 'MCP Server',
    description: 'Expose BatonBot capabilities as MCP tools so other AI agents can orchestrate it directly.',
  },
];

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="section bg-background-secondary"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="roadmap-heading">What's coming next.</h2>
            <p className="max-w-xl mx-auto">
              BatonBot is actively developed. Star or watch the repo to follow along —
              every item below is on the roadmap.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <article className="relative rounded-2xl border border-border bg-background-tertiary p-6 h-full">
                <div className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md border border-border bg-background-elevated text-label-xs font-mono text-text-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-card-md text-text-primary mb-2">{item.title}</h3>
                    <p className="text-body-sm text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/mdoty4/batonbot?ref=splash"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Watch on GitHub
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
