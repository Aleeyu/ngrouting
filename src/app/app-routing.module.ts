import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { Code404Component } from './code404/code404.component';
import { ContentComponent } from './content/content.component';
import { AuxComponent } from './aux/aux.component';
import {LoginGuard} from './guard/login.guard'
import {UnsaveGuard} from './guard/unsave.guard'
import {DetailGuard} from './guard/detail.guard'
import {Product2Component} from './product2/product2.component';
import { NotloginComponent } from './notlogin/notlogin.component';
import { LiveComponent } from './live/live.component';
import { FormComponent } from './form/form.component';
import { ReactformComponent } from './reactform/reactform.component';
import { HttpComponent } from './http/http.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { WatchComponent } from './watch/watch.component';
import { MudelComponent } from './mycomponent/mudel/mudel.component';
const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'aux',component:AuxComponent,outlet:'aux'
  },
  {
    path:'web',component:WebsocketComponent
  },
  {
    path:'mudel',component:MudelComponent
  },
  {
    path:'http',component:HttpComponent
  },
  {
    path:'form',component:FormComponent
  },
  {
    path:'reactform',component:ReactformComponent
  },
  {
    path:'watch',component:WatchComponent
  },
  {
    path:'live',component:LiveComponent
  },
  {
    path:'product2',component:Product2Component
  },
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'detail/:id',component:DetailComponent, resolve:[DetailGuard]
      },
      {
        path:'notlogin',component:NotloginComponent
      },
      {
        path:'content',component:ContentComponent, canActivate:[LoginGuard]
      }
    ]
  },
  {
    path:'**',component:Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsaveGuard, DetailGuard]
})
export class AppRoutingModule { }
