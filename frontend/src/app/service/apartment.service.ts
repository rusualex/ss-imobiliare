import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "./api-service";
import {User} from "../model/model.user";

@Injectable({
  providedIn: 'root'
})
export class ApartamentService {

  constructor(
    private apiService: ApiService
  ){}

  getAllApartments(): Observable<any> {
    return this.apiService.getRequest('apartments');
  }
}
