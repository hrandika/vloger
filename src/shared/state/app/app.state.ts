import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DarkMode } from './app.action';

export class AppStateModel {
  darkMode: boolean;
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

  @Action(DarkMode)
  private darkMode({ patchState }: StateContext<AppStateModel>, action: DarkMode) {
    return patchState({ darkMode: action.enable });
  } //darkMode()
} // class
