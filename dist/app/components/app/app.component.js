System.register(["angular2/core", "angular2/router", "./../home/home.component", "./../about/about.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    console.log("We are up and running!");
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: "/", component: home_component_1.HomeComponent, as: "Home" },
                        { path: "/about", component: about_component_1.AboutComponent, as: "About" },
                    ]),
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/components/app/app.component.html",
                        directives: [router_1.RouterOutlet, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUNJO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFkTDtvQkFBQyxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO3dCQUNuRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtxQkFDN0QsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxVQUFVLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG1CQUFVLENBQUM7cUJBQ3pDLENBQUM7O2dDQUFBO2dCQU1GLG1CQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCx1Q0FJQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuLy4uL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vLi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCJcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6IFwiL1wiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGFzOiBcIkhvbWVcIiB9LFxuICAgIHsgcGF0aDogXCIvYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCwgYXM6IFwiQWJvdXRcIiB9LFxuXSlcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZSBhcmUgdXAgYW5kIHJ1bm5pbmchXCIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
