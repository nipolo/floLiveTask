import { NgModule } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CarouselModule,
    TabMenuModule,
    PanelMenuModule,
    MenuModule,
    InputTextModule,
  ],
  providers: [],
})
export class PrimengModule {}
