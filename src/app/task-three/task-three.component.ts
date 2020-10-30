import { Component, OnInit } from '@angular/core';
import { ButtonTypeEnum } from '../shared';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css'],
})
export class TaskThreeComponent implements OnInit {
  readonly buttonTypeEnum = ButtonTypeEnum;
  constructor() {}

  ngOnInit(): void {}
}
