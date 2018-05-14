import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './detail/detail.component';
import { Code404Component } from './code404/code404.component';
import { ContentComponent } from './content/content.component';
import { AuxComponent } from './aux/aux.component';
import { NotloginComponent } from './notlogin/notlogin.component';
import { MenuComponent } from './mycomponent/menu/menu.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import { ProductService2 } from './shared/product2.service';
import { CommentsService } from './shared/comments.service';
import { MypipePipe } from './pipe/mypipe.pipe';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { LiveComponent } from './live/live.component';
import { FormComponent } from './form/form.component';
import { ReactformComponent } from './reactform/reactform.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { HttpComponent } from './http/http.component';
import { HttpModule } from '@angular/http';
import { WebsocketComponent } from './websocket/websocket.component';
import { ProsService } from './shared/pros.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { WatchComponent } from './watch/watch.component';
import {HiglightDirective} from './directives/higlight.directive';
import { HideElDirective } from './directives/hide-el.directive';
import { MudelComponent } from './mycomponent/mudel/mudel.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    CarouselComponent,
    NavbarComponent,
    DetailComponent,
    Code404Component,
    ContentComponent,
    AuxComponent,
    NotloginComponent,
    MenuComponent,
    Product2Component,
    MypipePipe,
    ChildComponent,
    OtherComponent,
    LiveComponent,
    FormComponent,
    ReactformComponent,
    MobileValidatorDirective,
    HttpComponent,
    WebsocketComponent,
    WatchComponent,
    HiglightDirective,
    HideElDirective,
    MudelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [{
    provide: ProductService,
    useFactory:(logger:LoggerService, appConfig)=>{
      if (appConfig.isDEV) {
        return new ProductService(logger)
      }else {
        return new ProductService2(logger)
      }
    },
    deps:[LoggerService, 'APP_CONFIG']
  },
  LoggerService,
  {
    provide: 'APP_CONFIG',useValue: {isDEV: true}
  }, 
  CommentsService,
  ProsService,
  {provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
