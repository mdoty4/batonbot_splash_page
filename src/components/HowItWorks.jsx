import { ScrollReveal } from './ScrollReveal';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create a Project',
      description:
        'Spin up a project with its own working directory and optional per-project LLM config. Local-first storage in prompts.json.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent" aria-hidden="true">
          <path d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 11v6M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design the Sequence',
      description:
        'Open the Kanban board (or linear Pipeline view). Drop cards from the agent palette, then drag them between Pending, Queue, and Completed.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal" aria-hidden="true">
          <rect x="3" y="5" width="5" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9.5" y="5" width="5" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="16" y="5" width="5" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Assign Agents',
      description:
        'Per card, pick the best agent: baton-code, baton-code-thinking, Aider, Cline, or Telegram. Each runs natively or routes through your local LLM.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal" aria-hidden="true">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Start. Watch. Review.',
      description:
        'Hit ▶ Start Sequence and watch live SSE updates flow into every card. Pause, cancel, inspect JSONL logs, tweak, re-run.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent" aria-hidden="true">
          <polygon points="7,4 19,12 7,20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="how-it-works-heading">From idea to autonomous pipeline in four steps.</h2>
            <p className="max-w-xl mx-auto">
              Project → Sequence → Assign → Run. Build once, run repeatedly, and let
              real work get done while you focus on something else.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 z-0" aria-hidden="true">
            <ScrollReveal delay={0.3}>
              <div className="h-px bg-border" />
            </ScrollReveal>
          </div>

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.15 + index * 0.15}>
              <article className="relative flex flex-col items-center text-center">
                <div className="relative z-[1] w-24 h-24 rounded-2xl bg-background-tertiary border border-border flex items-center justify-center mb-6 card">
                  {step.icon}
                </div>
                <span className="text-label-xs text-accent uppercase tracking-widest mb-2 font-mono">
                  Step {step.number}
                </span>
                <h3 className="text-card-md text-text-primary mb-3">{step.title}</h3>
                <p className="text-body-sm text-text-secondary max-w-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 text-text-tertiary" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
