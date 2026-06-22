export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/mdoty4/batonbot?ref=splash',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 0C4.47 0 0 4.47 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.07-.01-1.92-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.33 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 5.1c.69 0 1.39.09 2.05.27 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48A10.01 10.01 0 0020 10c0-5.53-4.47-10-10-10z" />
        </svg>
      ),
    },
    {
      label: 'X / Twitter',
      href: 'https://x.com/micdoty',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M15.3 2H18l-6.2 7.1L19 18h-5.7l-4.4-5.8L3.7 18H1l6.6-7.6L1 2h5.8l4 5.3L15.3 2zm-2 14.4h1.6L6.8 3.5H5.1l8.2 12.9z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative z-[1] border-t border-border bg-background-secondary">
      <div className="max-w-page mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 text-text-primary font-bold text-card-md tracking-tight mb-3">
              <img src="/logo.png" alt="" className="h-8 w-auto" width="32" height="32" />
              BatonBot
            </a>
            <p className="text-body-sm text-text-secondary max-w-xs mb-4">
              The visual orchestrator for AI agent pipelines.
              Built to free you from your computer — by making your computer work for you.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href="https://github.com/mdoty4/batonbot/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border border-border text-text-tertiary hover:text-text-primary hover:border-border-accent transition-colors"
              >
                MIT License
              </a>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border border-border text-text-tertiary">
                Local-First
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border border-border text-text-tertiary">
                Open Source
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3 md:items-center" aria-label="Footer navigation">
            <a href="#features" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">Why BatonBot</a>
            <a href="#board" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">The Board</a>
            <a href="#integrations" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">Integrations</a>
            <a href="#installation" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">Installation</a>
            <a href="#roadmap" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">Roadmap</a>
            <a href="https://github.com/mdoty4/batonbot?ref=splash" target="_blank" rel="noopener noreferrer" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">GitHub</a>
          </nav>

          {/* Social */}
          <div className="flex md:justify-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background-tertiary border border-border flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-accent transition-all duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cross-Platform Banner */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-body-sm text-text-secondary">
                <span className="text-text-primary font-medium">Cross-platform.</span> Runs natively on macOS, Linux, and Windows (or WSL2). Docker-ready.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-label-xs text-text-tertiary">
            © {currentYear} BatonBot · Built by{' '}
            <a href="https://github.com/mdoty4" target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">Michael Doty</a>.
          </p>
          <p className="text-label-xs text-text-tertiary">
            You design the sequence. Your agents do the rest.
          </p>
        </div>
      </div>
    </footer>
  );
}
