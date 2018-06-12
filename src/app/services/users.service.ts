import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public http: Http) {}

  // Get User
  getUsers() {
    return this.http
      .get("http://jsonplaceholder.typicode.com/users")
      .map(res => res.json());
  }

  // Add User
  addUser(user) {
    return this.http
      .post("http://jsonplaceholder.typicode.com/users", user)
      .map(res => res.json());
  }

  // Delete User
  deleteUser(id) {
    return this.http
      .delete("http://jsonplaceholder.typicode.com/users/" + id)
      .map(res => res.json());
  }

  // Update User
  updateUser(user) {
    return this.http
      .put("http://jsonplaceholder.typicode.com/users/" + user.id, user)
      .map(res => res.json());
  }
}
