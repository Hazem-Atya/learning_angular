import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CvDetailPageComponent } from './cvTech/cv-detail-page/cv-detail-page.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { ColorComponent } from './components/color/color.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { LoginComponent } from './components/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';


@NgModule({
  declarations: [
    AppComponent,
    FilsComponent,
    ParentComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    CvDetailPageComponent,
    BackComponent,
    FrontComponent,
    ColorComponent,
    NotFound404Component,
    LoginComponent,
    TestObservableComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
