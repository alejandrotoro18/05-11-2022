import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { GifsPagesComponentsComponent } from '../../gifs/gifs/gifs-pages-components/gifs-pages-components.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule,SharedModule ],
  declarations: [ AppComponent, HelloComponent,GifsPagesComponentsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
