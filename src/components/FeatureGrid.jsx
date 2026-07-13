import { ScrollReveal } from './ScrollReveal';

export function FeatureGrid() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent" aria-hidden="true">
          <rect x="3" y="5" width="6" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="11" y="5" width="6" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="19" y="5" width="6" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="4.5" y="7" width="3" height="4" rx="0.5" fill="currentColor"/>
          <rect x="12.5" y="7" width="3" height="5" rx="0.5" fill="currentColor"/>
          <rect x="20.5" y="7" width="3" height="3" rx="0.5" fill="currentColor"/>
        </svg>
      ),
      title: 'Drag-and-Drop Kanban Board',
      description:
        'Pending, Queue, and Completed columns. Drop cards from the agent palette, reorder the queue, and shape your sequence visually. A linear Pipeline editor is also available.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal" aria-hidden="true">
          <circle cx="14" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="6" cy="20" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="22" cy="20" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 10.5L8 17.5M16 10.5L20 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Native + External Agents',
      description:
        'First-class native agents (baton-code, baton-code-thinking) plus first-party support for Aider, Cline, and Telegram — all routable within a single sequence.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal" aria-hidden="true">
          <path d="M5 14a9 9 0 0118 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="3" y="14" width="22" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="10" cy="18.5" r="1.2" fill="currentColor"/>
          <circle cx="18" cy="18.5" r="1.2" fill="currentColor"/>
          <path d="M14 14V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Hybrid LLM Support',
      description:
        'Route through LM Studio locally for privacy and zero cost, or proxy to OpenAI-compatible enterprise APIs for maximum intelligence. Per-project overrides included.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent" aria-hidden="true">
          <path d="M4 14h4l3-6 6 12 3-6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Real-Time SSE Orchestration',
      description:
        'Live task state via Server-Sent Events: pending → planning → in_progress → done / failed / stopped. Play, Pause, and Cancel right from the board.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal" aria-hidden="true">
          <rect x="6" y="12" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 12V8a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="18" r="1.5" fill="currentColor"/>
        </svg>
      ),
      title: 'Local-First & Private',
      description:
        'Runs on your machine, end-to-end. Every exchange is captured as JSONL in your logs/ folder for full audit and optimization. Nothing leaves unless you wire it to.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent" aria-hidden="true">
          <path d="M9 4L5 8l4 4M19 16l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 8h10a4 4 0 014 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'OpenAI-Compatible Proxy',
      description:
        'Point Cline or any OpenAI-compatible client at http://localhost:4321/v1 and BatonBot routes the call through your configured backend — local or cloud.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal" aria-hidden="true">
          <path d="M14 4v12M14 16l-4-4M14 16l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 17v4a2 2 0 002 2h14a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Ingress API',
      description:
        'Anything can drop a task onto the board — Telegram bots, CI pipelines, webhooks, other agents. POST to /api/projects/:id/ingest with a per-project bearer token.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent" aria-hidden="true">
          <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 14l3.5 3.5L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Jira Channel',
      description:
        'File a ticket → BatonBot picks it up, runs an agent, and comments the result back — then transitions it to Done. Polling-based: no webhook, no tunnel, works behind any firewall. Trust guards on by default.',
    },
  ];


  return (
    <section
      id="features"
      className="section"
      aria-labelledby="features-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="features-heading">Why BatonBot?</h2>
            <p className="max-w-xl mx-auto">
              Most developers use AI agents in a linear chat. BatonBot moves you to an{' '}
              <span className="text-text-primary font-medium">assembly line</span> —
              design the sequence, assign the right agent for each step, start once, walk away.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <article className="card p-8 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-card-md text-text-primary mb-3">
                  {feature.title}
                </h3>
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
