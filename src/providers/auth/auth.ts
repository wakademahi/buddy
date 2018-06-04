
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  authenticate(val) {
    return new Promise(resolve => {
      var apiUrl = "HRBuddy/login";
      var objt = { mobile_Number: val };
      console.log(apiUrl + '==' + JSON.stringify(objt));
      this.http.post(apiUrl, JSON.stringify(objt)).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }
  verify(val, id) {
    return new Promise(resolve => {
      var apiUrl = "HRBuddy/verifyOTP";
      var objt = {
        "id": id,
        "otp": val
      }
      console.log(apiUrl + '==' + JSON.stringify(objt));
      this.http.post(apiUrl, JSON.stringify(objt)).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }
  getCards(flowId, optId) {
    return new Promise(resolve => {
      var apiUrl = "hrBuddy/startWorkflow";
      var objt;
      if (optId == '') {
        objt = {
          "workFlowId": 1,
          "userId": localStorage.getItem('userId'),
          "isOptionSelected": "NO"
        }
      } else {
        objt = {
          "workFlowId": 1,
          "userId":  localStorage.getItem('userId'),
          "isOptionSelected": "YES",
          "selectedOptionId": optId
        }
      }
      console.log(apiUrl + '==' + JSON.stringify(objt));
      this.http.post(apiUrl, JSON.stringify(objt)).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }
}
