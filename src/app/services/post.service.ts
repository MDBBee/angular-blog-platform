import { Injectable, signal } from '@angular/core';
import { AccessStatus, CreatePost, Post, Role } from '../models/post.type';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  user = signal<{ name: string; id: string; role: Role; access: AccessStatus }>(
    {
      name: 'Alex James',
      id: 'hjhj34',
      role: 'Admin',
      access: 'Allowed',
    },
  );
  topics = signal<string[]>([]);
  posts = signal<Post[]>([]);

  fetchMyPosts(userId: string) {
    return this.posts().filter((post) => post.author.id === userId);
  }

  getAllPosts() {
    return this.posts();
  }

  getOnePost(postId: string) {
    return this.posts().filter((p) => p.id === postId)[0];
  }

  createPost(post: CreatePost) {
    const author = this.user();

    const date = new Date();
    const id = date.getTime().toString();

    const newPost = { ...post, author, id };
    this.posts.update((prevPosts) => [newPost, ...prevPosts]);
    return;
  }

  updatePost(newPost: Post) {
    // console.log('UPDATE post', newPost);

    this.posts.update((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === newPost.id) {
          return { ...post, ...newPost };
        }
        return post;
      }),
    );
  }

  deletePost(postId: string) {
    // console.log('UPDATE post', newPost);

    this.posts.update((prevPosts) =>
      prevPosts.filter((post) => post.id !== postId),
    );
  }
}
