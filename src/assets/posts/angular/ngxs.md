# Why we need state management?

When we develop Angular application to get the best performance and code modularity, we have to lazy load modules. When that happens most of the time we can't use input and output to communicate with the components. Sometime the components are deeply nested and communicating between them seem not possible with short amount of work. I have seen some projects use service as the sharable components of data but as soon as the application get complicated its hard to manage via service and it does not look good.

To over come these managing application state via common place make more sense and easy to manage.We will see how we can add NGXS to our angular project and then work with it.

If your new to state management, please read this [concepts behind it](https://www.ngxs.io/concepts). We will use the classical way of developing an application and then we can move on on to more advance and new stuff that we can do. NGXS labs provide some extensions that we can use to ease off some boilerplate codes.

## Basic application.

Let's start by creating a simple Angular application with Angular material and simple side nav on it. Checkout this [commit](https://github.com/hrandika/ngxs/tree/6e4f6bcc9f6c67f9a895be697445b71613bdbac3) to get the starter application.

## Add Ngxs

Install and add the it to **_app.module.ts_**

```bash
npm install @ngxs/store --save
```

```typescript
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
  ],
})
export class AppModule {}
```

We can see that we are giving empty array of initial states. We can add states here to initiated with the application. We will create a application wide state call **_app.state.ts_**.

As per the [style guide](https://www.ngxs.io/recipes/style-guide) we will create the global state(in here we call app) under **_src/shared/state/app/app.state.ts_**. We will create action file in the same dir as **_app.actions.ts_**

We will crate a simple action to toggle side nav.Simple action with no payload.

```typescript
export class ToggleSidenav {
  static readonly type = '[App] ToggleSidenav';
  constructor() {}
}
```

Next thing we need to do is model the **_AppState_**. We know that we need to store the state of the sidenav (is it showing or not). And we will create a simple action to change the state of the sidenav.

```typescript
export class AppStateModel {
  sidenavOpened: boolean;
}

@Injectable()
@State<AppStateModel>({
  name: 'app',
  defaults: { sidenavOpened: false },
})
export class AppState {
  @Action(ToggleSidenav)
  public toggleSidenav({ patchState, getState }: StateContext<AppStateModel>) {
    return patchState({ sidenavOpened: !getState().sidenavOpened });
  } //toggleSidenav()
}
```

Now we can register our App state on the **_app.module.ts_** since we now have a state to start with.

```typescript
 NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
 }),
```

Next we have to define the Selector witch will give us the state change. Since we are only interested in the change of the sidenavOpened we can export that via a static method.

```typescript
export class AppState {
  @Selector()
  static sideNavOpened(state: AppStateModel) {
    return state.sidenavOpened;
  }
  //...
}
```

To change the state of the sidenav, we just need to dispatch an action from the click event of the button we have in the **_app.component.ts_**

```typescript
export class AppComponent {
  @Select(AppState.sideNavOpened)
  public opened$: Observable<boolean>;

  constructor(private store: Store) {}

  public toggleSideNav() {
    this.store.dispatch(new ToggleSidenav());
  }
}
```

In **_app.component.html_** we have change the state of the sidenav to listen to the changes.

```html
<mat-sidenav #sidenav mode="side" [opened]="opened$ | async"></mat-sidenav>
....
<mat-toolbar color="primary">
  <button mat-icon-button (click)="toggleSideNav()">
    <mat-icon>menu</mat-icon>
  </button>
</mat-toolbar>
```

Now our application is using the state to toggle the sidenav.Checkout this [commit](https://github.com/hrandika/ngxs/commit/fafab918ea5a4ef02c731431ddcb83c6b45211f5) up until now.
