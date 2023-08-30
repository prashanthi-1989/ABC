import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  shouldShow: boolean = true;
  orders: any = [];
  constructor(private testSrv: TestService) {
    console.log("AAAAAA", this);
    this.orders = ["Apples", "Bananas", "Oranges", "Grapes"];
  }

  ngOnInit(): void {
  }

}
