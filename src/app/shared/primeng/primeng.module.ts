import { NgModule } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CarouselModule,
    TabMenuModule,
    PanelMenuModule,
    MenuModule,
    InputTextModule,
    TableModule,
    SelectButtonModule,
    InputTextareaModule,
    ButtonModule,
  ],
  providers: [],
})
export class PrimengModule {}
