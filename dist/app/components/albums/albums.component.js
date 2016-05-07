System.register(["angular2/core", "angular2/common", "angular2/router", "./../../routes"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, routes_1;
    var AlbumsComponent;
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
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(router) {
                    this.router = router;
                    this._albumsApi = "api/v1/albums";
                    this.routes = routes_1.Routes;
                    this.routes = routes_1.Routes;
                    this.getAlbums();
                }
                AlbumsComponent.prototype.getAlbums = function () {
                    this._albums = new Array();
                    this._albums.push({ "Title": "XXX", "Description": "XXX", "Thumbnail": "xxx" });
                };
                AlbumsComponent.prototype.ngOnInit = function () { };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: "albums",
                        styleUrls: ["app/components/albums/albums.component.css"],
                        templateUrl: "app/components/albums/albums.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBS0kseUJBQW1CLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFKekIsZUFBVSxHQUFXLGVBQWUsQ0FBQztvQkFFckMsV0FBTSxHQUFHLGVBQU0sQ0FBQztvQkFHcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxtQ0FBUyxHQUFUO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBRUQsa0NBQVEsR0FBUixjQUFhLENBQUM7Z0JBdEJsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQzt3QkFDekQsV0FBVyxFQUFFLDZDQUE2Qzt3QkFDMUQsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLG1CQUFVLENBQUM7cUJBQzdELENBQUM7O21DQUFBO2dCQWtCRixzQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsNkNBZ0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuaW1wb3J0IHtSb3V0ZXMsIEFQUF9ST1VURVN9IGZyb20gXCIuLy4uLy4uL3JvdXRlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhbGJ1bXNcIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rXVxufSlcblxuZXhwb3J0IGNsYXNzIEFsYnVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfYWxidW1zQXBpOiBzdHJpbmcgPSBcImFwaS92MS9hbGJ1bXNcIjtcbiAgICBwcml2YXRlIF9hbGJ1bXM6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSByb3V0ZXMgPSBSb3V0ZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBSb3V0ZXM7XG4gICAgICAgIHRoaXMuZ2V0QWxidW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0QWxidW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hbGJ1bXMgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLl9hbGJ1bXMucHVzaCh7IFwiVGl0bGVcIjogXCJYWFhcIiwgXCJEZXNjcmlwdGlvblwiOiBcIlhYWFwiLCBcIlRodW1ibmFpbFwiOiBcInh4eFwiIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
