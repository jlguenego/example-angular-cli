import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from '../main/main.module';

@NgModule({
  imports: [
    CommonModule,
    MainModule
  ],
  declarations: [HeaderComponent, BodyComponent, FooterComponent],
  exports: [HeaderComponent, BodyComponent, FooterComponent],
})
export class LayoutModule { }
