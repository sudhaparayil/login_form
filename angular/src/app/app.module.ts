import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Config} from './config/config';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminService} from './services/admin.service';
const appRoutes: Routes = [
  {path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [Config,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
