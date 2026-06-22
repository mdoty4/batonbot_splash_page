import { ScrollReveal } from './ScrollReveal';

const SCREENSHOT_URL = '/Screenshot%202026-06-21%20at%203.43.36%E2%80%AFPM.png';

export function BoardShowcase() {
  return (
    <section
      id="board"
      className="section bg-background-secondary"
      aria-labelledby="board-heading"
    >
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <header className="section-header">
            <h2 id="board-heading">One board. Every agent. Every status. Live.</h2>
            <p className="max-w-2xl mx-auto">
              The BatonBot board gives you a single visual surface for orchestration —
              drop cards from the agent palette, reorder the queue, and watch live state
              stream in over SSE as each task moves from{' '}
              <code className="text-teal text-code-xs font-mono">pending</code> →{' '}
              <code className="text-accent-light text-code-xs font-mono">in_progress</code> →{' '}
              <code className="text-success text-code-xs font-mono">done</code>.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Glow */}
            <div className="absolute -inset-6 bg-accent-glow rounded-3xl blur-3xl opacity-30 pointer-events-none" />

            <div className="relative rounded-2xl border border-border bg-background-tertiary p-2 shadow-card-hover overflow-hidden">
              <img
                src={SCREENSHOT_URL}
                alt="Screenshot of the BatonBot Kanban board showing Pending, Queue, and Completed columns with agent-assigned tasks running in real time"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl block"
              />
            </div>

            {/* Caption strip */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
              <CaptionPill label="Kanban Board" value="Pending · Queue · Completed" />
              <CaptionPill label="Pipeline View" value="Linear editor alternative" />
              <CaptionPill label="Controls" value="Play · Pause · Cancel" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CaptionPill({ label, value }) {
  return (
    <div className="rounded-xl border border-border bg-background-primary/60 px-4 py-3">
      <p className="text-label-xs text-text-tertiary uppercase tracking-wider mb-1">{label}</p>
      <p className="text-body-sm text-text-primary">{value}</p>
    </div>
  );
}
