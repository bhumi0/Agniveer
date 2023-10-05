import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrEditComponent } from './offr-edit.component';
import { HttpClientModule } from '@angular/common/http';

describe('OffrEditComponent', () => {
  let component: OffrEditComponent;
  let fixture: ComponentFixture<OffrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ OffrEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
