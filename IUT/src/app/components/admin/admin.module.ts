import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AdminGalleryComponent } from './gallery/gallery.component';
import { NewPictureComponent } from './new-picture/new-picture.component';

import { AdminRoutingModule } from './admin-routing.module';

import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AdminComponent,
    PostsComponent,
    NewPostComponent,
    EditPostComponent,
    AdminGalleryComponent,
    NewPictureComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDropzoneModule,
    AdminRoutingModule,
  ],
  providers: []
})
export class AdminModule { }
