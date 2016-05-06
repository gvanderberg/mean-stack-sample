System.register(["angular2/core", "angular2/router", "./../../core/services/dataService", "./../../routes"], function(exports_1, context_1) {
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
    var core_1, router_1, dataService_1, routes_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(albumsService, router) {
                    this.albumsService = albumsService;
                    this.router = router;
                    this._albumsApi = "api/v1/albums";
                    this.routes = routes_1.Routes;
                    this.routes = routes_1.Routes;
                    albumsService.set(this._albumsApi, 3);
                }
                AlbumsComponent.prototype.ngOnInit = function () { };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: "albums",
                        styleUrls: ["app/components/albums/albums.component.css"],
                        templateUrl: "app/components/albums/albums.component.html"
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService, router_1.Router])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBSUkseUJBQW1CLGFBQTBCLEVBQVMsTUFBYztvQkFBakQsa0JBQWEsR0FBYixhQUFhLENBQWE7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFINUQsZUFBVSxHQUFXLGVBQWUsQ0FBQztvQkFDckMsV0FBTSxHQUFHLGVBQU0sQ0FBQztvQkFHcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUM7b0JBQ3JCLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLGNBQWEsQ0FBQztnQkFmbEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7d0JBQ3pELFdBQVcsRUFBRSw2Q0FBNkM7cUJBQzdELENBQUM7O21DQUFBO2dCQVlGLHNCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCw2Q0FVQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuLy4uLy4uL2NvcmUvc2VydmljZXMvZGF0YVNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVzLCBBUFBfUk9VVEVTfSBmcm9tIFwiLi8uLi8uLi9yb3V0ZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYWxidW1zXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJhcHAvY29tcG9uZW50cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgQWxidW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hbGJ1bXNBcGk6IHN0cmluZyA9IFwiYXBpL3YxL2FsYnVtc1wiO1xuICAgIHByaXZhdGUgcm91dGVzID0gUm91dGVzO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFsYnVtc1NlcnZpY2U6IERhdGFTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBSb3V0ZXM7XG4gICAgICAgIGFsYnVtc1NlcnZpY2Uuc2V0KHRoaXMuX2FsYnVtc0FwaSwgMyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
