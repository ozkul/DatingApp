import { AuthServiceService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in sucessfully');
    }, error => {console.log(error);
  });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
