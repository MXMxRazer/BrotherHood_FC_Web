import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './main/blog/blog.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { AchievementsComponent } from './main/achievements/achievements.component';
import { MembersComponent } from './main/members/members.component';
import { ApplicationComponent } from './main/application/application.component';
import { ContactPageComponent } from './footer/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'blogs', component: BlogComponent},
  { path: 'gallery', component: GalleryComponent}, 
  { path: 'stories', component: AchievementsComponent}, 
  { path: 'nfc_members', component: MembersComponent}, 
  { path: 'membership_application', component: ApplicationComponent}, 
  { path: 'contact', component: ContactPageComponent},
  { path: '*', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
