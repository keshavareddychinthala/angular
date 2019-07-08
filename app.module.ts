import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ToysComponent } from './toys/toys.component';
import { DetailsComponent } from './details/details.component';

 const myroutes:Routes=[
{
  path:'',
 redirectTo:'login',
 pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent
},

{
  path:'home',
  component: HomeComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'toys',
  component:ToysComponent
},
{
  path:'toys/:id',
  component:DetailsComponent
},
{
  path:'**',
  component:ErrorComponent
}

 ]


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    ServicesComponent,
    ErrorComponent,
    LoginComponent,
    ToysComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myroutes)
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
