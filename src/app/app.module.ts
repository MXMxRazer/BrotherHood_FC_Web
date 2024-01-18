import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeBarComponent } from './header/notice-bar/notice-bar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { StatusBoardComponent } from './main/status-board/status-board.component';
import { BlogComponent } from './main/blog/blog.component';
import { MainComponent } from './main/main.component';
import { TypographicalHeadingsComponent } from './typographical-headings/typographical-headings.component';
import { MinorBlogsComponent } from './main/minor-blogs/minor-blogs.component';
import { BlogContentComponent } from './main/blog-content/blog-content.component';
import { AchievementsComponent } from './main/achievements/achievements.component';
import { SubAchievementsComponent } from './main/achievements/sub-achievements/sub-achievements.component';
import { MembersComponent } from './main/members/members.component';
import { ContactPageComponent } from './footer/contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { Logger } from './logger/logger';
import { GalleryComponent } from './main/gallery/gallery.component';
import { CarouselComponent } from './main/gallery/carousel/carousel.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApplicationComponent } from './main/application/application.component';

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
    SubAchievementsComponent,
    MembersComponent,
    ContactPageComponent,
    FooterComponent,
    GalleryComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ApplicationComponent,
  ],
  providers: [
    Logger,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
