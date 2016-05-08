import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";

@Component({
    selector: "login",
    styleUrls: ["app/components/login/login.component.css"],
    templateUrl: "app/components/login/login.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginComponent implements OnInit {
    private _user: Object;

    constructor() {
        console.log("Login View Rendered!");
    }

    login(): void {

    }

    ngOnInit() { }
}