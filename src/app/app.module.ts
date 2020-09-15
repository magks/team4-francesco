import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditComponent } from './edit/edit.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add/add-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component'
import { BookWebApiService } from './service/book.service'

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookWebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
