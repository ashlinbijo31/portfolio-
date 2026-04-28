import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects" id="projects">
      <div class="container">
        <div class="projects-header">
          <div>
            <p class="section-label">work</p>
            <h2 class="projects-title">Selected Projects</h2>
          </div>
          <a href="https://github.com/ashlinbijo" target="_blank" class="all-work-link">
            view all on GitHub &#8599;
          </a>
        </div>

        <div class="projects-list">
          <article class="project-item" *ngFor="let project of projects; let i = index" [class.featured]="i === 0">
            <div class="project-index">{{ (i + 1).toString().padStart(2, '0') }}</div>
            <div class="project-info">
              <div class="project-name-row">
                <h3 class="project-name">{{ project.name }}</h3>
                <span class="featured-badge" *ngIf="i === 0">featured</span>
              </div>
              <p class="project-desc">{{ project.desc }}</p>
              <div class="project-tags">
                <span class="project-tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>
            <div class="project-links">
              <a [href]="project.demo" target="_blank" class="project-link" *ngIf="project.demo && project.demo !== '#'">
                live &#8599;
              </a>
              <a [href]="project.github" target="_blank" class="project-link project-link-ghost" *ngIf="project.github">
                code &#8599;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects { border-top: 1px solid var(--border); }

    .projects-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 64px;
    }

    .projects-title { font-size: clamp(2rem, 4vw, 3rem); }

    .all-work-link {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-decoration: none;
      border-bottom: 1px solid var(--border);
      padding-bottom: 2px;
      transition: all var(--transition);
      margin-bottom: 8px;

      &:hover {
        color: var(--accent);
        border-color: var(--accent);
      }
    }

    .projects-list { display: flex; flex-direction: column; }

    .project-item {
      display: grid;
      grid-template-columns: 60px 1fr auto;
      gap: 32px;
      align-items: center;
      padding: 40px 0;
      border-bottom: 1px solid var(--border);
      transition: all var(--transition);
      position: relative;

      &:first-child { border-top: 1px solid var(--border); }

      &::before {
        content: '';
        position: absolute;
        left: -40px;
        top: 0; bottom: 0;
        width: 2px;
        background: var(--gradient);
        opacity: 0;
        transition: opacity var(--transition);
      }

      &:hover {
        padding-left: 12px;
        &::before { opacity: 1; }
        .project-name { color: var(--accent); }
        .project-index { color: var(--accent); }
      }
    }

    .project-item.featured {
      background: linear-gradient(90deg, rgba(0, 212, 255, 0.03) 0%, transparent 100%);
    }

    .project-index {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-muted);
      letter-spacing: 0.05em;
      transition: color var(--transition);
    }

    .project-name-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .project-name {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-primary);
      transition: color var(--transition);
    }

    .featured-badge {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3px 10px;
      background: var(--accent-dim);
      border: 1px solid rgba(0, 212, 255, 0.3);
      color: var(--accent);
    }

    .project-desc {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 16px;
      max-width: 540px;
    }

    .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }

    .project-tag {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 4px 10px;
      letter-spacing: 0.05em;
      transition: all var(--transition);

      &:hover {
        color: var(--accent-purple);
        border-color: rgba(124, 111, 255, 0.4);
      }
    }

    .project-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-end;
    }

    .project-link {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--bg-primary);
      background: var(--gradient);
      text-decoration: none;
      padding: 8px 16px;
      transition: all var(--transition);
      white-space: nowrap;

      &:hover {
        opacity: 0.85;
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.25);
      }
    }

    .project-link-ghost {
      background: transparent;
      color: var(--accent);
      border: 1px solid rgba(0, 212, 255, 0.35);

      &:hover {
        background: var(--accent-dim);
        box-shadow: 0 0 16px rgba(0, 212, 255, 0.15);
      }
    }

    @media (max-width: 768px) {
      .project-item { grid-template-columns: 40px 1fr; }
      .project-links { display: none; }
      .projects-header { flex-direction: column; gap: 16px; align-items: flex-start; }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Banking Dashboard Platform',
      desc: 'Comprehensive login and dashboard system for a banking client with secure authentication, loan calculator, funds transfer mechanism, and real-time API calculations.',
      tags: ['JavaScript', 'AJAX', 'jQuery', 'REST APIs', 'HTML5', 'CSS3'],
      demo: null,
      github: 'https://github.com/ashlinbijo'
    },
    {
      name: 'CIF Integration System',
      desc: 'Integrated multiple CIF systems using AJAX to improve data handling and user experience on a live banking platform with complex data flows.',
      tags: ['AJAX', 'JavaScript', 'JSON', 'XML', 'REST APIs'],
      demo: null,
      github: 'https://github.com/ashlinbijo'
    },
    {
      name: 'E-commerce WordPress Suite',
      desc: 'Customized and developed WordPress themes and plugins for an e-commerce platform, utilizing Elementor for layouts with mobile responsiveness and cross-browser compatibility.',
      tags: ['WordPress', 'Elementor', 'PHP', 'HTML5', 'CSS3', 'Bootstrap'],
      demo: null,
      github: 'https://github.com/ashlinbijo'
    },
    {
      name: 'Angular UI Components Library',
      desc: 'A personal collection of reusable Angular components and directives built with TypeScript, focused on performance and clean design patterns.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      demo: null,
      github: 'https://github.com/ashlinbijo'
    }
  ];
}