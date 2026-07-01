import { ScrollReveal } from './ScrollReveal';

// Status values: 'done' | 'in-progress' | 'planned' | 'eventually'
// Flip an item's `done: true` or a milestone's `status` as work ships.

const nowNext = [
  {
    version: 'v3.2',
    codename: 'Portable',
    status: 'done-mostly',
    track: 'Now',
    headline: 'Download, unzip, double-click. No git, no npm, no Python required.',
    items: [
      { text: 'Portable Windows ZIP build with bundled Node.js runtime (v3.2.2)', done: true },
      { text: 'Config folder lives next to the executable (prompts.json, .env, logs/)', done: true },
      { text: 'Windows Cline stdin-hang bug fixed — Cline works on Windows 10/11 (v3.2.2)', done: true },
      { text: 'macOS Apple Silicon (arm64) portable with double-clickable start.command (v3.2.3)', done: true },
      { text: 'README install-first rewrite — Portable is Option A', done: true },
    ],
    footnote: 'Intel Mac / Linux portable variants, install GIF, and launch announcement deferred — moving on to v3.3.',
  },

  {
    version: 'v3.3',
    codename: 'Ingress',
    status: 'planned',
    track: 'Next',
    headline: 'Anything can drop a task into BatonBot — webhooks, files, scripts, other agents.',
    items: [
      { text: 'Generic ingress webhook: POST /api/projects/:id/ingest', done: false },
      { text: 'File-based ingress: drop a *.task.md or *.task.json in .batonbot/inbox/', done: false },
      { text: 'Documented JSON Schema for the task format (docs/task-schema.md)', done: false },
      { text: 'Per-project bearer-token auth for the ingress endpoint', done: false },
      { text: 'Manual import UI for one-off bulk imports', done: false },
    ],
  },
];

const later = [
  { version: 'v3.4', codename: 'Local-First + Outputs', description: 'Strict local-only mode. Per-card results written as Markdown + JSON in the project\u2019s repo.' },
  { version: 'v3.5', codename: 'Trust & Isolation', description: 'Per-card git worktrees with diff / merge / discard. ask_user tool. Approval gates. Restart recovery.' },
  { version: 'v3.6', codename: 'GitHub Loop', description: 'Issue \u2192 triage \u2192 fix \u2192 PR, end to end, via a GitHub App.' },
  { version: 'v3.6.1+', codename: 'Native Specialists', description: 'baton-summarizer, baton-docs-writer, baton-test-writer, baton-search, plus a baton-moltbook-poster agent for the agent social network.' },
  { version: 'v3.7', codename: 'Mission Control', description: 'Multi-project dashboard. Cost telemetry. Pipeline templates.' },
  { version: 'v3.8', codename: 'Open Substrate', description: 'MCP server. Auto-routing rules. Additional ingress adapters (Linear, Email, Slack, Jira, Moltbook).' },
  { version: 'v3.9', codename: 'Machine Substrate', description: 'API tokens. Outbound webhooks. OpenAPI spec. Headless mode.' },
  { version: 'v3.10', codename: 'Maturity', description: 'Per-repo BATONBOT.md policy file. Architecture docs. Public comparison docs.' },
];

