import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { AddFormComponent } from './add/add-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookListComponent } from './Book-List/Book-List.component';

const routes: Routes = [
  { path: 'list', component:  BookListComponent },
  { path: 'edit/:id', component: EditComponent, data : {} },
  { path: 'add', component: AddFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
