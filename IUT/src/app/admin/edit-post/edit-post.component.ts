import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public id;
  public post;
  public pictures;

  constructor(private postService: PostService, private _location: Location,  private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    var _this = this;
    this.id = this.route.snapshot.paramMap.get('id');

    this.postService.get(this.id).subscribe((response) => {
      _this.post = response;
      _this.pictures = _this.post.pictures;
    });
  }

  public getPictureUrl(name: string) {
    return "../../assets/images/" + name;
  }

  public cancle() {
    this._location.back();
  }

}