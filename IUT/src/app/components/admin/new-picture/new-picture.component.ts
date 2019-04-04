import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PictureService } from '../../../services/picture.service';
import { environment } from '../../../../environments/environment';

import * as $ from 'jquery';

@Component({
  selector: 'app-new-picture',
  templateUrl: './new-picture.component.html',
  styleUrls: ['./new-picture.component.css']
})
export class NewPictureComponent implements OnInit {

  public pictures;

  constructor(private _location: Location, private pictureService: PictureService) { 

  }

  ngOnInit() {

  }

  public back() {
    this._location.back();
  }

  public create() {
    this.pictureService.create(this.pictures);
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
