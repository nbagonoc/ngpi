import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any[];

  user = {
    id: "",
    name: "",
    email: "",
    phone: ""
  };

  isEdit: boolean = false;

  constructor(public usersService: UsersService) {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  ngOnInit() {
    // Get users
    // this.usersService.getUsers().subscribe(users => {
    //   console.log(users);
    //   this.users = users;
    // });
  }

  onSubmit(isEdit) {
    if (isEdit) {
      this.usersService.updateUser(this.user).subscribe(user => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.user.id) {
            this.users.splice(i, 1);
          }
        }
        this.users.unshift(this.user);

        // clear values after submit
        this.user = {
          id: "",
          name: "",
          email: "",
          phone: ""
        };
      });
    } else {
      this.usersService.addUser(this.user).subscribe(user => {
        this.users.unshift(user);
        console.log(user);
      });

      // clear values after submit
      this.user = {
        id: "",
        name: "",
        email: "",
        phone: ""
      };
    }
  }

  // Edit user
  onEdit(user) {
    this.isEdit = true;
    this.user = user;
  }

  // Delte user
  onDelete(id) {
    this.usersService.deleteUser(id).subscribe(res => {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id) {
          this.users.splice(i, 1);
        }
      }
    });
  }

  // on Clear
  onClear() {
    this.user = {
      id: "",
      name: "",
      email: "",
      phone: ""
    };
  }
}
