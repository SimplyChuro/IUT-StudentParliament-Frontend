import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  public newsList;
  public news;
  public page;
  public pageChecker: number;
  public amountOfPages;
  public max: number;
  public min: number;

  constructor(private postService : PostService,  private route: ActivatedRoute, private router: Router) {
  
  }

  ngOnInit() {  
    var _this = this;
    this.postService.getPageSize().subscribe((response) => {
      this.amountOfPages = response;
    });
    this.page = this.route.snapshot.paramMap.get('page');
    this.getData(this.page);
  }

  public setPage(page) {

  }

  public getData(page) {
    var _this = this;
    if(page >= 1) {
      this.min = ((this.page * 10) - 10);
      this.max = (this.page * 10);

      this.postService.getAll(this.min, this.max).subscribe((response) => {
        _this.newsList = response;
      });

    } else {
      this.router.navigate(["/news-feed/1"]);
    }
  }


  public previousPage() {
    if(parseInt(this.page) > this.pageChecker) {
      if(this.pageChecker >= 1) {
        this.pageChecker = parseInt(this.page) - 2;
        this.page = this.pageChecker;
      }
    } else {
      if((parseInt(this.page) - 1) >= 1) {
        this.pageChecker = parseInt(this.page) - 1;
        this.page = this.pageChecker;
      }
    }

    this.router.navigate(["/news-feed/" + this.page]);
    this.getData(this.page);   
  }  

  public nextPage() {
    if(this.pageChecker > parseInt(this.page)) {
      if(this.amountOfPages >= this.pageChecker) {
        this.pageChecker = parseInt(this.page) + 2;
        this.page = this.pageChecker;
      }
    } else {
      if(this.amountOfPages >= (parseInt(this.page) + 1)) {
        this.pageChecker = parseInt(this.page) + 1;
        this.page = this.pageChecker;
      }
    }

    this.router.navigate(["/news-feed/" + this.page]);
    this.getData(this.page);
  }

  public firstPage() {
    this.page = 1;
    this.router.navigate(["/news-feed/" + this.page]);
    this.getData(this.page);
  }

  public lastPage() {
    this.page = this.amountOfPages;
    this.router.navigate(["/news-feed/" + this.page]);
    this.getData(this.page);
  }

  public getCurrentPage() {
    return this.page;
  }

  public getPreviousPage() {
    if(parseInt(this.page) - 1 == 0) {
      return "-";
    } else {
      return parseInt(this.page) - 1;
    }
  }

  public getNextPage() {
    if(parseInt(this.page) + 1 > parseInt(this.amountOfPages)) {
      return "-";
    } else {
      return parseInt(this.page) + 1;
    }
  }

  public getCurrentPageLink() {
    return "/news-feed/" + this.page;
  }

  public firstPageDistant() {
    if(parseInt(this.page) > 2) {
      return true;
    } else {
      return false;
    }
  }

  public lastPageDistant() {
    if((parseInt(this.amountOfPages) - 2) >= parseInt(this.page)) {
      return true;
    } else {
      return false;
    }
  }

  public isFirst(numb: number) {
    if(numb == 0) {
      return true;
    } else {
      return false;
    }
  }

  public getImageUrl(post) {
    return post.pictures[0].url;
  }

}