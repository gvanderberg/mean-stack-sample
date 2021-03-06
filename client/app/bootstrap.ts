import {bootstrap} from "angular2/platform/browser";
import {provide} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {HTTP_BINDINGS, HTTP_PROVIDERS, Headers, RequestOptions, BaseRequestOptions} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS} from "angular2/router";
import {Location, LocationStrategy, HashLocationStrategy} from "angular2/platform/common";
import "rxjs/add/operator/map";
import {AppComponent} from "./components/app/app.component";
import {DataService} from "./core/services/dataService";
import {MembershipService} from "./core/services/membershipService";

class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers({
        "Content-Type": "application/json"
    })
}

bootstrap(AppComponent,
    [HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        CORE_DIRECTIVES,
        provide(LocationStrategy, { useClass: HashLocationStrategy }), DataService, MembershipService]).catch(err => console.error(err));