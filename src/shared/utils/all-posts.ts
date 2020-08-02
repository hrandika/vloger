import { Frameworks, Icon, Post } from '../api/post/post';

export var allPosts: Post[] = [
  {
    title: 'Android app security',
    subTitle: Frameworks.Android,
    icon: Icon.android,
    image: 'assets/img/krzysztof-hepner-C1JTOq_uTpY-unsplash.jpg',
    url: 'androidx-security',
    markdown: 'assets/posts/android/security.md',
    description:'Most of the applications contains sensitive user details. How can we keep them safe? AndroidX have some tips and ticks that you can use to improve.'
  },
  {
    title: 'Spring Data JDBC with Postgresql',
    subTitle: Frameworks.SpringBoot,
    icon: Icon.spring,
    image: 'assets/img/hari-nandakumar-xG8Js-uvgg4-unsplash.jpg',
    url: 'spring-data-jdbc',
    markdown: 'assets/posts/spring-boot/spring-data-jdbc.md',
    description: `Access relational database with opinionated ORM.
    Focus on Domain Driven Design with simple and limited features.
    Let's setup PostgreSQL database and Spring HATEAOS based REST API.`,
  },
  {
    title: 'Test Driven Development (TDD)',
    subTitle: Frameworks.Android,
    icon: Icon.android,
    image: 'assets/img/robert-tudor-UZCKUqHzaps-unsplash.jpg',
    url: 'android-tdd',
    markdown: 'assets/posts/android/test-driven-development.md',
    description: `With the release of Hilt dependency inject we will try to implement an architecture for Android applications withc is more testable.`,
  },
  {
    title: 'State management with NGXS',
    subTitle: Frameworks.Angular,
    icon: Icon.angular,
    image: 'assets/img/max-ostrozhinskiy-18wn7B2y-SU-unsplash.jpg',
    meta:
      '<span>Photo by <a href="https://unsplash.com/@maxon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Max Ostrozhinskiy</a> on <a href="https://unsplash.com/s/photos/state?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    url: 'angular-ngxs',
    description:
      'When your application grow its features and components managing the application variables (or state of the application) is bit harder. Will you use services? Or use state management pattern like Redux from React world?',
  },
];

// export get():
