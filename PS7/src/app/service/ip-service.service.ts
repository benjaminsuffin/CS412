import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/ps5b?name=';

  getData(address: string): any{

    return this.http.post(this.url + address, {ip: address});
  }

}
