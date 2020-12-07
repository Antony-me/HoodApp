import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean;
  router: any;
  constructor() { }

  ngOnInit() {
      this.isLoggedIn = sessionStorage.getItem("loggedIn") != undefined;
  }

  logout() {
    localStorage.removeItem("loggedIn");
    this.router.navigate(['/']);
  }
}
