import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {
  condition: boolean = true;
  conditionValue: any = "0";
  people: any = [];
  constructor() {
    this.people = [
      {
        name: "Harish",
        age: "28"
      },
      {
        name: "Omkar",
        age: "28"
      },
      {
        name: "Sandeep",
        age: "28"
      },
      {
        name: "shekar",
        age: "28"
      }
    ]
  }

  ngOnInit(): void {
  }

}
