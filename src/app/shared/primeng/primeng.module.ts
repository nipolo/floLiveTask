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
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';

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
    RadioButtonModule,
    FileUploadModule,
    CalendarModule,
    AutoCompleteModule,
  ],
  providers: [],
})
export class PrimengModule {}
