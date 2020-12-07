import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})

export class SignupComponent implements OnInit {

  signup;

  constructor(private UserService:UserService,  private router: Router,) { }

  ngOnInit(){
    this.signup = {
      email:"",
      username:"",
      is_staff: false,
      password:""
    }
  }

  signupUser(){
    this.UserService.AddUser(this.signup).subscribe(
      response => {
        alert('user'  + this.signup.username +  'has been created');
        this.router.navigate(['/login']);
      },
      error => console.log('error', error)
    )
  }
}
