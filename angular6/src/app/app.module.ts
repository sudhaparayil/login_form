import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Config} from './config/config';

import { AdminService} from './services/admin.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule,MatSelectModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataDashboardComponent } from './components/data-dashboard/data-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'first-page', component: FirstPageComponent},
  { path: 'second-page', component: SecondPageComponent},
  { path: 'third-page', component: ThirdPageComponent},
{ path: 'data-table', component: DataTableComponent},
{ path: 'data-dashboard', component: DataDashboardComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    DataTableComponent,
    DataDashboardComponent,
    LoginComponent,
    RegisterComponent,

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [AdminService,Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
