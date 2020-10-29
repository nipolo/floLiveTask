import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

import * as customerActions from '../actions/customer.actions';
import * as accountActions from '../actions/account.actions';
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

  seedAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(accountActions.seedAccount),
      exhaustMap(() => {
        const account = this.seedService.getAccount();
        return of(accountActions.seedAccountSucceeded({ account }));
      })
    )
  );
}
