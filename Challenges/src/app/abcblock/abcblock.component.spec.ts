import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCBlockComponent } from './abcblock.component';

describe('ABCBlockComponent', () => {
  let component: ABCBlockComponent;
  let fixture: ComponentFixture<ABCBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABCBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABCBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
