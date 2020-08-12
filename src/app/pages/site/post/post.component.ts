import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { Post } from 'src/shared/api/post/post';
import { AppState } from 'src/shared/state/app/app.state';
import { ActivatedRoute } from '@angular/router';
import { getPostByUrl } from 'src/shared/utils/all-posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public post: Post;

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private meta: Meta) {
    this.store.selectOnce(AppState.post).subscribe((post) => {
      this.post = post;
      // if post is null mean user is coming from a direct url
      if (!post) {
        const url = this.activatedRoute.snapshot.params['id'];
        this.post = getPostByUrl(url);
      }
      this.addSocialMeta(this.post);
    });
  } // constructor

  ngOnInit(): void {}

  private addSocialMeta(post: Post) {
    // Add facebook tags
    this.meta.addTags([
      {
        name: 'og:title',
        content: post.title,
      },
      {
        name: 'og:description',
        content: post.description,
      },
      {
        name: 'og:image',
        content: post.image,
      },
      {
        name: 'og:url',
        content: `https://hrandika.github.io/post/${post.url}`,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ]);
  } // addFacebookMeta()
}