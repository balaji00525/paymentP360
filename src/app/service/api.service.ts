import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ReturnStatement } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }


getBillerData():Observable<any[]>{
  return this.http.get<any[]>("http://localhost:3000/biller")
}

createBillerData(billerData):Observable<any>{
  return this.http.post("http://localhost:3000/biller",billerData)
}

updateBillerData(modifiedData):Observable<any>{
  return this.http.put(`http://localhost:3000/biller/${modifiedData.id}`,modifiedData)
}

getSenderData():Observable<any[]>{
  return this.http.get<any[]>("http://localhost:3000/sender")
}

createSenderData(sender):Observable<any>{
  return this.http.post("http://localhost:3000/sender",sender)
}

updateSenderData(modifiedData):Observable<any>{
  return this.http.put(`http://localhost:3000/sender/${modifiedData.id}`,modifiedData)
}

getRequesterData():Observable<any[]>{
  return this.http.get<any[]>("http://localhost:3000/requester")
}

createRequesterData(requester):Observable<any>{
  return this.http.post("http://localhost:3000/requester",requester)
}

updateRequesterData(modifiedData):Observable<any>{
  return this.http.put(`http://localhost:3000/requester/${modifiedData.id}`,modifiedData)
}







  // getBillerData() { return this.http.get("http://localhost:3000/biller") }
  // getSenderData() { return this.http.get("http://localhost:3000/sender") }
  // getRequesterData() { return this.http.get("http://localhost:3000/requester") }





  getBillerLiteralData() {return this.http.get("http://localhost:3000/billerliterals")}
  getSenderLiteralData() {return this.http.get("http://localhost:3000/senderliterals")}
  getRequesterLiteralData() {return this.http.get("http://localhost:3000/requesterliterals")}
}
