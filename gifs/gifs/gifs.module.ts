import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponentsComponent } from './gifs-pages-components/gifs-pages-components.component';

@NgModule({
  imports: [
    CommonModule,GifsPagesComponentsComponent
  ],
  export:[GifsPagesComponentsComponent],
  declarations: [GifsPagesComponentsComponent]
})
export class GifsModule { }