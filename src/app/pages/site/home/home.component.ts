import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Post } from 'src/shared/api/post/post';
import { SetPost } from 'src/shared/state/app/app.action';
import { getAllPosts } from '../../../../shared/utils/all-posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featured: Post[];
  public all: Post[];

  @ViewChild('top2', { static: true }) el: ElementRef;
  @ViewChild('old', { static: true }) old: ElementRef;
  p: number = 1;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    let postsMap = getAllPosts();
    let values = [...postsMap.values()];
    this.featured = values.slice(0, 2);
    this.all = values.slice(2);
  }

  public onPost(post: Post) {
    this.store.dispatch(new SetPost(post));
    this.router.navigate([`post/${post.url}`]);
  }

  public onPageChange(event) {
    this.p = event;
    this.old.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  public onScroll(event) {
    // if (this.isScrooling == false)
    //   setTimeout(() => {
    //     this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //     this.isScrooling = true;
    //   }, 100);
    // console.log(event);
    // this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
