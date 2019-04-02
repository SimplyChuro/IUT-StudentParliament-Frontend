import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public id;
  public model;
  public pictures;

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

  public edit() {
    var _this = this;
    this.postService.update(this.model, this.model.id).subscribe((response) => {
      _this._location.back();
    });
  }

  public remove(id) {

  }

}