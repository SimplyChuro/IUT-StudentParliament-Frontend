import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news-feed/:page', component: NewsFeedComponent },
  { path: 'gallery/:page', component: GalleryComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
