import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, Subject } from 'rxjs';
import { tap, exhaustMap } from 'rxjs/operators';

import * as customerActions from '../actions/customer.actions';
import { SeedService } from '../../seed.service';
@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private seedService: SeedService) {}

  seedCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.seedCustomer),
      exhaustMap(() => {
        const customer = this.seedService.getCustomer();
        return of(customerActions.seedCustomerSucceeded({ customer }));
      })
    )
  );
}
