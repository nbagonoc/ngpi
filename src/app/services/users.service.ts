import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public http: Http) {}

  url = "http://jsonplaceholder.typicode.com/users";

  // Get User
  getUsers() {
    return this.http.get(this.url).map(res => res.json());
  }

  // Add User
  addUser(user) {
    return this.http.post(this.url, user).map(res => res.json());
  }

  // Delete User
  deleteUser(id) {
    return this.http.delete(this.url + "/" + id).map(res => res.json());
  }

  // Update User
  updateUser(user) {
    return this.http.put(this.url + "/" + user.id, user).map(res => res.json());
  }
}
