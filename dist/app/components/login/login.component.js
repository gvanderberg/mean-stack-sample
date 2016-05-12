System.register(["angular2/core", "angular2/common", "angular2/router", "./../../routes", "../../core/services/membershipService", "../../core/services/notificationService"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, routes_1, membershipService_1, notificationService_1;
    var LoginComponent;
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
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(membershipService, notificationService) {
                    this.membershipService = membershipService;
                    this.notificationService = notificationService;
                    this.routes = routes_1.Routes;
                    this._user = {};
                    console.log("Login View Rendered!");
                }
                LoginComponent.prototype.login = function () {
                    this.membershipService.login(this._user).subscribe(function (result) {
                        console.info(JSON.stringify(result));
                    }, function (error) {
                        console.error("Error: " + error);
                    }, function () {
                        console.info("Complete");
                    });
                };
                LoginComponent.prototype.ngOnInit = function () { };
                LoginComponent = __decorate([
                    core_1.Component({
                        bindings: [membershipService_1.MembershipService, notificationService_1.NotificationService],
                        providers: [membershipService_1.MembershipService, notificationService_1.NotificationService],
                        selector: "login",
                        styleUrls: ["app/components/login/login.component.css"],
                        templateUrl: "app/components/login/login.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [membershipService_1.MembershipService, notificationService_1.NotificationService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFJSSx3QkFBbUIsaUJBQW9DLEVBQVMsbUJBQXdDO29CQUFyRixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO29CQUFTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBRmhHLFdBQU0sR0FBRyxlQUFNLENBQUM7b0JBR3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQsOEJBQUssR0FBTDtvQkFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxFQUFFLFVBQUEsS0FBSzt3QkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxFQUFFO3dCQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixjQUFhLENBQUM7Z0JBN0JsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxDQUFDLHFDQUFpQixFQUFFLHlDQUFtQixDQUFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBaUIsRUFBRSx5Q0FBbUIsQ0FBQzt3QkFDbkQsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO3dCQUN2RCxXQUFXLEVBQUUsMkNBQTJDO3dCQUN4RCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsbUJBQVUsQ0FBQztxQkFDN0QsQ0FBQzs7a0NBQUE7Z0JBdUJGLHFCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCwyQ0FxQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuaW1wb3J0IHtSb3V0ZXMsIEFQUF9ST1VURVN9IGZyb20gXCIuLy4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHtNZW1iZXJzaGlwU2VydmljZX0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXMvbWVtYmVyc2hpcFNlcnZpY2VcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczogW01lbWJlcnNoaXBTZXJ2aWNlLCBOb3RpZmljYXRpb25TZXJ2aWNlXSxcbiAgICBwcm92aWRlcnM6IFtNZW1iZXJzaGlwU2VydmljZSwgTm90aWZpY2F0aW9uU2VydmljZV0sXG4gICAgc2VsZWN0b3I6IFwibG9naW5cIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX3VzZXI6IE9iamVjdDtcbiAgICBwcml2YXRlIHJvdXRlcyA9IFJvdXRlcztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZW1iZXJzaGlwU2VydmljZTogTWVtYmVyc2hpcFNlcnZpY2UsIHB1YmxpYyBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3VzZXIgPSB7fTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIFZpZXcgUmVuZGVyZWQhXCIpO1xuICAgIH1cblxuICAgIGxvZ2luKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbWJlcnNoaXBTZXJ2aWNlLmxvZ2luKHRoaXMuX3VzZXIpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJDb21wbGV0ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
