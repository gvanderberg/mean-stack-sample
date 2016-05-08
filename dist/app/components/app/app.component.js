System.register(["angular2/core", "angular2/common", "angular2/router", "./../../routes", "./../../core/services/membershipService"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, routes_1, membershipService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (membershipService_1_1) {
                membershipService_1 = membershipService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(membershipService) {
                    this.membershipService = membershipService;
                    this.routes = routes_1.Routes;
                    console.log("We are up and running!");
                }
                AppComponent.prototype.getUserName = function () {
                    if (this.isUserLoggedIn()) {
                        var user = this.membershipService.getLoggedInUser();
                        return user["username"];
                    }
                    else {
                        return "Account";
                    }
                };
                AppComponent.prototype.isUserLoggedIn = function () {
                    return this.membershipService.isAuthenticated();
                };
                AppComponent.prototype.logout = function () {
                    this.membershipService.logout().subscribe(function (res) {
                        localStorage.removeItem("user");
                    }, function (err) {
                        console.error("Error: " + err);
                    }, function () {
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        styleUrls: ["app/components/app/app.component.css"],
                        templateUrl: "app/components/app/app.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }),
                    router_1.RouteConfig(routes_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [membershipService_1.MembershipService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0ksc0JBQW1CLGlCQUFvQztvQkFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtvQkFGL0MsV0FBTSxHQUFHLGVBQU0sQ0FBQztvQkFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELGtDQUFXLEdBQVg7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxxQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsNkJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRzt3QkFDekMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFFLFVBQUEsR0FBRzt3QkFDRixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQTtvQkFDbEMsQ0FBQyxFQUFFO29CQUVILENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBckNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO3dCQUNuRCxXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx3QkFBZSxDQUFDO3FCQUNuRCxDQUFDO29CQUVELG9CQUFXLENBQUMsbUJBQVUsQ0FBQzs7Z0NBQUE7Z0JBK0J4QixtQkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsdUNBOEJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9CSU5ESU5HU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1JvdXRlcywgQVBQX1JPVVRFU30gZnJvbSBcIi4vLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQge01lbWJlcnNoaXBTZXJ2aWNlfSBmcm9tIFwiLi8uLi8uLi9jb3JlL3NlcnZpY2VzL21lbWJlcnNoaXBTZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhBUFBfUk9VVEVTKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByb3V0ZXMgPSBSb3V0ZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVtYmVyc2hpcFNlcnZpY2U6IE1lbWJlcnNoaXBTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHVwIGFuZCBydW5uaW5nIVwiKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc1VzZXJMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMubWVtYmVyc2hpcFNlcnZpY2UuZ2V0TG9nZ2VkSW5Vc2VyKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyW1widXNlcm5hbWVcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBY2NvdW50XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1VzZXJMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVyc2hpcFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbWJlcnNoaXBTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiArIGVycilcbiAgICAgICAgfSwgKCkgPT4ge1xuXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
