export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/mdoty4/batonbot',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0C4.47 0 0 4.47 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48
                   0-.24-.01-1.07-.01-1.92-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47
                   -.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.33 1.09
                   2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94
                   0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27
                   2.75 1.02A9.56 9.56 0 0110 5.1c.69 0 1.39.09 2.05.27
                   1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64
                   .64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.94
                   .36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75
                   0 .27.18.59.69.48A10.01 10.01 0 0020 10c0-5.53-4.47-10-10-10z" />
        </svg>
      ),
    },
    {
      label: 'Twitter / X',
      href: 'https://x.com/micdoty',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M19 5.5s-.75-.25-1.5.125c-.625.3125-1.375.75-2.5 1.875
                   C13.5 6 12.75 5.375 11.625 5.375c-1.5 0-2.625 1.125-2.625 2.625
                   0 .25.031.469.125.687C6.875 8.375 4.375 6.75 2.875 4.375
                   2.625 4.875 2.5 5.437 2.5 6.062c0 1 .5 1.875 1.25 2.375
                   -.312 0-.625-.063-.938-.187v.062c0 1.438 1 2.625 2.313 2.938
                   -.25.063-.469.094-.719.094-.187 0-.344-.031-.5-.063.344 1.063
                   1.313 1.844 2.438 1.875C4.063 13.375 2.063 12.25 1.125 10.5
                   1.031 10.594 1 10.719 1 10.875c0 2.063 1.469 3.75 3.406 4.125
                   -.344.094-.719.156-1.094.156-.25 0-.5-.031-.719-.063C2.156 16.875
                   4.156 18 6.406 18 12.063 18 15.5 13.563 15.5 9.563v-1.125
                   c.625-.5 1.125-1.125 1.5-1.75.438-.688.688-1.375.688-1.625
                   0-.063 0-.125-.031-.188z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative z-[1] border-t border-border bg-background-secondary">
      <div className="max-w-page mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Left Column — Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 text-text-primary font-bold text-card-md tracking-tight mb-3">
              <img
                src="/logo.png"
                alt="Batonbot"
                className="h-8 w-auto"
              />
              Batonbot
            </a>
            <p className="text-body-sm text-text-secondary max-w-xs">
              Local AI agents that complete real work.
            </p>
          </div>

          {/* Center Column — Links */}
          <nav className="flex flex-col gap-3 md:items-center">
            <a href="#features" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
              How It Works
            </a>
            <a href="#installation" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
              Installation
            </a>
            <a href="https://github.com/mdoty4/batonbot" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors">
              GitHub
            </a>
          </nav>

          {/* Right Column — Social */}
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

        {/* Cross-Platform Messaging Banner */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-body-sm text-text-secondary">
                <span className="text-text-primary font-medium">Built for macOS.</span> Cross-platform support for Windows and Linux is on the horizon.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-label-xs text-text-tertiary">
              © {currentYear} Batonbot. Local-first. Developer-built.
            </p>
            <p className="text-label-xs text-text-tertiary">
              You call the shots. Your agents do the rest.
            </p>
        </div>
      </div>
    </footer>
  );
}