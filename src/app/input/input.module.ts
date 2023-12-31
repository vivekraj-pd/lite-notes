import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';
import { QuillModule } from 'ngx-quill';
import { DisplayPageModule } from '../display/display.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPageRoutingModule,
    QuillModule,
    DisplayPageModule,
  ],
  declarations: [InputPage]
})
export class InputPageModule { }
