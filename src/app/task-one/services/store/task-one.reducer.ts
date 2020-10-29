import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import * as CustomerActionTypes from './actions/customer.actions';
import { TaskOneState } from './task-one.state';

const initialState: TaskOneState = {
  customer: null,
};

export const taskOneReducer = createReducer(
  initialState,

  on(CustomerActionTypes.seedCustomerSucceeded, (state, { customer }) => ({
    ...state,
    customer,
  }))
);
