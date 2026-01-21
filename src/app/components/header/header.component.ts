import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';
import {
  BrnSelect,
  BrnSelectValue,
  BrnSelectContent,
} from '@spartan-ng/brain/select';
import { HlmSelectTrigger, HlmSelectOption } from '@spartan-ng/helm/select';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSunMoon, lucideMoon } from '@ng-icons/lucide';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
  selector: 'app-header',
  imports: [
    BrnSelect,
    HlmSelectTrigger,
    BrnSelectValue,
    BrnSelectContent,
    HlmSelectOption,
    HlmSwitch,
    NgIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({ lucideSunMoon, lucideMoon })],
})
export class HeaderComponent {
  themeService = inject(ThemeService);

  theme = computed(() => this.themeService.currentTheme);

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
