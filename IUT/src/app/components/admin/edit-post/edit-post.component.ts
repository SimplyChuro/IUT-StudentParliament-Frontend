import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from '../../../services/post.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public id;
  public model;
  public pictures;
  public pictureFiles;

  constructor(private postService: PostService, private _location: Location,  private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    var _this = this;
    this.id = this.route.snapshot.paramMap.get('id');

    this.postService.get(this.id).subscribe((response) => {
      _this.model = response;
      _this.pictures = _this.model.pictures;
    });
  }

  public back() {
    this._location.back();
  }

  public edit() {
    var _this = this;
    this.postService.update(this.model, this.pictureFiles, this.pictures);
  }

  public onFilesAdded(files: File[]) {
    if(this.pictureFiles == null || this.pictureFiles == []) {
      this.pictureFiles = files;
    } else {
      this.pictureFiles = this.pictureFiles.concat(files);
    }
    this.previewImages();
  }

  public remove(index) {
    this.pictureFiles.splice(index, 1);
  }

  public removeExisting(index) {
    this.pictures.splice(index, 1);
  }

  public getImageId(index) {
    return "preview-image-" + index;
  }

  public previewImages() {
    this.pictureFiles.forEach((item, index) => {
      var reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (_event) => {
        $('#preview-image-' + index).attr('src', reader.result);
      }
    });
  }

}