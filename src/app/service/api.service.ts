import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBillerData() { return this.http.get("http://localhost:3000/biller") }
  getSenderData() { return this.http.get("http://localhost:3000/sender") }
  getRequestorData() { return this.http.get("http://localhost:3000/Requestor") }
  getBillerHeaderData(){ return this.http.get("http://localhost:2000/billerheader")}
  getSenderHeaderData(){ return this.http.get("http://localhost:2000/senderheader")}
  getRequestorHeaderData(){return this.http.get("http://localhost:2000/requestorheader")}
  getBillerLiteralData(){return this.http.get("http://localhost:1000/billerliterals")}
  getSenderLiteralData(){return this.http.get("http://localhost:1000/senderliterals")}
  getRequestorLiteralData(){return this.http.get("http://localhost:1000/requestorliterals")}
}
