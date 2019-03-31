import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PictureService } from '../../services/picture.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {

  public pictures;
  public picture;
  public page;
  public pageChecker: number;
  public amountOfPages;
  public max: number;
  public min: number;

  constructor(private pictureService: PictureService,  private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {  
    var _this = this;
    this.pictureService.getPageSize().subscribe((response) => {
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
      this.min = ((this.page * 15) - 15);
      this.max = (this.page * 15);

      this.pictureService.getAll(this.min, this.max).subscribe((response) => {
        _this.pictures = response;
      });

    } else {
      this.router.navigate(["/admin/gallery/1"]);
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

    this.router.navigate(["/admin/gallery/" + this.page]);
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

    this.router.navigate(["/admin/gallery/" + this.page]);
    this.getData(this.page);
  }

  public firstPage() {
    this.page = 1;
    this.router.navigate(["/admin/gallery/" + this.page]);
    this.getData(this.page);
  }

  public lastPage() {
    this.page = this.amountOfPages;
    this.router.navigate(["/admin/gallery/" + this.page]);
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
    return "/admin/gallery/" + this.page;
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

  public isFirst(numb : number) {
    if(numb == 0) {
      return true;
    } else {
      return false;
    }
  }

  public getPictureUrl(name : string) {
    return "../../../assets/images/" + name;
  }

  public remove(id) {
    var _this = this;
    this.pictureService.delete(id).subscribe((response) => {
      _this.router.navigate(["/admin/gallery/" + this.page]);
      _this.getData(this.page);
    });
  }

}
