import { ScrollReveal } from './ScrollReveal';

export function FeatureGrid() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
          <path d="M6 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H6C4.9 16 4 15.1 4 14V6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 16V22L14 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M20 18H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Describe Any Task',
      description:
        'Tell an agent what you need in plain language. No prompt engineering, no rigid templates — just describe the work and let it run.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <path d="M5 14L11 20L23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Agents That Deliver',
      description:
        'These are not chatbots. Batonbot agents research, write, code, analyze, and produce real output you can use. Confidence built in.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <path d="M6 7H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 14H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 21H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="10" cy="7" r="1.5" fill="currentColor" />
          <circle cx="18" cy="14" r="1.5" fill="currentColor" />
          <circle cx="14" cy="21" r="1.5" fill="currentColor" />
          <path d="M9 5V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M17 12V16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M13 19V23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      title: 'You Set the Order',
      description:
        'Drag tasks into the sequence that makes sense. Research before drafting. Testing before deployment. Your workflow, your rules.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <rect x="6" y="12" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12V8C10 5.79 11.79 4 14 4C16.21 4 18 5.79 18 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="14" cy="18" r="1.5" fill="currentColor" />
          <path d="M14 19.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Local-First Privacy',
      description:
        'Everything runs on your machine. Your codebase, your prompts, your agent outputs — none of it leaves your control.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
          <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 4C17 7 19 10 19 14C19 18 17 21 14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 4C11 7 9 10 9 14C9 18 11 21 14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 14H24" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 9H22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M6 19H22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ),
      title: 'Inspect & Iterate',
      description:
        'Watch each agent complete its task. Review the output at every step, then adjust and re-run — full transparency, full control.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <path d="M14 3L17.5 8L24 9.5L20 14.5L21 21L14 18L7 21L8 14.5L4 9.5L10.5 8L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Open-Source Control',
      description:
        'Built on open-source principles. Fork it, extend it, adapt it to your stack. No vendor lock-in, no black-box orchestration.',
    },
  ];

  return (
    <section
      id="features"
      className="section"
      aria-labelledby="features-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="features-heading">Why Batonbot?</h2>
            <p className="max-w-xl mx-auto">
              The local AI agent orchestrator that puts you in control of your tasks, your models, and your output.
            </p>
          </header>
        </ScrollReveal>

        {/* Feature Cards Grid with Staggered Reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <article className="card p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-card-md text-text-primary mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-text-secondary flex-1">
                  {feature.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}