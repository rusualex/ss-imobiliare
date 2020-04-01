export class SignUpInfo {
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;


  constructor(lastName: string, firstName: string, username: string, email: string, password: string) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
