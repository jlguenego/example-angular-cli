import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../main/home/home.component';
import { AboutComponent } from '../main/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [HomeComponent, AboutComponent],
  exports: [MainRoutingModule]
})
export class MainModule { }
