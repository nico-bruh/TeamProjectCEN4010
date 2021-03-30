import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookBrowsingComponent } from './book-browsing/book-browsing.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'browse',component: BookBrowsingComponent },
  { path:'browse/:isbn',component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
