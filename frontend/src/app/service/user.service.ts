import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "./api-service";
import {User} from "../model/model.user";
import {SignUpInfo} from "../model/sign-up-info";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: ApiService
  ){}

  getAllUsers(): Observable <User[]>{
    return this.apiService.getRequest("users");
  }

  register(userData: SignUpInfo): Observable<any> {
    return this.apiService.postRequest('users', userData);
  }

}
