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

        <button class="hamburger" (click)="toggleMenu()" [class.open]="menuOpen" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-menu" [class.open]="menuOpen">
      <div class="mobile-menu-inner">
        <ul class="mobile-links">
          <li *ngFor="let link of links; let i = index">
            <a [href]="link.href" class="mobile-link" (click)="closeMenu()">
              <span class="mobile-index">0{{i+1}}.</span>
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="mobile-actions">
          <a href="/assets/resume.html" target="_blank" class="mobile-resume" (click)="closeMenu()">
            resume &#8599;
          </a>
          <a href="#contact" class="mobile-cta" (click)="closeMenu()">hire me</a>
        </div>
      </div>
    </div>

    <div class="menu-overlay" [class.open]="menuOpen" (click)="closeMenu()"></div>
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
      gap: 16px;
    }

    .logo {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      text-decoration: none;
      transition: opacity var(--transition);
      flex-shrink: 0;
      &:hover { opacity: 0.8; }
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
      &:hover { color: var(--text-primary); }
    }

    .nav-index {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 0.65rem;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 20px;
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
      white-space: nowrap;
      &:hover {
        background: var(--accent);
        color: var(--bg-primary);
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.25);
      }
    }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px;
      height: 36px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      z-index: 300;

      span {
        display: block;
        width: 22px;
        height: 1.5px;
        background: var(--text-primary);
        transition: all 0.3s ease;
        transform-origin: center;
      }

      &.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
      &.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      &.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
    }

    /* Mobile menu drawer */
    .mobile-menu {
      position: fixed;
      top: 0; right: 0;
      width: 280px;
      height: 100vh;
      background: var(--bg-card);
      border-left: 1px solid var(--border);
      z-index: 250;
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 90px 32px 40px;
      display: flex;
      flex-direction: column;

      &.open { transform: translateX(0); }
    }

    .mobile-menu-inner {
      display: flex;
      flex-direction: column;
      gap: 40px;
      height: 100%;
    }

    .mobile-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .mobile-link {
      font-family: var(--font-display);
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--text-secondary);
      text-decoration: none;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid var(--border);
      transition: color var(--transition);

      &:hover { color: var(--text-primary); }
    }

    .mobile-index {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 400;
    }

    .mobile-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: auto;
    }

    .mobile-cta {
      display: block;
      text-align: center;
      background: var(--gradient);
      color: var(--bg-primary);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 700;
      padding: 14px 24px;
      text-decoration: none;
      letter-spacing: 0.1em;
    }

    .mobile-resume {
      display: block;
      text-align: center;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-decoration: none;
      padding: 12px 24px;
      border: 1px solid var(--border);
      letter-spacing: 0.05em;
      transition: all var(--transition);
      &:hover { border-color: var(--accent); color: var(--accent); }
    }

    /* Overlay */
    .menu-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(4px);
      z-index: 240;
      opacity: 0;
      transition: opacity 0.35s ease;

      &.open { opacity: 1; }
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-actions { display: none; }
      .hamburger { display: flex; }
      .menu-overlay { display: block; }
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