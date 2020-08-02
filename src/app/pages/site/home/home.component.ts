import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Post } from 'src/shared/api/post/post';
import { SetPost } from 'src/shared/state/app/app.action';
import { allPosts } from '../../../../shared/utils/all-posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featured = allPosts.slice(0,2);
  public all = allPosts.slice(2);

  @ViewChild('top2', { static: true }) el: ElementRef;
  @ViewChild('old', { static: true }) old: ElementRef;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}
  p: number = 1;

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
