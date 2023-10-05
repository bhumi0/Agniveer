import { Component, Inject, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfficerService } from '../services/officerFetch.service';
import { CoreService } from '../core/core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdmViewComponent } from '../adm-view/adm-view.component';

interface Types {
  value: string;
  viewValue: string;
}
interface Image {
  id:string,
  value:string,
  image: string
}
interface Ranks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-offr',
  templateUrl: './new-offr.component.html',
  styleUrls: ['./new-offr.component.scss']
})
export class NewOffrComponent implements OnInit {
  empForm: FormGroup;

  ranks: Ranks [] = [
    {value: 'Fg Offr', viewValue: 'Fg Offr'},
    {value: 'Flt Lt', viewValue: 'Flt Lt'},
    {value: 'Sq Ldr', viewValue: 'Sq Ldr'},
    {value: 'Wg Cdr', viewValue: 'Wg Cdr'},
    {value: 'Gp Capt', viewValue: 'Gp Capt'},
    {value: 'Air Cmde', viewValue: 'Air Cmde'},
    {value: 'Air Vice Marshal', viewValue: 'Air Vice Marshal'},
    {value: 'Air Marshal', viewValue: 'Air Marshal'}
  ]
  types: Types[] = [
    {value: 'adj', viewValue: 'Adjutant'},
    {value: 'secoffr', viewValue: 'Security Officer'}
  ];

  branch: String[] = [
    'AE(L)',
    'AE(M)',
    'F(P)',
    'Adm',
    'Lgs',
    'Met'
  ]

  unit: String[] = [
    '20SQN',
    '30SQN',
    '7TS',
    '9TS',
    '2Wing'
  ]

  imgUrls: Image[] = [
    {id:'1',value:'male1', image:'assets/male1.jpg'},
    {id:'2',value:'male2', image:'assets/male2.png'},
    {id:'3',value:'male3', image:'assets/male3.png'},
    {id:'4',value:'male4', image:'assets/male4.jpg'},
    {id:'5',value:'female1', image:'assets/female1.png'},
    {id:'6',value:'female2', image:'assets/female2.png'},
    {id:'7',value:'female3', image:'assets/female3.png'},
    {id:'8',value:'female4', image:'assets/female4.png'}
  ]

  rank:string =''
  type: string = ''
  imgUrl: string = ''

  constructor(
    private _fb: FormBuilder,
    private officerService: OfficerService,
    private _coreService: CoreService,
    private router: Router,
    private _dialogRef: MatDialogRef<AdmViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private activatedRoute:ActivatedRoute
  ){
    this.empForm = this._fb.group({
    id:'',
    rank:'',
    name:'',
    branch:'',
    unit:'',
    type:'',
    imgUrl:'',
    password:''
  });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(event) {
    event.stopPropagation();
    if (this.empForm.valid) {
      this.empForm.value.name = this.empForm.value.rank + " " + this.empForm.value.name;
      this.officerService.addOffr(this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Security Officer added successfully');
          this._dialogRef.close(true);
          },
        error: (err: any) => {
          console.error(err);
          },
      });
    }
  }
}
