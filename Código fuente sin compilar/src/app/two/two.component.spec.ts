import { ComponentFixture, TestBed } from '@angular/core/testing';

import { twoComponent } from './two.component';

describe('twoComponent', () => {
  let component: twoComponent;
  let fixture: ComponentFixture<twoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ twoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(twoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
