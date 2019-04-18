import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public id;
  public post;
  public pictures;
  public filteredPictures;

  constructor(private postService: PostService,  private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    var _this = this;
    this.id = this.route.snapshot.paramMap.get('id');

    this.postService.get(this.id).subscribe((response) => {
      _this.post = response;
      _this.pictures = _this.post.pictures;
      _this.filteredPictures = _this.pictures.splice(1);
    });
  }

  public getFirstPicture() {
    if(!(this.pictures === undefined || this.pictures.length == 0)) {
      return this.pictures[0].url;
    } else {
      return null;
    }
  }

  public isFirst(i) {
    if(i == 0) {
      return true;
    } else {
      return false;
    }
  }

  public isNotFirst(i) {
    if(i !== 0) {
      return true;
    } else {
      return false;
    }
  }
  
}