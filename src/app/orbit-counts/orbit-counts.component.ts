import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  satelliteCount(satellites: Satellite[], type: string) {
    let count = 0;
    for (let i = 0; i < satellites.length; i++) {
      if (satellites[i].type === type) {
        count++;
      }
    }
    return count;
  }

}
