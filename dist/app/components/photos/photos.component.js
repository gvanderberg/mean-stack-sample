System.register(["angular2/core", "angular2/common", "angular2/router", "./../../core/common/paginated"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, paginated_1;
    var PhotosComponent;
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
            function (paginated_1_1) {
                paginated_1 = paginated_1_1;
            }],
        execute: function() {
            PhotosComponent = (function (_super) {
                __extends(PhotosComponent, _super);
                function PhotosComponent() {
                    _super.call(this, 0, 0, 0);
                    this._photosApi = "api/photos/";
                    console.log("Photos View Rendered!");
                }
                PhotosComponent.prototype.getPhotos = function () {
                    this._photos = new Array();
                    this._photos.push({});
                };
                PhotosComponent.prototype.ngOnInit = function () { };
                PhotosComponent = __decorate([
                    core_1.Component({
                        selector: "photos",
                        styleUrls: ["app/components/photos/photos.component.css"],
                        templateUrl: "app/components/photos/photos.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PhotosComponent);
                return PhotosComponent;
            }(paginated_1.Paginated));
            exports_1("PhotosComponent", PhotosComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFBcUMsbUNBQVM7Z0JBSTFDO29CQUNJLGtCQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBSlgsZUFBVSxHQUFXLGFBQWEsQ0FBQztvQkFNdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELG1DQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLGNBQWEsQ0FBQztnQkF0QmxCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO3dCQUN6RCxXQUFXLEVBQUUsNkNBQTZDO3dCQUMxRCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsbUJBQVUsQ0FBQztxQkFDN0QsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsQ0FoQm9DLHFCQUFTLEdBZ0I3QztZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9waG90b3MvcGhvdG9zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1BhZ2luYXRlZH0gZnJvbSBcIi4vLi4vLi4vY29yZS9jb21tb24vcGFnaW5hdGVkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBob3Rvc1wiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL3Bob3Rvcy9waG90b3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgUGhvdG9zQ29tcG9uZW50IGV4dGVuZHMgUGFnaW5hdGVkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9waG90b3NBcGk6IHN0cmluZyA9IFwiYXBpL3Bob3Rvcy9cIjtcbiAgICBwcml2YXRlIF9waG90b3M6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoMCwgMCwgMCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJQaG90b3MgVmlldyBSZW5kZXJlZCFcIik7XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9waG90b3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5fcGhvdG9zLnB1c2goe30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
