import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePresentationRoutingModule } from './page-presentation-routing.module';
import { PagePresentationComponent } from './page-presentation.component';


@NgModule({
  declarations: [
    PagePresentationComponent
  ],
  imports: [
    CommonModule,
    PagePresentationRoutingModule
  ]
})
export class PagePresentationModule { }
