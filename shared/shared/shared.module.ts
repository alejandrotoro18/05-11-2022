import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsPagesComponentsComponent } from '../../gifs/gifs/gifs-pages-components/gifs-pages-components.component';

@NgModule({
  imports: [
    CommonModule,
  
  ],
  exports:[SidebarComponent],
  declarations: [SidebarComponent]
})
export class SharedModule { }