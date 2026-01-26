import { Component, computed, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHome } from '@ng-icons/lucide';
import { HlmDropdownMenuShortcut } from '@spartan-ng/helm/dropdown-menu';
import { SbButton } from '../sb-button/sb-button';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgIcon, HlmDropdownMenuShortcut, SbButton, RouterLink],
  providers: [provideIcons({ lucideHome })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  postService = inject(PostService);
  user = computed(() => this.postService.user());
}
