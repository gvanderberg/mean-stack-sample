import {Component } from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS} from "angular2/router"
import {Routes, APP_ROUTES} from "./../../routes";

@Component({
    selector: "my-app",
    styleUrls: ["app/components/app/app.component.css"],
    templateUrl: "app/components/app/app.component.html",
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

@RouteConfig(APP_ROUTES)
export class AppComponent {
    private routes = Routes;

    constructor() {
        console.log("We are up and running!");
    }
}