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
            <a [href]="link.href" class="nav-link">
              <span class="nav-index">0{{i+1}}.</span>
              {{ link.label }}
            </a>
          </li>
        </ul>
        <a href="/assets/resume.html" target="_blank" class="nav-resume">resume</a>
        <a href="#contact" class="nav-cta">hire me</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 24px 0;
      transition: all var(--transition);
    }

    .navbar.scrolled {
      padding: 16px 0;
      background: rgba(10, 10, 18, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 1px 0 0 rgba(0, 212, 255, 0.08);
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      text-decoration: none;
      transition: opacity var(--transition);

      &:hover { opacity: 0.8; }
    }

    .logo-bracket {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-text {
      color: var(--text-primary);
      margin: 0 2px;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 40px;
    }

    .nav-link {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color var(--transition);
      display: flex;
      align-items: center;
      gap: 6px;
      letter-spacing: 0.05em;

      &:hover {
        color: var(--text-primary);
      }
    }

    .nav-index {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 0.65rem;
    }

    .nav-resume {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
      text-decoration: none;
      letter-spacing: 0.08em;
      transition: color var(--transition);

      &:hover { color: var(--accent-purple); }
    }

    .nav-cta {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--accent);
      border: 1px solid rgba(0, 212, 255, 0.4);
      padding: 8px 20px;
      text-decoration: none;
      letter-spacing: 0.1em;
      text-transform: lowercase;
      transition: all var(--transition);
      position: relative;

      &:hover {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.25);
      }
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
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
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}