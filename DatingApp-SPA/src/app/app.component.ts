import { AuthServiceService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jwHelper = new JwtHelperService();

  title = 'DatingApp-SPA';
constructor(private authServiceService: AuthServiceService){

}
  ngOnInit(): void {
    const token=localStorage.getItem('token');
    if(token){
      this.authServiceService.decodedToken=this.jwHelper.decodeToken(token);
    }
  }
}
