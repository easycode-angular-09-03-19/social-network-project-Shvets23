import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  date;
  strDate: string;
  globalDate;
  monthNames = [
    "Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May", 
    "Jun",
    "Jul", 
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov", 
    "Dec"
];
  @Input() challenge;
  constructor() { }

  ngOnInit() {
    this.date = new Date(this.challenge.start_date);
    // this.globalDate = new Date(this.date);
    this.strDate = `${this.monthNames[this.date.getMonth()]} ${this.date.getDay()}  ${this.date.getFullYear()}`
  }

}
