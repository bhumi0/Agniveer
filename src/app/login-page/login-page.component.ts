import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorService } from '../services/administratorFetch.service';
import { OfficerService } from '../services/officerFetch.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder } from '@angular/forms';

interface Types {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit{

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  types: Types[] = [
    {value: 'adj', viewValue: 'Adjutant'},
    {value: 'secoffr', viewValue: 'Security Officer'},
    {value: 'adm', viewValue: 'Administrator'}
  ];
  user: any;
  static isLoggedIn: boolean = false;

  constructor(private _fb: FormBuilder,
    private router: Router,
    private officerService: OfficerService,
    private administratorService: AdministratorService) {
      this.user = this._fb.group({
        id:'',
        name: '',
        branch:'',
        unit: '',
        password:''
        
      });
     }

     id: any;
  password: string='';
  loginType: string='';
  res:any;

  ngOnInit() {
    LoginPageComponent.isLoggedIn = false;
  }

  login() : void {
    let userCredential = {
      id: this.id,
      password: this.password
    }
    if(this.loginType=='adj' || this.loginType == 'secoffr'){
        this.officerService.validateLogin(userCredential).subscribe(data => {
          if(!data){
            LoginPageComponent.isLoggedIn = false;
            alert("Invalid credentials");
          }
          else{
            LoginPageComponent.isLoggedIn = true;
            this.router.navigateByUrl('/display', { state: {user : data} });
          }
        });
    }
    else if(this.loginType=='adm'){
      this.administratorService.validateLogin(userCredential).subscribe(data => {
        if(!data){
          LoginPageComponent.isLoggedIn = false;
          alert("Invalid credentials");
        }
        else{
          LoginPageComponent.isLoggedIn = true;
          this.router.navigateByUrl('/adm', { state: {user : data} });
        }
      });
    }
    else {
      LoginPageComponent.isLoggedIn = false;
      alert("Invalid credentials");
    }
  }

}
