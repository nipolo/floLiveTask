import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ButtonTypeEnum } from './flo-button-type.enum';

@Component({
  selector: 'flo-button',
  styleUrls: ['./flo-button.component.css'],
  template: `
    <div
      [style]="styles"
      (click)="onClick.emit($event)"
      [style.background-color]="currentBackgroundColor"
      (mouseover)="isHovered = true"
      (mouseout)="isHovered = false"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloButton {
  readonly backgroundColor: string = '#2F4F4F';
  readonly backgroundColorOnHover: string = '#1d3030';

  isHovered = false;

  @Input() type: ButtonTypeEnum = ButtonTypeEnum.SMALL;

  @Input() disabled: boolean;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  get currentBackgroundColor(): string {
    return this.disabled ? '#696969' : this.isHovered ? '#1d3030' : '#2F4F4F';
  }

  get styles() {
    return {
      width: this.width,
      height: this.height,
      'font-size': this.fontSize,
      'border-radius': this.borderRadius,
      'background-color': this.currentBackgroundColor,
    };
  }

  get borderRadius(): string {
    if (this.type === ButtonTypeEnum.SMALL) {
      return '5px';
    }
    return '0px';
  }

  get fontSize(): string {
    switch (this.type) {
      case ButtonTypeEnum.LARGE:
        return '17px';
      case ButtonTypeEnum.MEDIUM:
        return '12px';
      default:
        return '9px';
    }
  }
  get height(): string {
    switch (this.type) {
      case ButtonTypeEnum.LARGE:
        return '20px';
      case ButtonTypeEnum.MEDIUM:
        return '15px';
      default:
        return '10px';
    }
  }
  get width(): string {
    switch (this.type) {
      case ButtonTypeEnum.LARGE:
        return '80px';
      case ButtonTypeEnum.MEDIUM:
        return '50px';
      default:
        return '40px';
    }
  }
}
