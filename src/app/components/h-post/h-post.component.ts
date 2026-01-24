import { Component, input } from '@angular/core';
import { Post } from '../../models/post.type';
import { NameInitialsPipe } from '../../pipes/name-initials.pipe';
import { lucideView } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-h-post',
  imports: [NameInitialsPipe, NgIcon, RouterLink],
  templateUrl: './h-post.component.html',
  styleUrl: './h-post.component.css',
  providers: [provideIcons({ lucideView })],
})
export class HPostComponent {
  post = input.required<Post>();
  myPosts = input<boolean>(false);

  onLcick(id: string) {
    console.log('Clicked', 'id is:', id);
  }
}
