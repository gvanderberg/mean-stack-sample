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
                function AlbumsComponent(albumsService, router) {
                    _super.call(this, 0, 0, 0);
                    this.albumsService = albumsService;
                    this.router = router;
                    this._albumsApi = "api/v1/albums";
                    this.routes = routes_1.Routes;
                    this.routes = routes_1.Routes;
                    albumsService.set(this._albumsApi, 3);
                    this.getAlbums();
                }
                AlbumsComponent.prototype.getAlbums = function () {
                    var _this = this;
                    this.albumsService.get(this._page).subscribe(function (res) {
                        var data = res.json();
                        _this._albums = data.Items;
                        _this._page = data.Page;
                        _this._pagesCount = data.TotalPages;
                        _this._totalCount = data.TotalCount;
                    }, function (err) {
                        if (err.status == 401) {
                        }
                    });
                    this._albums = new Array();
                    this._albums.push({ "Id": 1, "Title": "Album 1", "Description": "XXX", "Thumbnail": "xxx" });
                    this._albums.push({ "Id": 2, "Title": "Album 2", "Description": "YYY", "Thumbnail": "yyy" });
                    this._albums.push({ "Id": 3, "Title": "Album 3", "Description": "XXX", "Thumbnail": "xxx" });
                    this._albums.push({ "Id": 4, "Title": "Album 4", "Description": "YYY", "Thumbnail": "yyy" });
                };
                AlbumsComponent.prototype.ngOnInit = function () { };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: "albums",
                        styleUrls: ["app/components/albums/albums.component.css"],
                        templateUrl: "app/components/albums/albums.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService, router_1.Router])
                ], AlbumsComponent);
                return AlbumsComponent;
            }(paginated_1.Paginated));
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBcUMsbUNBQVM7Z0JBSzFDLHlCQUFtQixhQUEwQixFQUFTLE1BQWM7b0JBQ2hFLGtCQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBREEsa0JBQWEsR0FBYixhQUFhLENBQWE7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFKNUQsZUFBVSxHQUFXLGVBQWUsQ0FBQztvQkFFckMsV0FBTSxHQUFHLGVBQU0sQ0FBQztvQkFLcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUM7b0JBRXJCLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELG1DQUFTLEdBQVQ7b0JBQUEsaUJBa0JDO29CQWpCRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRzt3QkFDNUMsSUFBSSxJQUFJLEdBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUV4QixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDakcsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLGNBQWEsQ0FBQztnQkExQ2xCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO3dCQUN6RCxXQUFXLEVBQUUsNkNBQTZDO3dCQUMxRCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsbUJBQVUsQ0FBQztxQkFDN0QsQ0FBQzs7bUNBQUE7Z0JBc0NGLHNCQUFDO1lBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQ29DLHFCQUFTLEdBb0M3QztZQXBDRCw2Q0FvQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1JvdXRlcywgQVBQX1JPVVRFU30gZnJvbSBcIi4vLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQge1BhZ2luYXRlZH0gZnJvbSBcIi4vLi4vLi4vY29yZS9jb21tb24vcGFnaW5hdGVkXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFsYnVtc1wiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgQWxidW1zQ29tcG9uZW50IGV4dGVuZHMgUGFnaW5hdGVkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hbGJ1bXNBcGk6IHN0cmluZyA9IFwiYXBpL3YxL2FsYnVtc1wiO1xuICAgIHByaXZhdGUgX2FsYnVtczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHJvdXRlcyA9IFJvdXRlcztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhbGJ1bXNTZXJ2aWNlOiBEYXRhU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHN1cGVyKDAsIDAsIDApO1xuXG4gICAgICAgIHRoaXMucm91dGVzID0gUm91dGVzO1xuXG4gICAgICAgIGFsYnVtc1NlcnZpY2Uuc2V0KHRoaXMuX2FsYnVtc0FwaSwgMyk7XG5cbiAgICAgICAgdGhpcy5nZXRBbGJ1bXMoKTtcbiAgICB9XG5cbiAgICBnZXRBbGJ1bXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWxidW1zU2VydmljZS5nZXQodGhpcy5fcGFnZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YTogYW55ID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2FsYnVtcyA9IGRhdGEuSXRlbXM7XG4gICAgICAgICAgICB0aGlzLl9wYWdlID0gZGF0YS5QYWdlO1xuICAgICAgICAgICAgdGhpcy5fcGFnZXNDb3VudCA9IGRhdGEuVG90YWxQYWdlcztcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSBkYXRhLlRvdGFsQ291bnQ7XG4gICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PSA0MDEpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9hbGJ1bXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5fYWxidW1zLnB1c2goeyBcIklkXCI6IDEsIFwiVGl0bGVcIjogXCJBbGJ1bSAxXCIsIFwiRGVzY3JpcHRpb25cIjogXCJYWFhcIiwgXCJUaHVtYm5haWxcIjogXCJ4eHhcIiB9KTtcbiAgICAgICAgdGhpcy5fYWxidW1zLnB1c2goeyBcIklkXCI6IDIsIFwiVGl0bGVcIjogXCJBbGJ1bSAyXCIsIFwiRGVzY3JpcHRpb25cIjogXCJZWVlcIiwgXCJUaHVtYm5haWxcIjogXCJ5eXlcIiB9KTtcbiAgICAgICAgdGhpcy5fYWxidW1zLnB1c2goeyBcIklkXCI6IDMsIFwiVGl0bGVcIjogXCJBbGJ1bSAzXCIsIFwiRGVzY3JpcHRpb25cIjogXCJYWFhcIiwgXCJUaHVtYm5haWxcIjogXCJ4eHhcIiB9KTtcbiAgICAgICAgdGhpcy5fYWxidW1zLnB1c2goeyBcIklkXCI6IDQsIFwiVGl0bGVcIjogXCJBbGJ1bSA0XCIsIFwiRGVzY3JpcHRpb25cIjogXCJZWVlcIiwgXCJUaHVtYm5haWxcIjogXCJ5eXlcIiB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
