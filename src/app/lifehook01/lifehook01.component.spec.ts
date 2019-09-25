import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifehook01Component } from './lifehook01.component';

describe('Lifehook01Component', () => {
  let component: Lifehook01Component;
  let fixture: ComponentFixture<Lifehook01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifehook01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifehook01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
