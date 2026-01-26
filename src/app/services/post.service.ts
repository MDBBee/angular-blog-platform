import { inject, Injectable, signal } from '@angular/core';
import {
  AccessStatus,
  CreatePost,
  Post,
  Role,
  User,
} from '../models/post.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  user = signal<User>({
    name: 'John Smith',
    id: 'jkjhhj6767',
    role: 'Admin',
    access: 'Allowed',
  });
  topics = signal<string[]>([]);
  posts = signal<Post[]>([]);
  curPost = signal<Post | null>(null);

  fetchMyPosts(userId: string) {
    return this.posts().filter((post) => post.author.id === userId);
  }

  getAllPosts() {
    const url = 'http://localhost:3000/blogPosts';
    return this.http.get<Post[]>(url).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      }),
    );
  }

  getOnePost(postId: string) {
    const url = 'http://localhost:3000/blogPosts';
    return this.http.get<Post>(url + `/${postId}`);
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
