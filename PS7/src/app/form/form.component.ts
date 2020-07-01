import { Component, OnInit, Input} from '@angular/core';
import {IpServiceService as ApiCall} from '../service/ip-service.service';
import {IP} from '../ip';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private api: ApiCall) {}
  @Input() ip;
  addr: IP[];
  ngOnInit(): void {}
  getCityAndRegion(): void {
    this.api.getData(this.ip).subscribe(response => {
      this.addr = [response, response];
    });
  }

}
