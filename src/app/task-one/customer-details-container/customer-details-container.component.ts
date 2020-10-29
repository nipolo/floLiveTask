import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { seedCustomer } from '../services';

import { CustomerModel } from '../services/store/models';
import { selectCustomer } from '../services/store/task-one.selectors';

@Component({
  selector: 'app-customer-details-container',
  templateUrl: './customer-details-container.component.html',
  styleUrls: ['./customer-details-container.component.css'],
})
export class CustomerDetailsContainerComponent implements OnInit {
  customer$: Observable<CustomerModel>;

  constructor(private store: Store) {
    this.store.dispatch(seedCustomer());
  }

  ngOnInit(): void {
    this.customer$ = this.store.select(selectCustomer);
  }
}
