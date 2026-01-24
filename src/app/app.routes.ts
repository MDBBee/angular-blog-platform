import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/home/home.component');
      return m.HomeComponent;
    },
  },
  {
    path: 'admin-dashboard',
    async loadComponent() {
      const m =
        await import('./pages/admin-dashboard/admin-dashboard.component');
      return m.AdminDashboardComponent;
    },
  },
  {
    path: 'my-posts',
    async loadComponent() {
      const m = await import('./pages/my-posts/my-posts.component');
      return m.MyPostsComponent;
    },
  },
  {
    path: 'create-new-posts',
    async loadComponent() {
      const m =
        await import('./pages/create-new-posts/create-new-posts.component');
      return m.CreateNewPostsComponent;
    },
  },
  {
    path: 'view-post/:id',
    async loadComponent() {
      const m = await import('./pages/view-post/view-post');
      return m.ViewPost;
    },
  },
];
