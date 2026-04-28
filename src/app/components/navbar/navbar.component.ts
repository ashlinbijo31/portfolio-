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

        <div class="nav-actions">
          <a href="/assets/resume.html" target="_blank" class="nav-resume">resume</a>
          <a href="#contact" class="nav-cta">hire me</a>
        </div>

        <button class="hamburger" (click)="toggleMenu()" [class.is-open]="menuOpen" aria-label="Menu">
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>
    </nav>

    <div class="mobile-drawer" [class.is-open]="menuOpen">
      <ul class="mobile-links">
        <li *ngFor="let link of links; let i = index">
          <a [href]="link.href" class="mobile-link" (click)="closeMenu()">
            <span class="mobile-index">0{{i+1}}.</span>
            {{ link.label }}
          </a>
        </li>
      </ul>
      <div class="mobile-bottom">
        <a href="/assets/resume.html" target="_blank" class="mobile-resume-btn" (click)="closeMenu()">resume &#8599;</a>
        <a href="#contact" class="mobile-cta-btn" (click)="closeMenu()">hire me</a>
      </div>
    </div>

    <div class="overlay" [class.is-open]="menuOpen" (click)="closeMenu()"></div>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 200;
      padding: 24px 0;
      transition: all var(--transition);
    }
    .navbar.scrolled {
      padding: 16px 0;
      background: rgba(10, 10, 18, 0.95);
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
    }
    .nav-link:hover { color: var(--text-primary); }
    .nav-index {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 0.65rem;
    }
    .nav-actions { display: flex; align-items: center; gap: 20px; }
    .nav-resume {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
      text-decoration: none;
      letter-spacing: 0.08em;
      transition: color var(--transition);
    }
    .nav-resume:hover { color: var(--accent-purple); }
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
      white-space: nowrap;
    }
    .nav-cta:hover {
      background: var(--accent);
      color: var(--bg-primary);
      border-color: var(--accent);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.25);
    }

    /* ── Hamburger ── */
    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      padding: 6px;
      flex-shrink: 0;
      z-index: 300;
      cursor: pointer !important;
    }
    .bar {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--text-primary);
      transition: transform 0.3s ease, opacity 0.3s ease;
      transform-origin: center;
    }
    .hamburger.is-open .bar-1 { transform: translateY(7px) rotate(45deg); }
    .hamburger.is-open .bar-2 { opacity: 0; transform: scaleX(0); }
    .hamburger.is-open .bar-3 { transform: translateY(-7px) rotate(-45deg); }

    /* ── Mobile drawer ── */
    .mobile-drawer {
      position: fixed;
      top: 0; right: 0;
      width: 75vw;
      max-width: 300px;
      height: 100dvh;
      background: var(--bg-card);
      border-left: 1px solid var(--border);
      z-index: 250;
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 88px 28px 36px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    .mobile-drawer.is-open { transform: translateX(0); }

    .mobile-links {
      list-style: none;
      display: flex;
      flex-direction: column;
    }
    .mobile-link {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-secondary);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 0;
      border-bottom: 1px solid var(--border);
      transition: color var(--transition);
      letter-spacing: -0.02em;
    }
    .mobile-link:hover { color: var(--text-primary); }
    .mobile-index {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 400;
    }
    .mobile-bottom {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: auto;
    }
    .mobile-cta-btn {
      display: block;
      text-align: center;
      background: var(--gradient);
      color: var(--bg-primary);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 700;
      padding: 14px;
      text-decoration: none;
      letter-spacing: 0.08em;
    }
    .mobile-resume-btn {
      display: block;
      text-align: center;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-decoration: none;
      padding: 12px;
      border: 1px solid var(--border);
      letter-spacing: 0.05em;
      transition: all var(--transition);
    }
    .mobile-resume-btn:hover { border-color: var(--accent); color: var(--accent); }

    /* ── Overlay ── */
    .overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(3px);
      z-index: 240;
      opacity: 0;
      transition: opacity 0.35s ease;
      cursor: pointer !important;
    }
    .overlay.is-open { opacity: 1; }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-actions { display: none; }
      .hamburger { display: flex; }
      .overlay { display: block; }
    }
  `]
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  links = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ];

  ngOnInit() {}
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 50; }
}