import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { threeComponent } from './three/three.component';
import { twoComponent } from './two/two.component';
import { FourComponent } from './four/four.component';
import { Router } from '@angular/router';




const routes: Routes = [
  { path: '', component: threeComponent },
  { path: '2x2', component: twoComponent },
  { path: '4x4', component: FourComponent },
  { path: 'vertodo', component: TodoComponent },
  {path: '3x3', component: threeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
