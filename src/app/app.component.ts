import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="noise-bg"></div>
    <div class="cursor" [style.left.px]="cursorX" [style.top.px]="cursorY"></div>
    <div class="cursor-follower" [style.left.px]="followerX - 16" [style.top.px]="followerY - 16"></div>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-left">
          <span class="footer-logo">
            <span class="footer-bracket">[</span>dev<span class="footer-bracket">]</span>
          </span>
          <span class="footer-tagline">UI Developer · Chennai, India</span>
        </div>
        <nav class="footer-links">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
          <a href="/assets/resume.html" target="_blank">resume</a>
        </nav>
        <div class="footer-social">
          <a href="https://github.com/ashlinbijo31" target="_blank" class="social-link">GitHub</a>
          <a href="https://linkedin.com/in/ashlin-bijo-4146b725a" target="_blank" class="social-link">LinkedIn</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span class="footer-copy">© {{ year }} Ashlin Bijo G · All rights reserved</span>
        <span class="footer-built">Built with <span class="built-accent">Angular 17</span></span>
      </div>
    </footer>
  `,
  styles: [`
    main { position: relative; z-index: 1; }

    .footer {
      border-top: 1px solid var(--border);
      position: relative;
      z-index: 1;
      padding: 48px 0 28px;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: var(--gradient);
      opacity: 0.4;
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      flex-wrap: wrap;
      gap: 24px;
    }

    .footer-left {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .footer-logo {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .footer-bracket {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-tagline {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
      letter-spacing: 0.1em;
    }

    .footer-links {
      display: flex;
      gap: 28px;
      flex-wrap: wrap;
    }

    .footer-links a {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-secondary);
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: color var(--transition);

      &:hover { color: var(--accent); }
    }

    .footer-social {
      display: flex;
      gap: 16px;
    }

    .social-link {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
      text-decoration: none;
      border: 1px solid var(--border);
      padding: 6px 14px;
      transition: all var(--transition);

      &:hover {
        color: var(--accent);
        border-color: rgba(0, 212, 255, 0.4);
      }
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 24px;
      border-top: 1px solid var(--border);
    }

    .footer-copy {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
    }

    .footer-built {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
    }

    .built-accent {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 768px) {
      .footer-inner { flex-direction: column; gap: 20px; }
      .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
      .footer-links { gap: 16px; }
    }
  `]
})
export class AppComponent implements OnInit, AfterViewInit {
  cursorX = 0;
  cursorY = 0;
  followerX = 0;
  followerY = 0;
  year = new Date().getFullYear();

  ngOnInit() {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    document.querySelectorAll('section:not(#home)').forEach(section => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX - 4;
    this.cursorY = e.clientY - 4;
    setTimeout(() => {
      this.followerX = e.clientX;
      this.followerY = e.clientY;
    }, 80);
  }
}