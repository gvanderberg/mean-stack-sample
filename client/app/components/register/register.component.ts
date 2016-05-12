import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";

@Component({
    selector: "register",
    styleUrls: ["app/components/register/register.component.css"],
    templateUrl: "app/components/register/register.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class RegisterComponent implements OnInit {
    private _user: Object;

    constructor() {
        console.log("Register View Rendered!");
    }

    login(): void {

    }

    ngOnInit() { }
}