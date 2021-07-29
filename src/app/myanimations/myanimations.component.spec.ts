import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyanimationsComponent } from './myanimations.component';

describe('MyanimationsComponent', () => {
  let component: MyanimationsComponent;
  let fixture: ComponentFixture<MyanimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyanimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyanimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
