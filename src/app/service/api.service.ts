import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getBillerData() { return this.http.get("http://localhost:3000/biller") }
  getSenderData() { return this.http.get("http://localhost:3000/sender") }
  getRequesterData() { return this.http.get("http://localhost:3000/requester") }
<<<<<<< HEAD
  getBillerLiteralData() { return this.http.get("http://localhost:3000/billerliterals") } 
  getSenderLiteralData() { return this.http.get("http://localhost:3000/senderliterals") }
   getRequesterLiteralData() { return this.http.get("http://localhost:3000/requesterliterals") }
=======
  getBillerLiteralData() {return this.http.get("http://localhost:3000/billerliterals")}
  getSenderLiteralData() {return this.http.get("http://localhost:3000/senderliterals")}
  getRequesterLiteralData() {return this.http.get("http://localhost:3000/requesterliterals")}
>>>>>>> 8d63a996bb78c039555335603ac3f77911cfb4a6
}
