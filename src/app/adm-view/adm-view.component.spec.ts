import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmViewComponent } from './adm-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OfficerService } from '../services/officerFetch.service';
import { CoreService } from '../core/core.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

describe('AdmViewComponent', () => {
  let component: AdmViewComponent;
  let fixture: ComponentFixture<AdmViewComponent>;

  beforeEach(async () => {
    let data;
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialog,OfficerService,CoreService,Router,ActivatedRoute],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }],
      declarations: [ AdmViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