function StatusBadge({ status }) {
  const map = {
    done: {
      label: 'Shipped',
      className: 'border-teal/40 bg-teal/10 text-teal',
      dot: <span className="w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />,
    },
    'done-mostly': {
      label: 'Shipped*',
      className: 'border-teal/40 bg-teal/10 text-teal',
      dot: <span className="w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />,
    },
    'in-progress': {
      label: 'In progress',
      className: 'border-accent/40 bg-accent/10 text-accent-light',
      dot: <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse-glow" aria-hidden="true" />,
    },
    planned: {
      label: 'Planned',
      className: 'border-border-strong bg-background-elevated text-text-secondary',
      dot: <span className="w-1.5 h-1.5 rounded-full border border-text-tertiary" aria-hidden="true" />,
    },
    eventually: {
      label: 'Eventually',
      className: 'border-dashed border-border-strong bg-transparent text-text-tertiary',
      dot: <span className="w-1.5 h-1.5 rounded-full border border-text-tertiary" aria-hidden="true" />,
    },
  };
  const cfg = map[status] ?? map.planned;
  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-label-xs uppercase tracking-wider ${cfg.className}`}>
      {cfg.dot}
      {cfg.label}
    </span>
  );
}

function ItemCheck({ done }) {
  if (done) {
    return (
      <span
        className="mt-0.5 shrink-0 inline-flex items-center justify-center w-4 h-4 rounded border border-teal/50 bg-teal/15 text-teal"
        aria-label="Completed"
      >
        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" aria-hidden="true">
          <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="mt-0.5 shrink-0 inline-block w-4 h-4 rounded border border-border-strong bg-background-elevated"
      aria-label="Not yet started"
    />
  );
}

function MilestoneCard({ milestone }) {
  return (
    <article className="relative rounded-2xl border border-border bg-background-tertiary p-6 lg:p-7 h-full flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-baseline gap-2">
          <span className="text-label-xs uppercase tracking-wider text-text-tertiary font-mono">{milestone.track}</span>
          <span className="text-text-tertiary">·</span>
          <span className="font-mono text-body-sm text-text-secondary">{milestone.version}</span>
        </div>
        <StatusBadge status={milestone.status} />
      </div>
      <h3 className="text-card-md text-text-primary mb-2">
        &ldquo;{milestone.codename}&rdquo;
      </h3>
      <p className="text-body-sm text-text-secondary mb-5">{milestone.headline}</p>
      <ul className="space-y-2.5 mt-auto">
        {milestone.items.map((item) => (
          <li key={item.text} className="flex items-start gap-3">
            <ItemCheck done={item.done} />
            <span className={`text-body-sm ${item.done ? 'text-text-tertiary line-through' : 'text-text-secondary'}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      {milestone.footnote && (
        <p className="mt-4 pt-4 border-t border-border text-label-xs text-text-tertiary italic">
          <span aria-hidden="true">* </span>{milestone.footnote}
        </p>
      )}
    </article>
  );
}

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
            <h2 id="roadmap-heading">Roadmap.</h2>
            <p className="max-w-xl mx-auto">
              A local-first kanban orchestrator for AI coding agents — useful to a
              developer at the board and to other programs and agents via API.
              Items may shift as we learn.
            </p>
          </header>
        </ScrollReveal>

        {/* Now + Next */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {nowNext.map((milestone, index) => (
            <ScrollReveal key={milestone.version} delay={index * 0.1}>
              <MilestoneCard milestone={milestone} />
            </ScrollReveal>
          ))}
        </div>

        {/* Later */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-card-md text-text-primary">Later</h3>
            <span className="h-px flex-1 bg-border" />
            <span className="text-label-xs uppercase tracking-wider text-text-tertiary">Headlines only</span>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-3 lg:gap-4 mb-12">
          {later.map((entry, index) => (
            <ScrollReveal key={entry.version} delay={index * 0.05}>
              <article className="relative rounded-xl border border-border bg-background-tertiary p-5 h-full">
                <div className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 inline-block w-2.5 h-2.5 rounded-full border border-text-tertiary" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-body-sm text-text-secondary">{entry.version}</span>
                      <span className="text-text-tertiary">·</span>
                      <span className="text-body-sm text-text-primary font-semibold">{entry.codename}</span>
                    </div>
                    <p className="text-body-sm text-text-secondary">{entry.description}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Eventually */}
        <ScrollReveal delay={0.1}>
          <article className="relative rounded-2xl border border-dashed border-border-strong bg-background-tertiary/40 p-6 lg:p-7 mb-10">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <div className="flex items-baseline gap-2">
                <span className="text-label-xs uppercase tracking-wider text-text-tertiary font-mono">Eventually</span>
                <span className="text-text-tertiary">·</span>
                <span className="font-mono text-body-sm text-text-secondary">v4.0</span>
              </div>
              <StatusBadge status="eventually" />
            </div>
            <h3 className="text-card-md text-text-primary mb-2">&ldquo;Beyond Code&rdquo;</h3>
            <p className="text-body-sm text-text-secondary">
              When BatonBot has clear traction in the coding niche, we&rsquo;ll broaden into
              general AI workflow agents (research, writing, monitoring). Not before —
              the dev story comes first.
            </p>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-2 text-center">
            <a
              href="https://github.com/mdoty4/batonbot?ref=splash"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow progress on GitHub
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

