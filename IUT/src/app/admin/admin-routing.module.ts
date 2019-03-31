import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AdminGalleryComponent } from './gallery/gallery.component';
import { NewPictureComponent } from './new-picture/new-picture.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'posts/:page', component: PostsComponent },
      { path: 'new-post', component: NewPostComponent },
      { path: 'edit-post/:id', component: EditPostComponent },
      { path: 'gallery/:page', component: AdminGalleryComponent },
      { path: 'new-gallery', component: NewPictureComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
