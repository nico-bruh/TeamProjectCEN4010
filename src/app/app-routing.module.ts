import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookBrowsingComponent } from './book-browsing/book-browsing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthorLinkComponent } from './author-link/author-link.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'browse',component: BookBrowsingComponent },
  { path:'browse/:isbn',component: BookDetailsComponent },
  { path: 'author/:author', component: AuthorLinkComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
