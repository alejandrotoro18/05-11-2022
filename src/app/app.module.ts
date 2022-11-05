import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { GifsModule } from '../../gifs/gifs/gifs.module';




@NgModule({
  imports:      [ BrowserModule, FormsModule,SharedModule,GifsModule ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
