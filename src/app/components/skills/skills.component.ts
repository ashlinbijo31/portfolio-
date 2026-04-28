import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills" id="skills">
      <div class="container">
        <p class="section-label">expertise</p>
        <h2 class="skills-title">What I work with</h2>
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let cat of categories">
            <div class="cat-header">
              <span class="cat-icon">{{ cat.icon }}</span>
              <h3 class="cat-title">{{ cat.title }}</h3>
            </div>
            <div class="skill-tags">
              <span class="skill-tag" *ngFor="let skill of cat.skills">{{ skill }}</span>
            </div>
          </div>
        </div>
        <div class="tools-row">
          <span class="tools-label">// also fluent in</span>
          <div class="tools-list">
            <span class="tool" *ngFor="let tool of tools">{{ tool }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills { border-top: 1px solid var(--border); }

    .skills-title {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 56px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      margin-bottom: 48px;
    }

    .skill-category {
      background: var(--bg-primary);
      padding: 40px 32px;
      transition: background var(--transition);
      position: relative;
    }

    .skill-category::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: var(--gradient);
      opacity: 0;
      transition: opacity var(--transition);
    }

    .skill-category:hover { background: var(--bg-card); }
    .skill-category:hover::before { opacity: 1; }

    .cat-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }

    .cat-icon {
      font-size: 1.4rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .cat-title {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }

    .skill-tag {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-secondary);
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      padding: 6px 12px;
      letter-spacing: 0.04em;
      transition: all var(--transition);
    }

    .skill-tag:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: var(--accent-dim);
      box-shadow: 0 0 12px rgba(0, 212, 255, 0.1);
    }

    .tools-row {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 24px 0;
      border-top: 1px solid var(--border);
    }

    .tools-label {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .tools-list { display: flex; flex-wrap: wrap; gap: 8px; }

    .tool {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-muted);
      letter-spacing: 0.05em;
      transition: color var(--transition);
    }

    .tool:hover { color: var(--text-secondary); }

    .tool:not(:last-child)::after {
      content: '/';
      margin-left: 8px;
      opacity: 0.3;
    }

    @media (max-width: 768px) {
      .skills-title { font-size: clamp(1.8rem, 7vw, 2.5rem); margin-bottom: 32px; }
      .skills-grid { grid-template-columns: 1fr; }
      .skill-category { padding: 28px 20px; }
      .tools-row { flex-direction: column; align-items: flex-start; gap: 14px; }
    }
  `]
})
export class SkillsComponent {
  categories = [
    {
      icon: '◈',
      title: 'Frontend',
      skills: ['Angular', 'JavaScript', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      icon: '◉',
      title: 'CMS & Design',
      skills: ['WordPress', 'Elementor', 'Bootstrap', 'Responsive Design', 'Cross-browser']
    },
    {
      icon: '◌',
      title: 'APIs & Tools',
      skills: ['RESTful APIs', 'JSON', 'XML', 'Git', 'SEO', 'Performance Tuning']
    }
  ];

  tools = ['C', 'C++', 'Python', 'Keyword Research', 'On-page SEO', 'CIF Systems', 'Debugging'];
}