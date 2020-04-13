import {Component, OnInit} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SignUpInfo} from "../../model/sign-up-info";
import {LoginService} from "../../service/login.service";
import {UserService} from "../../service/user.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const PasswordValidation = [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(24),
];

export const NameValidation = [
  Validators.required,
  Validators.pattern('([A-Za-z ]+)')

];

export const DateValidation = [
  Validators.required
];

export const UserNameValidation = [
  Validators.required,
  Validators.pattern('^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  events: string[] = [];
  date = '';
  month: number;
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
  birthDate: string;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private userService: UserService
  ) {

    this.form = this.formBuilder.group({
      password: new FormControl('', PasswordValidation),
      name: new FormControl('', NameValidation),
      username: new FormControl('', UserNameValidation)
    });

  }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  hide = true;

  getFirstName(event) {
    this.firstName = event.target.value;
  }

  getLastName(event) {
    this.lastName = event.target.value;
  }

  getEmail(event) {
    this.email = event.target.value;
  }

  getUsrname(event) {
    console.log(event.target.value);
    this.username = event.target.value;
  }

  getPassword(event) {
    this.password = event.target.value;
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.lastName,
      this.firstName,
      this.username,
      this.email,
      this.password);
    console.log(this.signupInfo);

    this.userService.register(this.signupInfo).subscribe(rez => {
      console.log(rez);
      sessionStorage.setItem(
        'token',
        rez.username
      );
      this.router.navigate(['home']);
    }, error1 => {
      this.showSnackbar('Username or password is incorrect. Please try again.');
    });

    this.router.navigate(['login']);
    this.showSnackbar('You successfully signed up!')
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['snackbar'],
    });
  }
}
