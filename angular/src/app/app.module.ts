import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import {Config} from './config/config';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminService} from './services/admin.service';
import { ProfileComponent } from './components/profile/profile.component';
const appRoutes: Routes = [
  {path: 'login', component: HomeComponent },
  {path: 'profile/:id', component: ProfileComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AdminService,Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
