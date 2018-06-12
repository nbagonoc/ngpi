import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

// SERVICES
import { UsersService } from "./services/users.service";

// COMPONENTS
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

// ROUTES
const appRoutes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
