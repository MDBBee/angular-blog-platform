import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);

  theme = signal<Theme>('system');

  constructor() {
    // Load saved theme or default to system
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.theme.set(savedTheme);
    }

    // Apply theme on changes
    effect(() => {
      const currentTheme = this.theme();
      const isDark =
        currentTheme === 'dark' ||
        (currentTheme === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDark) {
        this.document.documentElement.classList.add('dark');
      } else {
        this.document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleTheme() {
    const current = this.theme();
    if (current === 'light') {
      this.theme.set('dark');
    } else if (current === 'dark') {
      this.theme.set('light');
    }

    localStorage.setItem('theme', this.theme());
  }

  get currentTheme() {
    return this.theme();
  }
}
