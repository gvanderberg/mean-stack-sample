System.register(["angular2/core", "angular2/common", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1;
    var AlbumPhotosComponent;
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
            }],
        execute: function() {
            AlbumPhotosComponent = (function () {
                function AlbumPhotosComponent(routeParam) {
                    this.routeParam = routeParam;
                    this._albumsApi = "api/v1/albums";
                    this._photosApi = "api/v1/photos";
                    this._routeParam = routeParam;
                    console.log("Album Photos View Rendered!");
                }
                AlbumPhotosComponent.prototype.getAlbumPhotos = function () {
                };
                AlbumPhotosComponent.prototype.ngOnInit = function () { };
                AlbumPhotosComponent = __decorate([
                    core_1.Component({
                        selector: "album-photos",
                        styleUrls: ["app/components/albumPhotos/album-photos.component.css"],
                        templateUrl: "app/components/albumPhotos/album-photos.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], AlbumPhotosComponent);
                return AlbumPhotosComponent;
            }());
            exports_1("AlbumPhotosComponent", AlbumPhotosComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFPSSw4QkFBbUIsVUFBdUI7b0JBQXZCLGVBQVUsR0FBVixVQUFVLENBQWE7b0JBTmxDLGVBQVUsR0FBVyxlQUFlLENBQUM7b0JBQ3JDLGVBQVUsR0FBVyxlQUFlLENBQUM7b0JBTXpDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsNkNBQWMsR0FBZDtnQkFFQSxDQUFDO2dCQUVELHVDQUFRLEdBQVIsY0FBYSxDQUFDO2dCQXZCbEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsU0FBUyxFQUFFLENBQUMsdURBQXVELENBQUM7d0JBQ3BFLFdBQVcsRUFBRSx3REFBd0Q7d0JBQ3JFLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsRUFBRSxtQkFBVSxDQUFDO3FCQUM3RCxDQUFDOzt3Q0FBQTtnQkFtQkYsMkJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHVEQWlCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rLCBSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1JvdXRlcywgQVBQX1JPVVRFU30gZnJvbSBcIi4vLi4vLi4vcm91dGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFsYnVtLXBob3Rvc1wiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwL2NvbXBvbmVudHMvYWxidW1QaG90b3MvYWxidW0tcGhvdG9zLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvYWxidW1QaG90b3MvYWxidW0tcGhvdG9zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rXVxufSlcblxuZXhwb3J0IGNsYXNzIEFsYnVtUGhvdG9zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hbGJ1bXNBcGk6IHN0cmluZyA9IFwiYXBpL3YxL2FsYnVtc1wiO1xuICAgIHByaXZhdGUgX3Bob3Rvc0FwaTogc3RyaW5nID0gXCJhcGkvdjEvcGhvdG9zXCI7XG4gICAgcHJpdmF0ZSBfYWxidW1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3Bob3RvczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtOiBSb3V0ZVBhcmFtcztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZVBhcmFtOiBSb3V0ZVBhcmFtcykge1xuICAgICAgICB0aGlzLl9yb3V0ZVBhcmFtID0gcm91dGVQYXJhbTtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGJ1bSBQaG90b3MgVmlldyBSZW5kZXJlZCFcIik7XG4gICAgfVxuXG4gICAgZ2V0QWxidW1QaG90b3MoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
