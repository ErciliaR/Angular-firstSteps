import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  
  {path: "body/:about", component: BodyComponent},
  {path: "body/:action", component: BodyComponent},
  {path: "body/:leaders", component: BodyComponent},
  {path: "footer", component: FooterComponent},
  {path: "home", component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
