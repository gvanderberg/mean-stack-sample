import {bootstrap} from "angular2/platform/browser";
import {provide} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {ROUTER_BINDINGS, ROUTER_PROVIDERS} from "angular2/router";
import {Location, LocationStrategy, HashLocationStrategy} from "angular2/platform/common";
import {AppComponent} from "./components/app/app.component";

import {DataService} from "./core/services/dataService";

bootstrap(AppComponent, [ROUTER_PROVIDERS, CORE_DIRECTIVES, provide(LocationStrategy, { useClass: HashLocationStrategy }), DataService]).catch(err => console.error(err));