import React from 'react';
import { ArrowUpIcon } from 'lucide-react';

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Stack',      href: '#tech' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t themed-border themed-bg" style={{ borderColor: 'var(--color-divider)' }}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg text-paper">
          B<span className="text-amber">.</span>
        </span>

        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-muted hover:text-paper transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <p className="text-xs font-mono text-muted">© {year} Bamlake Feleke</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 flex items-center justify-center border border-muted/25 rounded-sm text-muted hover:border-amber hover:text-amber transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
