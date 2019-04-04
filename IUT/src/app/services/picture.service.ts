import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
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
export class PictureService {

  constructor(private http: HttpClient, private _location: Location, private route: ActivatedRoute, private router: Router) {

  }

  public getAll(min, max) { 
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture, {
      params: {
        min: min,
        max: max
      }
    });
  }

  public getSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture + "/size");
  }

  public getPageSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture + "/page/size");
  }

  public get(id) {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture + "/" + id);
  }

  public create(pictures) {
    let promises = [];
    var _this = this;
    pictures.forEach(file => {
      var promise = new Promise((resolve, reject) => {
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
              resolve();
            },
            error: function() {
              reject('error');
            }
        });
        promises.push(promise)
      }).then(function() {
        _this.router.navigate(["/admin/gallery/1"]);
        swal.fire('Success', 'Gallery has been posted!', 'success');
      }).catch(function() {
        _this.router.navigate(["/admin/gallery/1"]);
        swal.fire('Error', 'Something went wrong!', 'error');
      });
    });  
  }

  public delete(id) {
    return this.http.delete(environment.apiUrl + environment.apiV1 + environment.picture + "/" + id, httpOptions);
  }

}