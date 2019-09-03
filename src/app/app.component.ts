import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = 'list';
  items = [
    {
      header: 'Example1',
      content: 'Content1'
    },
    {
      header: 'Example2',
      content: 'Content2'
    }
  ];
}
