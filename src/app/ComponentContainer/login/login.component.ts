import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginInVo} from '../../InVo/LoginInVo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginvo = new LoginInVo();
  error: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:'',
      password:''
    })
  }

  /**
   * name
   */
  login() {
    this.http.post( environment.apiUrl + '/signin',  this.loginvo ).toPromise().then(
      data => { console.log(data) })
        //this.loginvo.returnData = data.valueOf.name
      console.log(this.loginvo);
  }

}
