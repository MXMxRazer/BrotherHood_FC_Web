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
import { MainComponent } from './main/main.component';
import { TypographicalHeadingsComponent } from './typographical-headings/typographical-headings.component';
import { MinorBlogsComponent } from './minor-blogs/minor-blogs.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeBarComponent,
    NavbarComponent,
    HeaderComponent,
    HeroComponent,
    StatusBoardComponent,
    BlogComponent,
    MainComponent,
    TypographicalHeadingsComponent,
    MinorBlogsComponent,
    BlogContentComponent,
    AchievementsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
