import { createAction, props } from '@ngrx/store';

import { AccountModel } from '../models';

export class AccountActionTypes {
  static readonly SEED_ACCOUNT = '[Account] Seed account';
  static readonly SEED_ACCOUNT_SUCCEEDED = '[Account] Seed account succeeded';
}

export const seedAccount = createAction(AccountActionTypes.SEED_ACCOUNT);
export const seedAccountSucceeded = createAction(
  AccountActionTypes.SEED_ACCOUNT_SUCCEEDED,
  props<{ account: AccountModel }>()
);
