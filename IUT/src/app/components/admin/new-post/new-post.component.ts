import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../../services/post.service';
import * as $ from 'jquery';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public model: PostInterface;
  public pictures = [];

  constructor(private postService: PostService, private _location: Location,  private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
	
  }

  public back() {
    this._location.back();
  }

  public create() {
    var _this = this;
    this.postService.create(this.model, this.pictures);
  }

 public onFilesAdded(files: File[]) {
    if(this.pictures == null || this.pictures == []) {
      this.pictures = files;
    } else {
      this.pictures = this.pictures.concat(files);
    }
    this.previewImages();
  }

  public remove(index) {
    this.pictures.splice(index, 1);
  }

  public getImageId(index) {
    return "preview-image-" + index;
  }

  public previewImages() {
    this.pictures.forEach((item, index) => {
      var reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (_event) => {
        $('#preview-image-' + index).attr('src', reader.result);
      }
    });
  }

}

export interface PostInterface {
    id: Number;
	title: String;
    description: String;
}