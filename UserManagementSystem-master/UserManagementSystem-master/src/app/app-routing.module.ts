import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NopageComponent } from './nopage/nopage.component';
import { OptionsComponent } from './options/options.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent,
    // pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    children:[
      {path:'register', component:RegisterComponent},
    ]
    
  },
  {
    path:"contact",
    component:ContactComponent,
    // pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    // pathMatch:'full'
    children:[
      {path:'login',component:LoginComponent},
    ]
  },
  {
    path:"success",
    component:SuccessComponent,
  },
  {
    path:"userlist",
    component:UserListComponent,
  },
  {
    path:'options',
    component:OptionsComponent,
    children:[
      {path:'userlist',component:UserListComponent},
      {path:'adduser',component:AdduserComponent},
      {path:'deleteuser',component:DeleteuserComponent}
    ]
  },
  {
    path:'adduser',
    component:AdduserComponent,
  },
  {
    path:'deleteuser',
    component:DeleteuserComponent,
  },
  {
    path:'**',
    component:NopageComponent,
  },
  {
    path:'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
