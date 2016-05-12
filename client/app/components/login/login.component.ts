import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Router, RouterLink} from "angular2/router"
import {Routes, APP_ROUTES} from "./../../routes";
import {MembershipService} from "../../core/services/membershipService";
import {NotificationService} from "../../core/services/notificationService";

@Component({
    bindings: [MembershipService, NotificationService],
    providers: [MembershipService, NotificationService],
    selector: "login",
    styleUrls: ["app/components/login/login.component.css"],
    templateUrl: "app/components/login/login.component.html",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})

export class LoginComponent implements OnInit {
    private _user: Object;
    private routes = Routes;

    constructor(public membershipService: MembershipService, public notificationService: NotificationService) {
        this._user = {};

        console.log("Login View Rendered!");
    }

    login(): void {
        this.membershipService.login(this._user).subscribe(result => {
            console.info(JSON.stringify(result));
        }, error => {
            console.error("Error: " + error);
        }, () => {
            console.info("Complete");
        });
    }

    ngOnInit() { }
}