import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
const routes: Routes = [

   {path:'',redirectTo:'/register',pathMatch:'full'},
   {
   path:'register',component:RegisterComponent,
  },
  {
    path:'registerlist',component:RegisterlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
