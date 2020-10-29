import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { TaskOneRoutingModule } from './task-one-routing.module';
import { CustomerEffects, taskOneReducer, SeedService } from './services';

import { TaskOneComponent } from './task-one.component';
import { CustomerDetailsContainerComponent } from './customer-details-container';
import { AccountDetailsContainerComponent } from './account-details-container';

@NgModule({
  imports: [
    CommonModule,
    TaskOneRoutingModule,
    SharedModule,
    StoreModule.forFeature('task-one', taskOneReducer),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  declarations: [
    TaskOneComponent,
    CustomerDetailsContainerComponent,
    AccountDetailsContainerComponent,
  ],
  providers: [{ provide: SeedService }],
})
export class TaskOneModule {}
