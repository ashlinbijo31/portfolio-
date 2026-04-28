import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-left">
            <p class="section-label">about me</p>
            <h2 class="about-title">
              I turn ideas into<br>
              <em>living interfaces.</em>
            </h2>
            <div class="about-text">
              <p>
                I'm a <em>UI Developer</em> currently at Hotfoot Technology Solutions,
                Chennai &mdash; building complex banking platforms and dashboards with
                JavaScript, AJAX, and Angular.
              </p>
              <p>
                My work spans from integrating multi-CIF banking systems to crafting
                WordPress e-commerce experiences. I care about code quality,
                performance, and interactions that just <em>feel right</em>.
              </p>
              <p>
                Pursuing my MCA from Madras University while sharpening my Angular
                skills daily. Always exploring new tools and pushing what the web can do.
              </p>
            </div>
            <a href="mailto:ashlinbijo31@gmail.com" class="about-cta">
              <span>let's work together</span>
              <span class="cta-arrow">&#8599;</span>
            </a>
          </div>

          <div class="about-right">
            <div class="about-card">
              <div class="card-header">
                <span class="card-dot"></span>
                <span class="card-dot"></span>
                <span class="card-dot"></span>
                <span class="card-filename">ashlin.json</span>
              </div>
              <pre class="card-code"><span class="code-brace">&#123;</span>
  <span class="code-key">"name"</span><span class="code-colon">:</span> <span class="code-str">"Ashlin Bijo G"</span><span class="code-comma">,</span>
  <span class="code-key">"role"</span><span class="code-colon">:</span> <span class="code-str">"UI / Frontend Developer"</span><span class="code-comma">,</span>
  <span class="code-key">"location"</span><span class="code-colon">:</span> <span class="code-str">"Chennai, India"</span><span class="code-comma">,</span>
  <span class="code-key">"available"</span><span class="code-colon">:</span> <span class="code-bool">true</span><span class="code-comma">,</span>
  <span class="code-key">"stack"</span><span class="code-colon">:</span> <span class="code-bracket">[</span>
    <span class="code-str">"Angular"</span><span class="code-comma">,</span> <span class="code-str">"JavaScript"</span><span class="code-comma">,</span>
    <span class="code-str">"jQuery"</span><span class="code-comma">,</span> <span class="code-str">"AJAX"</span><span class="code-comma">,</span>
    <span class="code-str">"HTML5"</span><span class="code-comma">,</span> <span class="code-str">"CSS3"</span>
  <span class="code-bracket">]</span><span class="code-comma">,</span>
  <span class="code-key">"education"</span><span class="code-colon">:</span> <span class="code-str">"MCA &mdash; Madras University"</span><span class="code-comma">,</span>
  <span class="code-key">"email"</span><span class="code-colon">:</span> <span class="code-str">"ashlinbijo31&#64;gmail.com"</span>
<span class="code-brace">&#125;</span></pre>
            </div>

            <div class="timeline">
              <div class="timeline-item" *ngFor="let item of timeline">
                <div class="timeline-year">{{ item.year }}</div>
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-role">{{ item.role }}</div>
                  <div class="timeline-company">{{ item.company }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about { border-top: 1px solid var(--border); }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }

    .about-title {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin-bottom: 32px;
      color: var(--text-primary);
    }

    .about-title em {
      font-style: italic;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 400;
    }

    .about-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }

    .about-text p {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.9;
    }

    .about-text em {
      color: var(--text-primary);
      font-style: normal;
    }

    .about-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--accent);
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 212, 255, 0.4);
      padding-bottom: 4px;
      transition: all var(--transition);
    }

    .about-cta:hover { gap: 14px; }
    .cta-arrow { font-size: 1rem; }

    .about-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      margin-bottom: 32px;
      font-family: var(--font-mono);
      overflow: hidden;
      position: relative;
    }

    .about-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: var(--gradient);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--border);
    }

    .card-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--border-hover);
    }

    .card-dot:first-child { background: #ff5f57; }
    .card-dot:nth-child(2) { background: #febc2e; }
    .card-dot:nth-child(3) { background: #28c840; }

    .card-filename {
      font-size: 0.7rem;
      color: var(--text-muted);
      margin-left: 8px;
    }

    .card-code {
      padding: 20px 24px;
      font-size: 0.8rem;
      line-height: 2;
      white-space: pre-wrap;
    }

    .code-brace { color: var(--text-muted); }
    .code-bracket { color: var(--text-muted); }
    .code-comma { color: var(--text-muted); }
    .code-colon { color: var(--text-muted); margin: 0 4px; }
    .code-key { color: #7dd3fc; }
    .code-str { color: #86efac; }
    .code-bool {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .timeline { display: flex; flex-direction: column; }

    .timeline-item {
      display: grid;
      grid-template-columns: 52px 12px 1fr;
      gap: 16px;
      padding: 18px 0;
      border-bottom: 1px solid var(--border);
      align-items: center;
    }

    .timeline-item:last-child { border-bottom: none; }

    .timeline-year {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 0.05em;
      font-weight: 700;
    }

    .timeline-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--gradient);
      flex-shrink: 0;
    }

    .timeline-role {
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2px;
    }

    .timeline-company {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    @media (max-width: 768px) {
      .about-grid { grid-template-columns: 1fr; gap: 48px; }
    }
  `]
})
export class AboutComponent {
  timeline = [
    { year: '2023', role: 'UI Developer', company: 'Hotfoot Technology Solutions' },
    { year: '2022', role: 'Web Developer', company: 'Cube 45 E-commerce Services' },
    { year: '2022', role: 'BCA Graduate', company: 'DR.MGR University' },
  ];
}