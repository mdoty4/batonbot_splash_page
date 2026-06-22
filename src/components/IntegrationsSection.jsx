import { ScrollReveal } from './ScrollReveal';

const integrations = [
  {
    name: 'Aider',
    tagline: 'Routable agent',
    href: 'https://aider.chat',
    accent: 'text-teal',
  },
  {
    name: 'Cline',
    tagline: 'Routable agent',
    href: 'https://cline.bot',
    accent: 'text-success',
  },
  {
    name: 'LM Studio',
    tagline: 'Local LLM backend',
    href: 'https://lmstudio.ai',
    accent: 'text-accent-light',
  },
  {
    name: 'OpenAI-Compatible',
    tagline: 'Any /v1 endpoint',
    href: 'https://platform.openai.com/docs/api-reference',
    accent: 'text-text-primary',
  },
  {
    name: 'Telegram',
    tagline: 'Notify + route',
    href: 'https://core.telegram.org/bots',
    accent: 'text-accent-light',
  },
  {
    name: 'Docker',
    tagline: 'One-command deploy',
    href: 'https://docs.docker.com/compose/',
    accent: 'text-teal',
  },
  {
    name: 'OpenClaw',
    tagline: 'Skill-file control',
    href: 'https://github.com/mdoty4/batonbot#-openclaw-integration',
    accent: 'text-success',
  },
  {
    name: 'MCP',
    tagline: 'Coming soon',
    href: 'https://github.com/mdoty4/batonbot#-future-roadmap',
    accent: 'text-text-tertiary',
    soon: true,
  },
];

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="section"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="integrations-heading">Works with the tools you already use.</h2>
            <p className="max-w-xl mx-auto">
              BatonBot is an orchestrator, not a walled garden. Route every task to whichever
              agent or backend makes sense — local or cloud, native or external.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {integrations.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.05}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl border border-border bg-background-tertiary hover:border-border-accent/60 hover:shadow-card-hover transition-all p-5 h-full"
              >
                {item.soon && (
                  <span className="absolute top-2 right-2 text-[10px] font-mono uppercase tracking-wider text-text-tertiary border border-border rounded px-1.5 py-0.5">
                    soon
                  </span>
                )}
                <p className={`text-card-md font-semibold ${item.accent} mb-1 group-hover:text-text-primary transition-colors`}>
                  {item.name}
                </p>
                <p className="text-body-sm text-text-tertiary">{item.tagline}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-body-sm text-text-tertiary mt-10">
            Cross-platform · <span className="text-text-secondary">macOS · Linux · Windows</span> · Docker-ready
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
