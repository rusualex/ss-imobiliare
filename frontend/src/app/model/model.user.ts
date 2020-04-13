export class User{
  id: string;
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;


  constructor(id: string, lastName: string, firstName: string, username: string, email: string, password: string) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
