import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPost } from '../new-post/new-post';

@Component({
  selector: 'app-edit-post',
  imports: [CommonModule, NewPost],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css',
})
export class EditPost {
  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
}
