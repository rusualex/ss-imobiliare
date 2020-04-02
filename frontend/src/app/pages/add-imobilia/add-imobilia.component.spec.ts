import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImobiliaComponent } from './add-imobilia.component';

describe('AddImobiliaComponent', () => {
  let component: AddImobiliaComponent;
  let fixture: ComponentFixture<AddImobiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImobiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImobiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
