import { Component } from "angular2/core";
import { Router, RouteConfig, RouterOutlet, RouterLink, ROUTER_DIRECTIVES } from "angular2/router"

import { HomeComponent } from "./../home/home.component"
import { AboutComponent } from "./../about/about.component"
import { ContactComponent } from "./../contact/contact.component"

@RouteConfig([
    { path: "/", component: HomeComponent, as: "Home" },
    { path: "/about", component: AboutComponent, as: "About" },
    { path: "/contact", component: ContactComponent, as: "Contact" }
])

@Component({
    selector: "my-app",
    styleUrls: ["app/components/app/app.component.css"],
    templateUrl: "app/components/app/app.component.html",
    directives: [RouterOutlet, RouterLink]
})

export class AppComponent {
    constructor() {
        console.log("We are up and running!");
    }
}