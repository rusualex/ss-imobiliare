export class AuthLoginInfo {
  username:string;
  encrypted_password:string;

  constructor(username: string, encrypted_password: string) {
    this.username = username;
    this.encrypted_password = encrypted_password;
  }
}
