import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "./api-service";
import {User} from "../model/model.user";
import {AuthLoginInfo} from "../model/auth-login-info";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService
  ){}

  login(authData: AuthLoginInfo): Observable<any> {
    return this.apiService.postRequest('login', authData);
  }
}
