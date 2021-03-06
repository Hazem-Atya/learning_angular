import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodoComponent} from './todo/todo/todo.component';
import {CvComponent} from './cvTech/cv/cv.component';
import {FilsComponent} from './fils/fils.component';
import {CvDetailPageComponent} from './cvTech/cv-detail-page/cv-detail-page.component';
import {BackComponent} from './components/back/back.component';
import {ColorComponent} from './components/color/color.component';
import {FrontComponent} from './components/front/front.component';
import {ParentComponent} from './parent/parent.component';
import {NotFound404Component} from './components/not-found404/not-found404.component';
import {LoginComponent} from './components/login/login.component';
import {AddCvComponent} from './cvTech/add-cv/add-cv.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: FilsComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'cv',
    children:
      [
        {path: '', component: CvComponent},
        {path: 'add', component: AddCvComponent,canActivate:[AuthGuard]},
        {path: ':id', component: CvDetailPageComponent},
      ]
  },
  {
    path: 'back',
    component: BackComponent,
    children:
      [
        {path: 'todo', component: TodoComponent},
        {path: ':id', component: CvDetailPageComponent},
      ]
  },
  {
    path: '',
    component: FrontComponent,
    children:
      [
        {path: 'color', component: ColorComponent}
      ]
  },
  {path: '**', component: NotFound404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
