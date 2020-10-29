import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import * as CustomerActionTypes from './actions/customer.actions';
import * as AccountActionTypes from './actions/account.actions';
import { TaskOneState } from './task-one.state';

const initialState: TaskOneState = {
  customer: null,
  account: null,
};

export const taskOneReducer = createReducer(
  initialState,

  on(CustomerActionTypes.seedCustomerSucceeded, (state, { customer }) => ({
    ...state,
    customer,
  })),
  on(AccountActionTypes.seedAccountSucceeded, (state, { account }) => ({
    ...state,
    account,
  }))
);
