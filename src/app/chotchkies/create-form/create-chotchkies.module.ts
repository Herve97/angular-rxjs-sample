import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateChotchkiesComponent } from './create-chotchkies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateChotchkiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateChotchkiesComponent
  ]
})
export class CreateChotchkiesModule { }
