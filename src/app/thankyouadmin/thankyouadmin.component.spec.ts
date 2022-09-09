import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouadminComponent } from './thankyouadmin.component';

describe('ThankyouadminComponent', () => {
  let component: ThankyouadminComponent;
  let fixture: ComponentFixture<ThankyouadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankyouadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
