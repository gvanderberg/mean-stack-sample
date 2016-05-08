import {Http, Response, Request} from "angular2/http";
import {Injectable} from "angular2/core";
import {DataService} from "./dataService";

@Injectable()
export class MembershipService {
    private _loginApi: string = "api/v1/account/login/";
    private _logoutApi: string = "api/v1/account/logout/";
    private _registerApi: string = "api/v1/account/register/";

    constructor(public dataService: DataService) {

    }

    getLoggedInUser(): Object {
        let user: Object;

        if (this.isAuthenticated()) {
            let userData = JSON.parse(localStorage.getItem("user"));

            user = { "username": userData.username, "password": userData.password };
        }

        return user;
    }

    isAuthenticated(): boolean {
        let user: Object = localStorage.getItem("user");

        if (user != null) {
            return true;
        } else {
            return false;
        }
    }

    login(credentials: Object) {
        this.dataService.set(this._loginApi);

        return this.dataService.post(credentials);
    }

    logout() {
        this.dataService.set(this._logoutApi);

        return this.dataService.post(null, false);
    }

    register(registration: Object) {
        this.dataService.set(this._registerApi);

        return this.dataService.post(registration);
    }
}