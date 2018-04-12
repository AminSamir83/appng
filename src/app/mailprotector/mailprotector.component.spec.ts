import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailprotectorComponent } from './mailprotector.component';

describe('MailprotectorComponent', () => {
  let component: MailprotectorComponent;
  let fixture: ComponentFixture<MailprotectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailprotectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailprotectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
