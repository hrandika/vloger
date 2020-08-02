import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Post } from 'src/shared/api/post/post';
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
export class AppState {
  @Selector()
  static darkMode(state: AppStateModel) {
    return state.darkMode;
  }

  @Selector()
  static post(state: AppStateModel) {
    return state.post;
  }

  @Action(DarkMode)
  public darkMode({ patchState }: StateContext<AppStateModel>, action: DarkMode) {
    return patchState({ darkMode: action.enable });
  } //darkMode()

  @Action(SetPost)
  public setPost({ patchState }: StateContext<AppStateModel>, action: SetPost) {
    return patchState({ post: action.post });
  }
} // class
