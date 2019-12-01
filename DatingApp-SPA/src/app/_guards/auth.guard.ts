import { AlertifyService } from "./../_services/alertify.service";
import { AuthServiceService } from "./../_services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authServiceService: AuthServiceService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  canActivate(): boolean {
    if (this.authServiceService.loggedIn()) {
      return true;
    }
    this.alertifyService.error('You shall not pass!!');
    this.router.navigate(['/homes']);
    return false;
  }
}
