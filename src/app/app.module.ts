import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardItemDirective, CardOrListViewComponent, ListItemDirective} from './card-or-list-view/card-or-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    CardItemDirective,
    ListItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
