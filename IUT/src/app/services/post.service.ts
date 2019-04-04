import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';
import * as $ from 'jquery';
import swal from 'sweetalert2';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Csrf-Token': '61ZwHIHbEjSAB421ToXNQLcamDZtH3TtlOasdf365dasd31CA3UKn'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public uploadedPictures = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 

  }

  public getAll(min, max) {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post, {
      params: {
        min: min,
        max: max
      }
    });
  }
  
  public getSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post + "/size");
  }

  public getPageSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post + "/page/size");
  }

  public get(id) {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post + "/" + id);
  }

  async create(post, pictures) {
    let promises = [];
    var _this = this;
    this.uploadedPictures = [];

    if(pictures != null) {
      await pictures.forEach(file => {
        var promise = this.uploadPictures(file);
        promises.push(promise);
      });
    }

    const bar = await Promise.all(promises).then(function() {
      post.pictures = _this.uploadedPictures;
      _this.http.post(environment.apiUrl + environment.apiV1 + environment.post, post, httpOptions).subscribe(
        suc => {
          _this.router.navigate(["/admin/posts/1"]);
          swal.fire('Success', 'Gallery has been posted!', 'success');
        },
        err => {
          _this.router.navigate(["/admin/posts/1"]);
          swal.fire('Error', 'Something went wrong!', 'error');
        }
      );
    });

  }

  async update(post, pictureFiles, pictures) {
    let promises = [];
    var _this = this;
    this.uploadedPictures = [];
    
    if(pictureFiles != null) {
      await pictureFiles.forEach(file => {
        var promise = this.uploadPictures(file);
        promises.push(promise);
      });
    }

    const bar = await Promise.all(promises).then(function() {
      post.pictures = pictures.concat(_this.uploadedPictures);
      _this.http.put(environment.apiUrl + environment.apiV1 + environment.post + "/" + post.id, post, httpOptions).subscribe(
        suc => {
          _this.router.navigate(["/admin/posts/1"]);
          swal.fire('Success', 'Gallery has been posted!', 'success');
        },
        err => {
          _this.router.navigate(["/admin/posts/1"]);
          swal.fire('Error', 'Something went wrong!', 'error');
        }
      );
    });
  }

  public delete(id) {
    return this.http.delete(environment.apiUrl + environment.apiV1 + environment.post + "/" + id, httpOptions);
  }

  async uploadPictures(file) {
    var _this = this;
    return new Promise((resolve, reject) => {
      var data = new FormData();
      data.append('picture', file);
      $.ajax({
          url: environment.apiUrl + environment.apiV1 + environment.picture,
          data: data,
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Csrf-Token", '61ZwHIHbEjSAB421ToXNQLcamDZtH3TtlOasdf365dasd31CA3UKn');  
          },
          cache: false,
          contentType: false,
          processData: false,
          xhrFields: {
            withCredentials: true
          },
          type: 'POST',
          success: function(data) {
            _this.uploadedPictures.push(data);
            resolve();
          },
          error: function() {
            reject('error');
          }
      });
    });
  }

}