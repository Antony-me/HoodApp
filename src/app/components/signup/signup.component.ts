import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})

export class SignupComponent implements OnInit {

  signup;

  constructor(private UserService:UserService) { }

  ngOnInit(){
    this.signup = {
      username:"",
      email:"",
      password:""
    }
  }

}
