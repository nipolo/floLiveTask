import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css'],
})
export class TaskOneComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Customer Details',
        icon: 'pi pi-fw pi-user',
        routerLink: 'customer-details',
      },
      {
        label: 'Account Details',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: 'account-details',
      },
    ];
  }
}
