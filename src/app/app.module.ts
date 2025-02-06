import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CaculateComponent } from './caculate/caculate.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CaculateComponent, ResultComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
})
export class AppModule {}
