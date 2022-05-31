import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonsModalPageRoutingModule } from './sons-modal-routing.module';

import { SonsModalPage } from './sons-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonsModalPageRoutingModule
  ],
  declarations: [SonsModalPage]
})
export class SonsModalPageModule {}
