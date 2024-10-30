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
import { MinorBlogsComponent } from './main/minor-blogs/minor-blogs.component';
import { BlogContentComponent } from './main/blog-content/blog-content.component';
import { AchievementsComponent } from './main/achievements/achievements.component';
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
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { ResponsiveComponentComponent } from './responsive-component/responsive-component.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatchesComponent } from './matches/matches.component';
import { CarouselMemberComponent } from './main/members/carousel-members/carousel-members.component';

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
    BlogContentComponent,
    AchievementsComponent,
    MembersComponent,
    FooterComponent,
    GalleryComponent,
    ResponsiveComponentComponent,
    CarouselComponent,
    MatchesComponent,
    CarouselMemberComponent
  ],
  imports: [
    ContactPageComponent,
    MinorBlogsComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ApplicationComponent,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
  ],
  providers: [
    Logger,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
