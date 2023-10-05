import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpComponent } from './pop-up.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgniveerService } from '../services/agniveerFetch.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let agniveerService: AgniveerService;
  let fixture: ComponentFixture<PopUpComponent>;
  let _fb: FormBuilder,

  empForm = _fb.group({
    id:59071,
    name: 'echoooo',
    trade: 'elect',
    unit: '7TS',
    recommendation:true,
    bookout:true,
    bookedIn:true,
    postIn:'2023-03-10T18:30:00.000Z',
    late:false,
    bookoutDetails:[
      {
        bookoutDate:'2023-03-14T05:00:13.071Z',
        bookinDate:'2023-03-14T09:00:13.071Z'
      }
    ],
    imgUrl:'assets/male4.jpg'
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, MatSnackBarModule],
      declarations: [ PopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
  
