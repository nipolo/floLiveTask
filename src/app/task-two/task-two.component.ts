import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { YesNoEnum } from '../shared';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css'],
})
export class TaskTwoComponent implements OnInit {
  readonly yesNoEnum = YesNoEnum;
  uploadedFiles: any[] = [];
  passportNumbers: number[] = [1111, 2222, 3333];
  passportNumbersFiltered: number[] = [];

  dynamicForm: FormGroup;
  yesNotSentControl: FormControl;
  commentControl: FormControl;
  sendDateControl: FormControl;
  passportNumberControl: FormControl;
  urgentDocumentControl: FormControl;
  deadlineControl: FormControl;

  get alreadySent(): boolean {
    return this.yesNotSentControl.value === YesNoEnum.YES;
  }

  get notSent(): boolean {
    return this.yesNotSentControl.value === YesNoEnum.NO;
  }

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group(
      {
        yesNotSent: this.yesNotSentControl = this.fb.control(-1),
        sendDate: this.sendDateControl = this.fb.control(''),
        comment: this.commentControl = this.fb.control(''),
        passportNumber: this.passportNumberControl = this.fb.control(''),
        urgentDocument: this.urgentDocumentControl = this.fb.control(-1),
        deadline: this.deadlineControl = this.fb.control(''),
      },
      { validators: [this.formValidator(() => this.uploadedFiles)] }
    );
  }

  ngOnInit(): void {}

  onSelectedDocuments(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.dynamicForm.updateValueAndValidity();
  }

  onClearedDocuments(event) {
    this.uploadedFiles = [];
    this.dynamicForm.updateValueAndValidity();
  }

  filterPassportNumber($event) {
    this.passportNumbersFiltered = this.passportNumbers.filter((p) =>
      p.toString().includes($event.query)
    );
  }

  private formValidator(uploadedFilesFactory: () => any[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const uploadedFiles = uploadedFilesFactory();
      if (control.value.yesNotSent === YesNoEnum.YES) {
        if (!control.value.sendDate || uploadedFiles.length === 0) {
          return { isValid: false };
        }
      }

      if (control.value.yesNotSent === YesNoEnum.NO) {
        if (
          !control.value.passportNumber ||
          control.value.urgentDocument === -1
        ) {
          return { isValid: false };
        }

        if (
          control.value.urgentDocument === YesNoEnum.YES &&
          !control.value.deadline
        ) {
          return { isValid: false };
        }
      }
      // If there is no validation failure, return null
      return null;
    };
  }
}
