System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                    console.log("About View Rendered!");
                }
                AboutComponent.prototype.ngOnInit = function () { };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: "about",
                        styleUrls: ["app/components/about/about.component.css"],
                        templateUrl: "app/components/about/about.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUNJO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztnQkFYbEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7d0JBQ3ZELFdBQVcsRUFBRSwyQ0FBMkM7cUJBQzNELENBQUM7O2tDQUFBO2dCQVFGLHFCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCwyQ0FNQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFib3V0XCIsXG4gICAgc3R5bGVVcmxzOiBbXCJhcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgVmlldyBSZW5kZXJlZCFcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
