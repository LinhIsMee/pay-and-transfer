import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListPayComponent } from "./list-pay/list-pay.component";
import { CheckListPayComponent } from './approved-checker/check-list-pay/check-list-pay.component';
import { HeaderCheckerComponent } from './approved-checker/header-checker/header-checker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPayComponent,
    CheckListPayComponent, HeaderCheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
