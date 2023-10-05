import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryComponent } from './new-entry.component';
import { HttpClientModule } from '@angular/common/http';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ NewEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
