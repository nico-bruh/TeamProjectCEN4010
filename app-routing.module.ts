
import { ReviewPageComponent } from './review-page/review-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path:'review-page',component: ReviewPageComponent },
  { path:'browse/:id',component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }