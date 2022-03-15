
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetail = { email: "", password: "" };
  user: any;

  constructor(private root: ActivatedRoute,
    private router: Router,
    private service: DataService,
    private auth: AuthService) { }

  ngOnInit() {

  }
  SignIn() {
    // console.log(this.userdetail)
    if (this.userdetail.email.length == 0) {
      alert('Enter email');
    } else if (this.userdetail.password.length == 0) {
      alert('Enter password');
    }
    else {

      let observableResult = this.service.login(this.userdetail);
      observableResult.subscribe((result) => {
        // console.log(result);
        this.user = result;
            if (this.user.role == 'ADMIN') {
            sessionStorage['login_status'] = '1';
            localStorage.setItem('user',JSON.stringify(this.user));
            localStorage.setItem('flag', 'true');
            this.router.navigate(['/admin']);
          }
          else if (this.user.role == 'DOCTOR') {

            sessionStorage['login_status'] = '1';
            localStorage.setItem('user',JSON.stringify(this.user));
            localStorage.setItem('flag', 'true');
            this.router.navigate(['/drprofile']);
          }
          else if (this.user.role == 'PATIENT') {
            sessionStorage['login_status'] = '1';
            localStorage.setItem('user',JSON.stringify(this.user));
            localStorage.setItem('flag', 'true');
            this.router.navigate(['/home']);
          }
          else
          {
            alert("invalid login");
            this.router.navigate(['/login']);
          }
      })
    }
  }
  onSignup() {
    this.router.navigate(['/register']);
  }
}