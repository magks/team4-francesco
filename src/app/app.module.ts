import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component'
=======
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> apiV2

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EditComponent
=======
    AddFormComponent
>>>>>>> apiV2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> apiV2git 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
