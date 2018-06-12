import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any[];

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
