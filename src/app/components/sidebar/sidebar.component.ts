import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../../pages/admin-dashboard/admin-dashboard.component';
import { CreateNewPostsComponent } from '../../pages/create-new-posts/create-new-posts.component';
import { HomeComponent } from '../../pages/home/home.component';
import { MyPostsComponent } from '../../pages/my-posts/my-posts.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHome } from '@ng-icons/lucide';

@Component({
  selector: 'app-sidebar',
  imports: [NgIcon],
  providers: [provideIcons({ lucideHome })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
