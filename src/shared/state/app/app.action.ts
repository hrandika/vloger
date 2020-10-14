import { Post } from 'src/shared/api/post/post';

export class DarkMode {
  static readonly type = '[App] DarkMode';
  constructor(public enable: boolean) {}
}

export class SetPost {
  static readonly type = '[App] SetPost';
  constructor(public post: Post) {}
}
