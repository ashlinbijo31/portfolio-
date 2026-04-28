import { Component, OnInit, HostListener } from '@angular/core';
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
      <div class="container">
        <span class="footer-text">// ashlin bijo g — crafted with precision · {{ year }}</span>
      </div>
    </footer>
  `,
  styles: [`
    main {
      position: relative;
      z-index: 1;
    }
    .footer {
      border-top: 1px solid var(--border);
      padding: 32px 0;
      position: relative;
      z-index: 1;
    }
    .footer-text {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-muted);
    }
  `]
})
export class AppComponent implements OnInit {
  cursorX = 0;
  cursorY = 0;
  followerX = 0;
  followerY = 0;
  year = new Date().getFullYear();

  ngOnInit() {}

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
