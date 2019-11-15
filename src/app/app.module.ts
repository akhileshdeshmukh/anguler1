import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ContactComponent } from './contact/contact.component';
import { NfComponent } from './nf/nf.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    EditComponent,
    CatagoryComponent,
    ContactComponent,
    NfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'catagory',component:CatagoryComponent},
    {path:'edit',component:EditComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:NfComponent},
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
