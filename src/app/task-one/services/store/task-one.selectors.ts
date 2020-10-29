import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskOneState } from './task-one.state';

const getTaskOneState = createFeatureSelector<TaskOneState>('task-one');

export const selectCustomer = createSelector(getTaskOneState, (state) => {
  return state.customer;
});

export const selectAccount = createSelector(getTaskOneState, (state) => {
  return state.account;
});
