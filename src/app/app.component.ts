import { Component, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { DarkMode } from 'src/shared/state/app/app.action';
import { AppState } from 'src/shared/state/app/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public white: boolean = false;
  public dark: boolean = false;
  public isDark: boolean = false;
  private scroll: number;

  constructor(
    private store: Store,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {
    this.iconRegistry.addSvgIconSetInNamespace(
      'app',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/app.svg')
    );
    this.store.select(AppState.darkMode).subscribe((d) => {
      this.isDark = d;
      this.updateTheme();
    });

    this.renderer.listen('window', 'scroll', (event) => {
      this.scroll = window.scrollY;
      this.updateTheme();
    });
  } //constructoru

  private updateTheme() {
    if (this.scroll > 0 || window.pageYOffset > 0) {
      if (this.isDark) this.dark = true;
      else this.white = true;
    } else {
      this.white = false;
      this.dark = false;
    }
  }

  public onDarkMode(event: MatSlideToggleChange) {
    this.store.dispatch(new DarkMode(event.checked));
  }
} // class
