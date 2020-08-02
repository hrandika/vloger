import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, MarkdownModule, FlexLayoutModule, PostRoutingModule],
})
export class PostModule {}
