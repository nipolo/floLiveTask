import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FloButton } from './flo-button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonTypeEnum } from './flo-button-type.enum';

describe('Button', () => {
  let button: FloButton;
  let fixture: ComponentFixture<FloButton>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [FloButton],
    });

    fixture = TestBed.createComponent(FloButton);
    button = fixture.componentInstance;
  });

  it('should have background color "#696969" when disabled is true', () => {
    button.disabled = true;
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.query(By.css('div'));
    expect(buttonEl.nativeElement.style.backgroundColor).toBe(
      'rgb(105, 105, 105)'
    );
  });

  it('should have height and width 15px and 50 px for MEDIUM', () => {
    button.type = ButtonTypeEnum.MEDIUM;
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.query(By.css('div'));
    expect(button.height).toBe('15px');
    expect(button.width).toBe('50px');
  });

  it('should have background color "#696969" when hovered', () => {
    const divEl = fixture.debugElement.query(By.css('div'));

    divEl.triggerEventHandler('mouseover', {});
    fixture.detectChanges();

    expect(divEl.nativeElement.style.backgroundColor).toBe('rgb(29, 48, 48)');

    divEl.triggerEventHandler('mouseout', {});
    fixture.detectChanges();

    expect(divEl.nativeElement.style.backgroundColor).toBe('rgb(47, 79, 79)');
  });

  it('should emit on click', () => {
    spyOn(button.onClick, 'emit');

    const divEl = fixture.debugElement.query(By.css('div'));
    divEl.triggerEventHandler('click', {});

    expect(button.onClick.emit).toHaveBeenCalled();
  });
});
