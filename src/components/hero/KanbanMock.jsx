import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * KanbanMock - Animated faux of the BatonBot board UI.
 * Three columns: Pending → Queue (in-progress) → Completed.
 * Agent-labeled cards cycle across the board to demonstrate orchestration.
 */

const AGENT_STYLES = {
  'baton-code':         { dot: 'bg-accent',  text: 'text-accent-light',  ring: 'ring-accent/40' },
  'baton-code-thinking':{ dot: 'bg-accent',  text: 'text-accent-light',  ring: 'ring-accent/40' },
  aider:                { dot: 'bg-teal',    text: 'text-teal-light',    ring: 'ring-teal/40' },
  cline:                { dot: 'bg-success', text: 'text-success',       ring: 'ring-success/40' },
  telegram:             { dot: 'bg-warning', text: 'text-warning',       ring: 'ring-warning/40' },
};

const INITIAL_TASKS = [
  { id: 't1', title: 'Plan refactor of auth module',     agent: 'baton-code-thinking' },
  { id: 't2', title: 'Implement OAuth callback',         agent: 'cline' },
  { id: 't3', title: 'Refactor session store',           agent: 'aider' },
  { id: 't4', title: 'Notify team on rollout',           agent: 'telegram' },
  { id: 't5', title: 'Write integration tests',          agent: 'baton-code' },
];

const STATE = { PENDING: 'pending', QUEUE: 'queue', DONE: 'done' };

function StatusPill({ state }) {
  const cfg = {
    [STATE.PENDING]: { label: 'pending',     cls: 'bg-background-elevated text-text-tertiary border-border' },
    [STATE.QUEUE]:   { label: 'in_progress', cls: 'bg-accent-glow text-accent-light border-accent/40' },
    [STATE.DONE]:    { label: 'done',        cls: 'bg-teal-glow text-teal-light border-teal/40' },
  }[state];
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md border text-[10px] font-mono ${cfg.cls}`}>
      {state === STATE.QUEUE && <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />}
      {state === STATE.DONE && (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <path d="M1.5 4L3.5 6L6.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {cfg.label}
    </span>
  );
}

function TaskCard({ task, state }) {
  const style = AGENT_STYLES[task.agent] || AGENT_STYLES['baton-code'];
  return (
    <motion.div
      layout
      layoutId={task.id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className={`group bg-background-elevated border border-border rounded-lg p-2.5 mb-2 last:mb-0 ring-1 ring-transparent hover:${style.ring}`}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          <span className={`text-[10px] font-mono ${style.text} truncate`}>{task.agent}</span>
        </div>
        <StatusPill state={state} />
      </div>
      <p className="text-[11px] text-text-primary leading-snug line-clamp-2">{task.title}</p>
    </motion.div>
  );
}

function Column({ title, count, accent, children }) {
  return (
    <div className="flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${accent}`} />
          <span className="text-label-xs text-text-secondary uppercase tracking-wider">{title}</span>
        </div>
        <span className="text-[10px] font-mono text-text-tertiary">{count}</span>
      </div>
      <div className="bg-background-secondary/60 border border-border rounded-xl p-2 h-[360px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export function KanbanMock() {
  const reducedMotion = useReducedMotion();
  // states[taskId] = STATE
  const [states, setStates] = useState(() =>
    Object.fromEntries(INITIAL_TASKS.map((t) => [t.id, STATE.PENDING]))
  );
  const [running, setRunning] = useState(true);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef(null);

  const reset = useCallback(() => {
    setStates(Object.fromEntries(INITIAL_TASKS.map((t) => [t.id, STATE.PENDING])));
  }, []);

  const runCycle = useCallback(() => {
    // Sequence: pending → queue → done, one task at a time
    const order = INITIAL_TASKS.map((t) => t.id);
    let step = 0;
    const tick = () => {
      const taskIndex = Math.floor(step / 2);
      const phase = step % 2; // 0 = enter queue, 1 = mark done
      if (taskIndex >= order.length) {
        timerRef.current = setTimeout(() => {
          reset();
          setCycle((c) => c + 1);
        }, 1800);
        return;
      }
      const id = order[taskIndex];
      setStates((prev) => ({
        ...prev,
        [id]: phase === 0 ? STATE.QUEUE : STATE.DONE,
      }));
      step++;
      timerRef.current = setTimeout(tick, phase === 0 ? 1100 : 900);
    };
    tick();
  }, [reset]);

  useEffect(() => {
    if (reducedMotion || !running) return;
    runCycle();
    return () => clearTimeout(timerRef.current);
  }, [runCycle, cycle, running, reducedMotion]);

  const pending   = INITIAL_TASKS.filter((t) => states[t.id] === STATE.PENDING);
  const queue     = INITIAL_TASKS.filter((t) => states[t.id] === STATE.QUEUE);
  const completed = INITIAL_TASKS.filter((t) => states[t.id] === STATE.DONE);

  const handleReplay = () => {
    clearTimeout(timerRef.current);
    reset();
    setCycle((c) => c + 1);
    setRunning(true);
  };

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-4 bg-accent-glow rounded-2xl blur-3xl opacity-40 pointer-events-none" />

      <div
        className="relative card p-4 sm:p-5"
        role="img"
        aria-label="BatonBot Kanban board demo: tasks move from Pending to Queue (in_progress) to Completed, each routed to a different agent (baton-code, aider, cline, telegram)."
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-3 h-3 rounded-full bg-error/70" />
            <span className="w-3 h-3 rounded-full bg-warning/70" />
            <span className="w-3 h-3 rounded-full bg-success/70" />
            <span className="ml-3 text-label-xs text-text-tertiary font-mono truncate">batonbot.board · auth-rollout</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleReplay}
              className="text-text-tertiary hover:text-text-primary transition-colors text-label-xs font-mono flex items-center gap-1 px-2 py-1 rounded hover:bg-background-elevated"
              aria-label="Replay board animation"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M10 2V5H7L5 3C7.5 1 10.5 1.5 10 2Z" fill="currentColor"/>
                <path d="M2 10V7H5L7 9C4.5 11 1.5 10.5 2 10Z" fill="currentColor"/>
              </svg>
              Replay
            </button>
          </div>
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Column title="Pending" count={pending.length} accent="bg-text-tertiary">
            <AnimatePresence initial={false}>
              {pending.map((t) => <TaskCard key={t.id} task={t} state={STATE.PENDING} />)}
            </AnimatePresence>
          </Column>
          <Column title="Queue" count={queue.length} accent="bg-accent">
            <AnimatePresence initial={false}>
              {queue.map((t) => <TaskCard key={t.id} task={t} state={STATE.QUEUE} />)}
            </AnimatePresence>
          </Column>
          <Column title="Completed" count={completed.length} accent="bg-teal">
            <AnimatePresence initial={false}>
              {completed.map((t) => <TaskCard key={t.id} task={t} state={STATE.DONE} />)}
            </AnimatePresence>
          </Column>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-border">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-code-xs font-mono text-teal">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              SSE · live
            </span>
            <span className="text-code-xs font-mono text-text-tertiary">
              {completed.length}/{INITIAL_TASKS.length} done
            </span>
            {queue.length > 0 && (
              <span className="text-code-xs font-mono text-accent-light">· {queue.length} in_progress</span>
            )}
          </div>
          <span className="text-code-xs font-mono text-text-tertiary hidden sm:inline">
            ▶ start sequence
          </span>
        </div>
      </div>
    </div>
  );
}
