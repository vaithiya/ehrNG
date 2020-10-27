import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { registervo } from 'src/app/InVo/RegisterInVo';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registervo = new registervo();

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:'',
      email:'',
      password:'',
      confirmpassword:''
    })
  }

  register(): any {
    this.http.post( environment.apiUrl + '/register',  this.registervo ).toPromise().then(
      data => { console.log(data) })
        //this.loginvo.returnData = data.valueOf.name
      console.log(this.registervo);
  }
}
