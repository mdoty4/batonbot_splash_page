import { ScrollReveal } from './ScrollReveal';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Describe',
      description:
        'Tell Batonbot what you need done. Each task is a plain-language instruction — no code, no config, no prompt templates.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M16 3L21 8L8 21H3V16L16 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 5L19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Arrange',
      description:
        'Set the execution order. Drag tasks into the sequence that makes sense for your workflow. First, second, third — you decide.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
          <path d="M8 6H20M8 12H20M8 18H20M4 6H4.01M4 12H4.01M4 18H4.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Execute',
      description:
        'Hit run. Watch each agent complete its task and produce real output. Track progress, catch issues, stay in control.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
          <polygon points="6,4 20,12 6,20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Review',
      description:
        'Inspect results at every step. Tweak a task, adjust the order, and re-run. Repeatable, reproducible, fully yours.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section bg-background-secondary"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="how-it-works-heading">Describe. Arrange. Execute. Review.</h2>
            <p className="max-w-xl mx-auto">
              From idea to output in four steps. Tell your agents what to do, set the order, and watch real work get done.
            </p>
          </header>
        </ScrollReveal>

        {/* Steps with Staggered Reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connector Line (desktop only) - positioned absolutely so it doesn't take grid space */}
          <div className="hidden md:block absolute top-12 left-0 right-0 z-0" aria-hidden="true">
            <ScrollReveal delay={0.3}>
              <div className="h-px bg-border" />
            </ScrollReveal>
          </div>

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.15 + index * 0.2}>
              <article className="relative flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="relative z-[1] w-24 h-24 rounded-2xl bg-background-tertiary border border-border flex items-center justify-center mb-6 card">
                  {step.icon}
                </div>

                {/* Step Label */}
                <span className="text-label-xs text-accent uppercase tracking-widest mb-2 font-mono">
                  Step {step.number}
                </span>

                {/* Title */}
                <h3 className="text-card-md text-text-primary mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-text-secondary max-w-sm">
                  {step.description}
                </p>

                {/* Arrow between steps (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-6 text-text-tertiary" aria-hidden="true">
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