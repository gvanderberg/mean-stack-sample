System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent() {
                    console.log("Register View Rendered!");
                }
                RegisterComponent.prototype.login = function () {
                };
                RegisterComponent.prototype.ngOnInit = function () { };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: "register",
                        styleUrls: ["app/components/register/register.component.css"],
                        templateUrl: "app/components/register/register.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUdJO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFRCxpQ0FBSyxHQUFMO2dCQUVBLENBQUM7Z0JBRUQsb0NBQVEsR0FBUixjQUFhLENBQUM7Z0JBbEJsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsQ0FBQzt3QkFDN0QsV0FBVyxFQUFFLGlEQUFpRDt3QkFDOUQsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO3FCQUNqRCxDQUFDOztxQ0FBQTtnQkFjRix3QkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsaURBWUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJyZWdpc3RlclwiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfdXNlcjogT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXIgVmlldyBSZW5kZXJlZCFcIik7XG4gICAgfVxuXG4gICAgbG9naW4oKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
