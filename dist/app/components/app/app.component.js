System.register(["angular2/core", "angular2/router", "./../home/home.component", "./../about/about.component", "./../contact/contact.component"], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, about_component_1, contact_component_1;
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
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
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
                        { path: "/contact", component: contact_component_1.ContactComponent, as: "Contact" }
                    ]),
                    core_1.Component({
                        selector: "my-app",
                        styleUrls: ["app/components/app/app.component.css"],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUNJO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFoQkw7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTt3QkFDbkQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7d0JBQzFELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtxQkFDbkUsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzt3QkFDbkQsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsVUFBVSxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVSxDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1JvdXRlcywgQVBQX1JPVVRFU30gZnJvbSAnLi8uLi8uLi9yb3V0ZXMnO1xuXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuLy4uL2hvbWUvaG9tZS5jb21wb25lbnRcIlxuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vLi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vLi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiBcIi9cIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBhczogXCJIb21lXCIgfSxcbiAgICB7IHBhdGg6IFwiL2Fib3V0XCIsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIGFzOiBcIkFib3V0XCIgfSxcbiAgICB7IHBhdGg6IFwiL2NvbnRhY3RcIiwgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50LCBhczogXCJDb250YWN0XCIgfVxuXSlcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJhcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZSBhcmUgdXAgYW5kIHJ1bm5pbmchXCIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
