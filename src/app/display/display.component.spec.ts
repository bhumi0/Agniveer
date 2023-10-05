import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { HttpClientModule } from '@angular/common/http';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ DisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
