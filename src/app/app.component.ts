import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Task1', routerLink: 'task1' },
      { label: 'Task2', routerLink: 'task2' },
      { label: 'Task3', routerLink: 'task1' },
    ];
  }
}
