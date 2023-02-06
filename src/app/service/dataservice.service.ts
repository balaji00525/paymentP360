import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
 
  getBillerData(){return this.http.get("http://localhost:3000/biller")}
  getSenderData(){return this.http.get("http://localhost:3000/sender")}
  getRequesterData(){return this.http.get("http://localhost:3000/requester")}
  getOtpData(){return this.http.get("http://localhost:3000/security-code")}
  constructor(private http:HttpClient) { }
}

