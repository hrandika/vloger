import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, NgxsOnInit } from '@ngxs/store';
import { Post } from 'src/shared/api/post/post';
import { ThemeService } from '../../services/theme/theme.service';
import { DarkMode, SetPost } from './app.action';

export class AppStateModel {
  darkMode: boolean;
  post?: Post;
}

@Injectable()
@State<AppStateModel>({
  name: 'app',
  defaults: { darkMode: false },
})
export class AppState implements NgxsOnInit {
  @Selector()
  static darkMode(state: AppStateModel) {
    return state.darkMode;
  }

  @Selector()
  static post(state: AppStateModel) {
    return state.post;
  }

  constructor(private theme: ThemeService) {}

  ngxsOnInit({ getState }: StateContext<AppStateModel>) {
    this.applyTheme(getState().darkMode);
  }

  @Action(DarkMode)
  public darkMode({ patchState }: StateContext<AppStateModel>, action: DarkMode) {
    const darkMode = action.enable;
    this.applyTheme(darkMode);
    return patchState({ darkMode });
  } //darkMode()

  @Action(SetPost)
  public setPost({ patchState }: StateContext<AppStateModel>, action: SetPost) {
    return patchState({ post: action.post });
  }

  private applyTheme(darkMode: boolean) {
    if (darkMode) this.theme.loadStyle('okaidia.css');
    else this.theme.loadStyle('vs.css');
  }
} // class
