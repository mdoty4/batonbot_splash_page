import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// Pipeline task states
const PENDING = 'pending';
const RUNNING = 'running';
const DONE = 'done';

const pipelineTasks = [
  { id: 1, name: 'Research', icon: 'model' },
  { id: 2, name: 'Draft', icon: 'agent' },
  { id: 3, name: 'Review', icon: 'script' },
];

// Status badge component with animation
function StatusBadge({ status }) {
  const config = {
    [PENDING]: { color: 'border-border bg-background-secondary', dot: 'bg-text-tertiary', label: 'Pending' },
    [RUNNING]: { color: 'border-accent/50 bg-accent-glow', dot: 'bg-accent animate-pulse', label: 'Running' },
    [DONE]: { color: 'border-success/50 bg-teal-glow', dot: 'bg-success', label: 'Done' },
  };

  const { color, dot, label } = config[status];

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-label-xs font-medium ${color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </motion.span>
  );
}

// Single pipeline node
function PipelineNode({ task, status, isActive }) {
  const iconMap = {
    model: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    agent: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-teal">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 9L6 13M11.5 9L14 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    script: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-teal">
        <polygon points="6,4 20,12 6,20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  };

  const glowMap = {
    [PENDING]: 'bg-accent-glow',
    [RUNNING]: 'bg-accent-glow',
    [DONE]: 'bg-teal-glow',
  };

  const borderMap = {
    [PENDING]: 'border-border',
    [RUNNING]: 'border-accent/60',
    [DONE]: 'border-success/60',
  };

  return (
    <motion.div
      layout
      className={`bg-background-secondary ${borderMap[status]} border rounded-xl p-4 text-center transition-colors duration-300`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={`w-10 h-10 mx-auto mb-3 rounded-lg ${glowMap[status]} flex items-center justify-center`}
        animate={status === RUNNING ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{ duration: 1, repeat: status === RUNNING ? Infinity : 0 }}
      >
        {iconMap[task.icon]}
      </motion.div>
      <p className="text-label-xs text-text-tertiary uppercase tracking-wider mb-1">Node</p>
      <p className="text-body-sm text-text-primary font-medium">{task.name}</p>
      <div className="mt-3 flex justify-center">
        <StatusBadge status={status} />
      </div>
    </motion.div>
  );
}

// Animated connection arrow between nodes
function ConnectionArrow({ fromStatus, toStatus }) {
  const isActive = fromStatus === DONE && toStatus === RUNNING;
  const isReady = fromStatus === DONE && toStatus === PENDING;

  return (
    <div className="flex items-center justify-center gap-1">
      <motion.div
        className="h-px w-8 bg-border"
        animate={isActive || isReady ? {
          backgroundColor: isActive ? '#10B981' : '#8B5CF6',
        } : {}}
        transition={{ duration: 0.4 }}
      />
      <motion.svg
        width="16" height="16" viewBox="0 0 16 16" fill="none"
        animate={isActive ? {
          x: [0, 3, 0],
          color: '#10B981',
        } : isReady ? {
          color: '#8B5CF6',
        } : {
          color: '#737373',
        }}
        transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
      >
        <path d="M4 8H12M12 8L8 5M12 8L8 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
      <motion.div
        className="h-px w-8 bg-border"
        animate={isActive || isReady ? {
          backgroundColor: isActive ? '#10B981' : '#8B5CF6',
        } : {}}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export function HeroSection() {
  const [taskStates, setTaskStates] = useState(
    pipelineTasks.map(() => PENDING)
  );
  const [cycleCount, setCycleCount] = useState(0);

  const runPipeline = useCallback(() => {
    const totalSteps = pipelineTasks.length * 3; // Each task: pending→running→done
    let step = 0;

    const interval = setInterval(() => {
      if (step >= totalSteps) {
        clearInterval(interval);
        // Reset after a pause
        setTimeout(() => {
          setTaskStates(pipelineTasks.map(() => PENDING));
          setCycleCount(c => c + 1);
        }, 1500);
        return;
      }

      const taskIndex = Math.floor(step / 3);
      const phase = step % 3; // 0=pending, 1=running, 2=done

      setTaskStates(prev => {
        const next = [...prev];
        next[taskIndex] = [PENDING, RUNNING, DONE][phase];
        return next;
      });

      step++;
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Auto-start the animation
  useEffect(() => {
    const timer = setTimeout(runPipeline, 1000);
    return () => clearTimeout(timer);
  }, [runPipeline, cycleCount]);

  const doneCount = taskStates.filter(s => s === DONE).length;
  const runningCount = taskStates.filter(s => s === RUNNING).length;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 z-[1] overflow-hidden"
      aria-label="Introduction"
    >
      {/* Hero gradient glow */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="max-w-hero mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-narrow"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-background-tertiary"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-label-xs text-text-secondary uppercase tracking-widest">
                Local-First &middot; Agent-Powered
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-hero-xl text-text-primary mb-6"
            >
              BatonBot:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-teal">
                Orchestrate
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-teal">
                Your Life
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-body-base text-text-secondary mb-8 max-w-lg"
            >
              Describe any task to an AI agent, and trust that it will complete it — not just chat about it. Chain multiple agents together, in the exact order you choose, and watch real work get done.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a href="https://github.com/mdoty4/batonbot" className="btn-primary">
                Get Started
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://github.com/mdoty4/batonbot" className="btn-secondary">
                <svg className="mr-2 w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                   0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                   -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
                   2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                   0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
                   2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
                   2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82
                   2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07
                   -.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8
                   c0-4.42-3.58-8-8-8z"/>
                </svg>
                View on GitHub
              </a>
            </motion.div>

            {/* Installation Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <HeroInstallationSnippet />
            </motion.div>
          </motion.div>

          {/* Right: Pipeline Demo Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow behind the demo */}
            <div className="absolute -inset-4 bg-accent-glow rounded-2xl blur-3xl opacity-40 pointer-events-none" />

            <div
              className="relative card p-6 space-y-4"
              role="img"
              aria-label="Visual AI workflow editor for parallel pipeline orchestration: three-node workflow showing Research, Draft, and Review nodes with animated status badges transitioning from Pending to Running to Done"
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error/70" />
                  <span className="w-3 h-3 rounded-full bg-warning/70" />
                  <span className="w-3 h-3 rounded-full bg-success/70" />
                  <span className="ml-3 text-label-xs text-text-tertiary font-mono">batonbot.canvas</span>
                </div>
                {/* Replay button */}
                <button
                  onClick={runPipeline}
                  className="text-text-tertiary hover:text-text-primary transition-colors text-label-xs font-mono flex items-center gap-1.5 px-2 py-1 rounded hover:bg-background-elevated"
                  aria-label="Replay pipeline animation"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 2V5H7L5 3C7.5 1 10.5 1.5 10 2Z" fill="currentColor"/>
                    <path d="M2 10V7H5L7 9C4.5 11 1.5 10.5 2 10Z" fill="currentColor"/>
                  </svg>
                  Replay
                </button>
              </div>

              {/* Pipeline Visualization */}
              <div className="grid grid-cols-3 gap-3">
                {pipelineTasks.map((task, index) => (
                  <PipelineNode
                    key={task.id}
                    task={task}
                    status={taskStates[index]}
                    isActive={taskStates[index] === RUNNING}
                  />
                ))}
              </div>

              {/* Connection Lines with animated arrows */}
              <div className="flex items-center justify-center gap-4">
                <ConnectionArrow fromStatus={taskStates[0]} toStatus={taskStates[1]} />
                <ConnectionArrow fromStatus={taskStates[1]} toStatus={taskStates[2]} />
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span className="text-code-xs text-teal font-mono">
                    {doneCount}/{pipelineTasks.length} completed
                  </span>
                  {runningCount > 0 && (
                    <span className="text-code-xs text-accent font-mono">
                      · {runningCount} running
                    </span>
                  )}
                </div>
                <motion.span
                  key={`${cycleCount}-${doneCount}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-code-xs font-mono"
                  style={{
                    color: doneCount === pipelineTasks.length ? '#10B981' : '#737373',
                  }}
                >
                  pipeline: {doneCount === pipelineTasks.length ? 'complete' : runningCount > 0 ? 'running' : 'ready'}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Installation snippet with copy-to-clipboard (hero version)
function HeroInstallationSnippet() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('git clone https://github.com/mdoty4/batonbot.git && cd batonbot && npm install');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inline-flex items-center gap-3 bg-background-secondary border border-border rounded-code px-4 py-3 shadow-code-block group">
      <span className="text-teal text-code-xs font-mono">$</span>
      <code className="text-text-primary text-code-xs font-mono">
        git clone https://github.com/mdoty4/batonbot.git && cd batonbot && npm install
      </code>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCopy}
        className={`transition-colors ml-2 ${copied ? 'text-teal' : 'text-text-tertiary hover:text-text-primary'}`}
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7L6 10L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M10 4V2.5A1.5 1.5 0 008.5 1h-6A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        )}
      </motion.button>
      {/* Copy feedback tooltip */}
      {copied && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-label-xs text-teal font-medium -ml-2"
        >
          Copied!
        </motion.span>
      )}
    </div>
  );
}