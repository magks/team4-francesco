import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit/edit.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{path: 'edit/:id', component: EditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
