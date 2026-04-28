import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="container nav-inner">
        <a href="#" class="logo">
          <span class="logo-bracket">[</span>
          <span class="logo-text">dev</span>
          <span class="logo-bracket">]</span>
        </a>
        <ul class="nav-links">
          <li *ngFor="let link of links; let i = index">
            <a [href]="link.href" class="nav-link">{{ link.label }}</a>
          </li>
        </ul>
        <a href="#contact" class="nav-cta">hire me</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 200;
      padding: 20px 0;
      transition: all var(--transition);
    }
    .navbar.scrolled {
      padding: 12px 0;
      background: rgba(10, 10, 18, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .logo {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      text-decoration: none;
      flex-shrink: 0;
    }
    .logo-bracket {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .logo-text { color: var(--text-primary); margin: 0 2px; }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 28px;
      flex-wrap: nowrap;
    }
    .nav-link {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: color var(--transition);
      white-space: nowrap;
    }
    .nav-link:hover { color: var(--text-primary); }

    .nav-cta {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
      border: 1px solid rgba(0, 212, 255, 0.4);
      padding: 7px 16px;
      text-decoration: none;
      letter-spacing: 0.08em;
      text-transform: lowercase;
      transition: all var(--transition);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .nav-cta:hover {
      background: var(--accent);
      color: var(--bg-primary);
      border-color: var(--accent);
    }

    @media (max-width: 600px) {
      .nav-inner { gap: 8px; }
      .nav-links { gap: 14px; }
      .nav-link { font-size: 0.62rem; letter-spacing: 0; }
      .logo { font-size: 0.95rem; }
      .nav-cta { font-size: 0.62rem; padding: 6px 10px; letter-spacing: 0; }
    }

    @media (max-width: 380px) {
      .nav-links { gap: 10px; }
      .nav-link { font-size: 0.58rem; }
      .nav-cta { display: none; }
    }
  `]
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  links = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 50; }
}