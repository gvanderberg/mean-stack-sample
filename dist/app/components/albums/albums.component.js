System.register(["angular2/core", "angular2/common", "angular2/router", "./../../routes", "./../../core/common/paginated", "./../../core/services/dataService"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, routes_1, paginated_1, dataService_1;
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
            },
            function (paginated_1_1) {
                paginated_1 = paginated_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function (_super) {
                __extends(AlbumsComponent, _super);
                function AlbumsComponent(dataService) {
                    _super.call(this, 0, 0, 0);
                    this.dataService = dataService;
                    this._albumsApi = "api/v1/albums/";
                    this.routes = routes_1.Routes;
                    dataService.set(this._albumsApi, 3);
                    this.getAlbums();
                    console.log("Albums View Rendered!");
                }
                AlbumsComponent.prototype.convertDateTime = function (date) {
                    return date;
                };
                AlbumsComponent.prototype.getAlbums = function () {
                    var _this = this;
                    this.dataService.get(this._page).subscribe(function (res) {
                        var data = res.json();
                        _this._albums = data; //.Items;
                        _this._page = data.Page;
                        _this._pagesCount = data.TotalPages;
                        _this._totalCount = data.TotalCount;
                    }, function (err) {
                        if (err.status == 401) {
                        }
                    });
                };
                AlbumsComponent.prototype.ngOnInit = function () { };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: "albums",
                        styleUrls: ["app/components/albums/albums.component.css"],
                        templateUrl: "app/components/albums/albums.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService])
                ], AlbumsComponent);
                return AlbumsComponent;
            }(paginated_1.Paginated));
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBcUMsbUNBQVM7Z0JBSzFDLHlCQUFtQixXQUF3QjtvQkFDdkMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFEQSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFKbkMsZUFBVSxHQUFXLGdCQUFnQixDQUFDO29CQUV0QyxXQUFNLEdBQUcsZUFBTSxDQUFDO29CQUtwQixXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRXBDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELHlDQUFlLEdBQWYsVUFBZ0IsSUFBVTtvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxtQ0FBUyxHQUFUO29CQUFBLGlCQWFDO29CQVpHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO3dCQUMxQyxJQUFJLElBQUksR0FBUSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBRTNCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUzt3QkFDOUIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsQ0FBQyxFQUFFLFVBQUEsR0FBRzt3QkFDRixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBRXhCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLGNBQWEsQ0FBQztnQkF6Q2xCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO3dCQUN6RCxXQUFXLEVBQUUsNkNBQTZDO3dCQUMxRCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsbUJBQVUsQ0FBQztxQkFDN0QsQ0FBQzs7bUNBQUE7Z0JBcUNGLHNCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQ29DLHFCQUFTLEdBbUM3QztZQW5DRCw2Q0FtQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1JvdXRlcywgQVBQX1JPVVRFU30gZnJvbSBcIi4vLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQge1BhZ2luYXRlZH0gZnJvbSBcIi4vLi4vLi4vY29yZS9jb21tb24vcGFnaW5hdGVkXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFsYnVtc1wiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgQWxidW1zQ29tcG9uZW50IGV4dGVuZHMgUGFnaW5hdGVkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hbGJ1bXNBcGk6IHN0cmluZyA9IFwiYXBpL3YxL2FsYnVtcy9cIjtcbiAgICBwcml2YXRlIF9hbGJ1bXM6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSByb3V0ZXMgPSBSb3V0ZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKDAsIDAsIDApO1xuXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNldCh0aGlzLl9hbGJ1bXNBcGksIDMpO1xuXG4gICAgICAgIHRoaXMuZ2V0QWxidW1zKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJBbGJ1bXMgVmlldyBSZW5kZXJlZCFcIik7XG4gICAgfVxuXG4gICAgY29udmVydERhdGVUaW1lKGRhdGU6IERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0QWxidW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldCh0aGlzLl9wYWdlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhOiBhbnkgPSByZXMuanNvbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9hbGJ1bXMgPSBkYXRhOyAvLy5JdGVtcztcbiAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBkYXRhLlBhZ2U7XG4gICAgICAgICAgICB0aGlzLl9wYWdlc0NvdW50ID0gZGF0YS5Ub3RhbFBhZ2VzO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IGRhdGEuVG90YWxDb3VudDtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09IDQwMSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
