import { Component, OnInit } from '@angular/core';
import { Post } from 'src/shared/api/post/post';
import { Store } from '@ngxs/store';
import { AppState } from 'src/shared/state/app/app.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public post: Post;

  constructor(private store: Store) {
    this.store.selectOnce(AppState.post).subscribe((p) => (this.post = p));
  }

  ngOnInit(): void {}
}
