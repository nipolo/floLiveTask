import { createAction, props } from '@ngrx/store';

import { CustomerModel } from '../models';

export class CustomerActionTypes {
  static readonly SEED_CUSTOMER = '[Customer] Seed customer';
  static readonly SEED_CUSTOMER_SUCCEEDED =
    '[Customer] Seed customer succeeded';
}

export const seedCustomer = createAction(CustomerActionTypes.SEED_CUSTOMER);
export const seedCustomerSucceeded = createAction(
  CustomerActionTypes.SEED_CUSTOMER_SUCCEEDED,
  props<{ customer: CustomerModel }>()
);
