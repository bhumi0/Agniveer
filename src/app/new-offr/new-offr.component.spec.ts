// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NewOffrComponent } from './new-offr.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { Router } from 'express';
// import { ActivatedRoute } from '@angular/router';
// import { Dialog } from '@angular/cdk/dialog';

// describe('NewOffrComponent', () => {
//   let component: NewOffrComponent;
//   let fixture: ComponentFixture<NewOffrComponent>;

//   beforeEach(async () => {
//     let data = "adm";
//     await TestBed.configureTestingModule({
//       imports: [HttpClientModule, ReactiveFormsModule, MatSnackBarModule, MatDialogModule,Router, MAT_DIALOG_DATA,ActivatedRoute],
//       declarations: [ NewOffrComponent ],
//       providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(NewOffrComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should be called', () => {
//     component.ngOnInit();
//     expect(component.ngOnInit).toHaveBeenCalled();
//   })
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOffrComponent } from './new-offr.component';

describe('NewOffrComponent', () => {
  let component: NewOffrComponent;
  let fixture: ComponentFixture<NewOffrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOffrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOffrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
