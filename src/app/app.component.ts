import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DarkMode } from 'src/shared/state/app/app.action';
import { AppState } from 'src/shared/state/app/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AppState.darkMode)
  public darkMode$: Observable<boolean>;

  constructor(
    private store: Store,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIconSetInNamespace(
      'app',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/app.svg')
    );
  } //constructoru

  public onDarkMode(event: MatSlideToggleChange) {
    this.store.dispatch(new DarkMode(event.checked));
  }
} // class
