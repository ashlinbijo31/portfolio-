import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-left">
            <p class="section-label">contact</p>
            <h2 class="contact-title">
              Let's build<br>
              something<br>
              <span class="accent-gradient">great.</span>
            </h2>
            <p class="contact-sub">
              Open to new opportunities, freelance projects,
              or just a good conversation about the web.
            </p>
          </div>

          <div class="contact-right">
            <div class="contact-links">
              <a *ngFor="let link of links" [href]="link.href" [target]="link.external ? '_blank' : '_self'" class="contact-link">
                <div class="link-icon">{{ link.icon }}</div>
                <div class="link-content">
                  <span class="link-label">{{ link.label }}</span>
                  <span class="link-value">{{ link.value }}</span>
                </div>
                <span class="link-arrow">&#8599;</span>
              </a>
            </div>

            <div class="contact-status">
              <div class="status-indicator">
                <span class="pulse"></span>
                <span class="status-text">Available for new roles &mdash; Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact { border-top: 1px solid var(--border); }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .contact-title {
      font-size: clamp(2.5rem, 5vw, 5rem);
      line-height: 1.05;
      margin-bottom: 24px;
    }

    .accent-gradient {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-style: italic;
    }

    .contact-sub {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.8;
      max-width: 320px;
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 40px;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 20px 24px;
      border: 1px solid var(--border);
      text-decoration: none;
      color: var(--text-primary);
      transition: all var(--transition);
      background: var(--bg-card);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 2px;
        background: var(--gradient);
        opacity: 0;
        transition: opacity var(--transition);
      }

      &:hover {
        border-color: rgba(0, 212, 255, 0.3);
        background: rgba(0, 212, 255, 0.04);
        padding-left: 28px;

        &::before { opacity: 1; }
        .link-arrow { transform: translate(3px, -3px); color: var(--accent); }
        .link-label { color: var(--accent); }
      }
    }

    .link-icon {
      font-size: 1.2rem;
      width: 32px;
      text-align: center;
      flex-shrink: 0;
    }

    .link-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
    }

    .link-label {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      transition: color var(--transition);
    }

    .link-value {
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .link-arrow {
      font-size: 1rem;
      color: var(--text-muted);
      transition: all var(--transition);
    }

    .contact-status {
      padding: 20px 0;
      border-top: 1px solid var(--border);
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .pulse {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #00ff88;
      position: relative;
      flex-shrink: 0;

      &::after {
        content: '';
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        border: 1px solid #00ff88;
        animation: pulse-ring 1.8s ease-out infinite;
      }
    }

    .status-text {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    @media (max-width: 768px) {
      .contact-grid { grid-template-columns: 1fr; gap: 36px; }
      .contact-title { font-size: clamp(2rem, 10vw, 3.5rem); }
      .contact-link { padding: 16px 18px; gap: 14px; }
      .contact-link:hover { padding-left: 18px; }
      .link-value { font-size: 0.82rem; }
    }
  `]
})
export class ContactComponent {
  links = [
    {
      icon: '✉',
      label: 'email',
      value: 'ashlinbijo31@gmail.com',
      href: 'mailto:ashlinbijo31@gmail.com',
      external: false
    },
    {
      icon: '📱',
      label: 'phone',
      value: '+91 8438410157',
      href: 'tel:+918438410157',
      external: false
    },
    {
      icon: '⌥',
      label: 'github',
      value: 'github.com/ashlinbijo',
      href: 'https://github.com/ashlinbijo',
      external: true
    },
    {
      icon: '◈',
      label: 'linkedin',
      value: 'linkedin.com/in/ashlinbijo',
      href: 'https://linkedin.com/in/ashlinbijo',
      external: true
    }
  ];
}