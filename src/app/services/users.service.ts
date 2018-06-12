import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public http: Http) {}

  // get users from api
  getUsers() {
    return this.http
      .get("http://jsonplaceholder.typicode.com/users")
      .map(res => res.json());
  }
}
