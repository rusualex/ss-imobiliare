import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthLoginInfo} from "../../model/auth-login-info";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const UserNameValidation = [
  Validators.required,
  Validators.pattern('^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
];

export const PasswordValidation = [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(24),
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: string = "username";
  password: string = "password";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;


  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = this.formBuilder.group(
      {
        password: new FormControl('', PasswordValidation),
        username: new FormControl('', UserNameValidation)
      }
    )
    ;
  }

  ngOnInit() {
  }

  getUsrname(event) {
    console.log(event.target.value);
    this.username = event.target.value;
  }

  getPassword(event) {
    this.password = event.target.value;
  }

  matcher = new MyErrorStateMatcher();

  hide = true;

  onSubmit() {
    console.log(this.form);
    this.loginInfo = new AuthLoginInfo(
      this.username,
      this.password);
    console.log(this.loginInfo);
    this.showSnackbar('Login successful!');
    this.router.navigate(['home']);
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['snackbar'],
    });
  }

  reloadPage() {
    window.location.reload();
  }

}
