import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { SignupService } from 'src/app/signup.service';
import { Viewhood } from 'src/app/viewhood'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})

export class SignupComponent implements OnInit {
  hoods=[];
  signup;

  constructor(private UserService:UserService, 
    private signupService: SignupService) { }

  ngOnInit(){
    this.signup = {
      email:"",
      username:"",
      is_staff: false,
      password:"",
      neighborhood:1
    }
    this.signupService.getAllHoods().subscribe((res: Response) => {
      
      Object.entries(res).forEach(result => {
        const [_, value] = result;
        let id = value['id']
        let name = value['name']
        console.log(name)
       
        let nameObject = new Viewhood(id, name)
        this.hoods.push(nameObject)
      })
  })
}

  signupUser(){
    this.UserService.AddUser(this.signup).subscribe(
      response => {
        alert('user ' + this.signup.username + ' has been created')
      },
      error => console.log('error', error)
    )
  }
}
