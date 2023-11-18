import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeBarComponent } from './header/notice-bar/notice-bar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { StatusBoardComponent } from './status-board/status-board.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeBarComponent,
    NavbarComponent,
    HeaderComponent,
    HeroComponent,
    StatusBoardComponent,
    BlogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
