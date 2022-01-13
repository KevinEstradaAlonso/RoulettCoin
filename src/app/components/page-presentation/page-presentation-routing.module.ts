import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePresentationComponent } from './page-presentation.component';

const routes: Routes = [{ path: '', component: PagePresentationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePresentationRoutingModule { }
