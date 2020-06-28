import { Component, OnInit } from '@angular/core';
import { IP } from './ip';
import {ADDRS} from './ipMOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS6';
  addrs: IP[] = ADDRS;
  selectedIP: IP;
  constructor(){}
  ngOnInit(): void{
  }
  showCityAndRegion(addr: string): void {
    this.selectedIP = this.addrs.find(ipAddress => ipAddress.address === addr);
  }
}
