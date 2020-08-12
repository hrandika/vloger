export enum Frameworks {
  Angular = 'Angular',
  Flutter = 'Flutter',
  SpringBoot = 'Spring Boot',
  Android = 'Android',
}

export enum Icon {
  android = 'android',
  flutter = 'flutter',
  spring = 'spring',
  angular = 'angular',
}

export class Post {
  public title: string;
  public subTitle: string;
  public image: string;
  public url: string;
  public markdown?: string;
  public icon?: string;
  public description?: string;
  public meta?: string;
  public github?:string;
  public youtube?:string
}
