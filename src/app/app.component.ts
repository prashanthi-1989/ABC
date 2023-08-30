import { Component } from '@angular/core';
import { TestService } from './Services/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechWish';
  // private dataService: TestService;

  constructor(private http: HttpClient) {
    // this.dataService = new TestService(this.http);
    console.log("App", this);
    // this.orders = ["Apples", "Bananas", "Oranges", "Grapes"];
    // this.getData();

  }


}
