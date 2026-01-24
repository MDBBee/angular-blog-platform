import { Component } from '@angular/core';
import {
  HlmDialog,
  HlmDialogContent,
  HlmDialogHeader,
  HlmDialogFooter,
} from '@spartan-ng/helm/dialog';

@Component({
  selector: 'app-edit-post',
  imports: [HlmDialog, HlmDialogContent, HlmDialogHeader, HlmDialogFooter],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css',
})
export class EditPost {}
