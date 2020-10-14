import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MarkdownModule, //
    FlexLayoutModule,
    PostRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PostModule {}
