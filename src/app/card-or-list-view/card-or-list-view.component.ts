import {Component, ContentChild, Directive, Input, OnInit, TemplateRef} from '@angular/core';

@Directive({
  selector: '[cardItem]'
})
export class CardItemDirective {
}

@Directive({
  selector: '[listItem]'
})
export class ListItemDirective {
}


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

  @ContentChild(CardItemDirective, {static: false, read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {static: false, read: TemplateRef}) listItemTemplate;


  constructor() {
  }

  ngOnInit() {
  }

}
