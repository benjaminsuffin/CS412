import { Component, OnInit, Input } from '@angular/core';
import {IP} from '../ip';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  @Input() result: IP[];

  ngOnInit(): void {
  }

}
