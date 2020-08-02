import { isPlatformServer } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
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

  @ViewChild('content', { static: true }) el: ElementRef;

  @HostListener('window:scroll', ['$event'])
  protected onScroll(event) {
    this.updateTheme();
  }

  constructor(
    private store: Store,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject('window') private window: Window,
    @Inject(PLATFORM_ID) protected platformId: string
  ) {
    let svgUrl = 'assets/svg/app.svg';
    if (isPlatformServer(platformId)) svgUrl = `http://localhost:4200/${svgUrl}`;

    const x = this.sanitizer.bypassSecurityTrustResourceUrl(svgUrl);
    this.iconRegistry.addSvgIconSetInNamespace('app', x);

    this.store.select(AppState.darkMode).subscribe((d) => {
      this.isDark = d;
      this.updateTheme();
    });
  } // constructor

  private updateTheme() {
    if (this.scroll > 0 || this.window.pageYOffset > 0) {
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
