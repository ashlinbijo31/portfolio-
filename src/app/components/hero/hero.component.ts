import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <div class="hero-grid"></div>
      <div class="hero-glow"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="container hero-content">
        <div class="hero-label">
          <span class="status-dot"></span>
          <span>available for work &middot; Chennai, India</span>
        </div>
        <h1 class="hero-title">
          <span class="line line-name">Ashlin Bijo G</span>
          <span class="line line-2">Frontend<span class="accent-dot">.</span></span>
        </h1>
        <p class="hero-sub">
          UI Developer at <span class="highlight">Hotfoot Technology</span> &mdash;
          building precise, performant interfaces with
          <span class="highlight">Angular</span>, JavaScript &amp; modern web tech.
        </p>
        <div class="hero-cta">
          <a href="#projects" class="btn-primary">
            <span>view work</span>
            <span class="btn-arrow">&#8594;</span>
          </a>
          <a href="mailto:ashlinbijo31@gmail.com" class="btn-secondary">get in touch</a>
          <a href="/assets/resume.html" target="_blank" class="btn-resume">resume &#8599;</a>
        </div>
        <div class="hero-stats">
          <div class="stat" *ngFor="let stat of stats">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 80px 80px;
      opacity: 0.4;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
    }

    .hero-glow {
      position: absolute;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      background: radial-gradient(ellipse, rgba(0, 212, 255, 0.07) 0%, transparent 70%);
      top: 50%;
      left: 20%;
      transform: translate(-50%, -55%);
      pointer-events: none;
    }

    .hero-glow-2 {
      background: radial-gradient(ellipse, rgba(124, 111, 255, 0.05) 0%, transparent 70%);
      left: 50%;
      top: 70%;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      padding-top: 100px;
      padding-bottom: 60px;
    }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-secondary);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 36px;
      padding: 8px 18px;
      border: 1px solid var(--border);
      background: var(--bg-card);
      animation: fadeInUp 0.6s ease forwards;
      position: relative;
    }

    .hero-label::before {
      content: '';
      position: absolute;
      inset: -1px;
      background: var(--gradient);
      opacity: 0.3;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      padding: 1px;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #00ff88;
      animation: blink 2.5s infinite;
      flex-shrink: 0;
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      margin-bottom: 28px;
    }

    .line {
      display: block;
      font-family: var(--font-display);
      font-weight: 800;
      line-height: 0.95;
      letter-spacing: -0.04em;
    }

    .line-name {
      font-size: clamp(2.5rem, 6vw, 5.5rem);
      color: var(--text-secondary);
      font-weight: 400;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      animation: fadeInUp 0.6s ease 0.1s both;
    }

    .line-2 {
      font-size: clamp(4rem, 10vw, 9rem);
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: fadeInUp 0.6s ease 0.2s both;
    }

    .accent-dot {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-sub {
      font-family: var(--font-mono);
      font-size: 0.9rem;
      color: var(--text-secondary);
      max-width: 480px;
      line-height: 1.9;
      margin-bottom: 48px;
      animation: fadeInUp 0.6s ease 0.3s both;
    }

    .highlight { color: var(--accent); }

    .hero-cta {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 88px;
      animation: fadeInUp 0.6s ease 0.4s both;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--gradient);
      color: var(--bg-primary);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 700;
      padding: 14px 28px;
      letter-spacing: 0.05em;
      text-decoration: none;
      text-transform: lowercase;
      transition: all var(--transition);
      position: relative;
      overflow: hidden;
    }

    .btn-primary::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255,255,255,0.1);
      opacity: 0;
      transition: opacity var(--transition);
    }

    .btn-primary:hover::after { opacity: 1; }
    .btn-primary:hover .btn-arrow { transform: translateX(5px); }

    .btn-arrow {
      transition: transform var(--transition);
      display: inline-block;
    }

    .btn-secondary {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-secondary);
      text-decoration: none;
      letter-spacing: 0.05em;
      border-bottom: 1px solid var(--border);
      padding-bottom: 2px;
      transition: all var(--transition);
    }

    .btn-secondary:hover {
      color: var(--accent);
      border-color: var(--accent);
    }

    .btn-resume {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-muted);
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: color var(--transition);
    }

    .btn-resume:hover { color: var(--accent-purple); }

    .hero-stats {
      display: flex;
      gap: 64px;
      animation: fadeInUp 0.6s ease 0.5s both;
    }

    .stat { display: flex; flex-direction: column; gap: 4px; }

    .stat-number {
      font-family: var(--font-display);
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 48px;
      right: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      font-family: var(--font-mono);
      font-size: 0.6rem;
      color: var(--text-muted);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      writing-mode: vertical-lr;
      animation: fadeIn 1s ease 0.8s both;
    }

    .scroll-line {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, var(--accent), transparent);
    }

    @media (max-width: 768px) {
      .hero-content { padding-top: 90px; padding-bottom: 40px; }
      .hero-label { font-size: 0.6rem; padding: 6px 12px; margin-bottom: 24px; }
      .hero-sub { font-size: 0.8rem; margin-bottom: 32px; }
      .hero-cta { flex-wrap: wrap; gap: 14px; margin-bottom: 56px; }
      .btn-primary { width: 100%; justify-content: center; }
      .hero-stats { gap: 28px; }
      .stat-number { font-size: 2rem; }
      .scroll-indicator { display: none; }
    }
  `]
})
export class HeroComponent {
  stats = [
    { value: '3+', label: 'years exp.' },
    { value: '4+', label: 'projects' },
    { value: '2', label: 'companies' },
  ];
}