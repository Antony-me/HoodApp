import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;

  constructor( private userService: UserService, 
    private router:Router ) { }

  ngOnInit(): void {
    this.input={
      'username':'',
      'password':'',
    }
  }

  onLogin() {
    this.userService.loginHere(this.input).subscribe((res: Response) => {
      console.log(res)
      localStorage.setItem('accessToken', res['token'])
      this.router.navigate(['/signup'])
      // console.log(res['access'])
    }, error => {
      console.log('error')
    })
  }
}
