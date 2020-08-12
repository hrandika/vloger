import { Frameworks, Icon, Post } from '../api/post/post';

const imageBase = 'assets/img/';
const postBase = 'assets/posts/';
const postsMap: Map<string, Post> = new Map();

export function getPostByUrl(url: string): Post {
  if (postsMap.size == 0) getAllPosts();
  return postsMap.get(url);
}

export function getAllPosts() {
  postsMap
    .set('embedded-keycloak', {
      title: 'Embedded Keycloak',
      subTitle: Frameworks.SpringBoot,
      icon: Icon.spring,
      url: 'embedded-keycloak',
      image: `${imageBase}/bradford-nicolas-gWfmINd9-yY-unsplash.jpg`,
      description:
        'You can always run keycloak on separate server. But some projects are small and you do not need to share the instance.Just run keycloak along Spring boot app.',
    })
    .set('androidx-security', {
      title: 'Android app security',
      subTitle: Frameworks.Android,
      icon: Icon.android,
      image: `${imageBase}/krzysztof-hepner-C1JTOq_uTpY-unsplash.jpg`,
      url: 'androidx-security',
      markdown: 'assets/posts/android/security.md',
      description:
        'Most of the applications contains sensitive user details. How can we keep them safe? AndroidX have some tips and ticks that you can use to improve.',
    })
    .set('spring-data-jdbc', {
      title: 'Spring Data JDBC with Postgresql',
      subTitle: Frameworks.SpringBoot,
      icon: Icon.spring,
      image: `${imageBase}/hari-nandakumar-xG8Js-uvgg4-unsplash.jpg`,
      url: 'spring-data-jdbc',
      markdown: 'assets/posts/spring-boot/spring-data-jdbc.md',
      description: `Access relational database with opinionated ORM.
      Focus on Domain Driven Design with simple and limited features.
      Let's setup PostgreSQL database and Spring HATEAOS.`,
    })
    .set('android-tdd', {
      title: 'Test Driven Development (TDD)',
      subTitle: Frameworks.Android,
      icon: Icon.android,
      image: 'assets/img/robert-tudor-UZCKUqHzaps-unsplash.jpg',
      url: 'android-tdd',
      markdown: 'assets/posts/android/test-driven-development.md',
      description: `With the release of Hilt dependency inject we will try to implement an architecture for Android applications withc is more testable.`,
    })
    .set('angular-ngxs', {
      title: 'State management with NGXS',
      subTitle: Frameworks.Angular,
      icon: Icon.angular,
      image: 'assets/img/max-ostrozhinskiy-18wn7B2y-SU-unsplash.jpg',
      meta:
        '<span>Photo by <a href="https://unsplash.com/@maxon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Max Ostrozhinskiy</a> on <a href="https://unsplash.com/s/photos/state?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
      url: 'angular-ngxs',
      markdown: `${postBase}angular/ngxs.md`,
      github: 'https://github.com/hrandika/ngxs-smaples',
      description:
        'Very simple state management for Angular. Yes there is Ngrx but Ngxs seems easy and simple.There are plugins to help with things like storage,dev tolls and more',
    });
  return postsMap;
}
