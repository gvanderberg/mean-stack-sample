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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUNJO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFoQkw7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTt3QkFDbkQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7d0JBQzFELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtxQkFDbkUsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzt3QkFDbkQsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsVUFBVSxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVSxDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9ob21lL2hvbWUuY29tcG9uZW50XCJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vLi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50XCJcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6IFwiL1wiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGFzOiBcIkhvbWVcIiB9LFxuICAgIHsgcGF0aDogXCIvYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCwgYXM6IFwiQWJvdXRcIiB9LFxuICAgIHsgcGF0aDogXCIvY29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQsIGFzOiBcIkNvbnRhY3RcIiB9XG5dKVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCwgUm91dGVyTGlua11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlIGFyZSB1cCBhbmQgcnVubmluZyFcIik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
