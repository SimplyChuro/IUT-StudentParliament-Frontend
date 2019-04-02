import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PostService } from '../../../services/post.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public model: Object = { };

  constructor(private postService: PostService, private _location: Location) {

  }

  ngOnInit() {
   
  }

  public create() {
    var _this = this;
    this.postService.create(this.model).subscribe((response) => {
      _this._location.back();
    });
  }

  public remove(id) {
    
  }

}