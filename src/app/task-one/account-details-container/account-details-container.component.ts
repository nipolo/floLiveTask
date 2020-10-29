import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { seedAccount } from '../services';

import { AccountModel } from '../services/store/models';
import { selectAccount } from '../services/store/task-one.selectors';

@Component({
  selector: 'app-account-details-container',
  templateUrl: './account-details-container.component.html',
  styleUrls: ['./account-details-container.component.css'],
})
export class AccountDetailsContainerComponent implements OnInit {
  account$: Observable<AccountModel>;
  onOffOptions: SelectItem[] = [
    { label: 'Off', value: false },
    { label: 'On', value: true },
  ];

  constructor(private store: Store) {
    this.store.dispatch(seedAccount());
  }

  ngOnInit(): void {
    this.account$ = this.store.select(selectAccount);
  }
}
