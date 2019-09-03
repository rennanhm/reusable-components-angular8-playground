import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.css']
})
export class CardOrListViewComponent implements OnInit {

  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: 'card' | 'list' = 'card';

  constructor() {
  }

  ngOnInit() {
  }

}
