import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.type';

import { BrnDialogImports } from '@spartan-ng/brain/dialog';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { toast } from 'ngx-sonner';
import { HlmToaster } from '@spartan-ng/helm/sonner';
import { validators } from 'tailwind-merge';

@Component({
  selector: 'app-view-post',
  imports: [
    BrnDialogImports,
    HlmDialogImports,
    HlmCardImports,
    HlmLabelImports,
    HlmInputImports,
    HlmButtonImports,
    RouterLink,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    HlmToaster,
  ],
  templateUrl: './view-post.html',
  styleUrl: './view-post.css',
})
export class ViewPost implements OnInit {
  postService = inject(PostService);
  post = signal<Post>({
    id: '',
    title: '',
    author: {
      name: '',
      id: '',
    },
    date: new Date(),
    topic: '',
    content: '',
    featured: false,
    image: '',
    comments: [], // Optional field for comments
  });
  comment = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(4)],
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const postId = params.get('id');
      if (!postId) return;

      const fetchedPost = this.postService.getOnePost(postId);
      if (fetchedPost) {
        this.post.set(fetchedPost);
      } else {
        console.log('Error Logged from line-40-view-post');
        return;
      }
    });
  }

  onSubmitComment() {
    if (this.comment.invalid) {
      toast.error(
        'The comment field can neither be empty nor less than 4 word!',
      );
      return;
    }

    const date = new Date();
    const userComment = {
      id: date.getTime() as number,
      user: this.postService.user(),
      date,
      comment: this.comment.value as string,
    };

    this.post.update((prevPost) => {
      return {
        ...prevPost,
        comments: [userComment, ...(prevPost.comments ?? [])],
      };
    });
    toast.success('Comment submitted successfully!');
    this.comment.setValue('');
  }
}
// Great write-up, but I think the writer should have included a comparison with travelling the world without a budget.
