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
                        _this._albums = data.items;
                        _this._page = parseInt(data.page);
                        _this._pagesCount = Math.ceil(data.totalPages);
                        _this._totalCount = parseInt(data.totalCount);
                    }, function (err) {
                        if (err.status == 401) {
                        }
                    });
                };
                AlbumsComponent.prototype.search = function (i) {
                    _super.prototype.search.call(this, i);
                    this.getAlbums();
                };
                ;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBcUMsbUNBQVM7Z0JBSzFDLHlCQUFtQixXQUF3QjtvQkFDdkMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFEQSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFKbkMsZUFBVSxHQUFXLGdCQUFnQixDQUFDO29CQUV0QyxXQUFNLEdBQUcsZUFBTSxDQUFDO29CQUtwQixXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRXBDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELHlDQUFlLEdBQWYsVUFBZ0IsSUFBVTtvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxtQ0FBUyxHQUFUO29CQUFBLGlCQWFDO29CQVpHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO3dCQUMxQyxJQUFJLElBQUksR0FBUSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBRTNCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM5QyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2pELENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUV4QixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsZ0NBQU0sR0FBTixVQUFPLENBQUM7b0JBQ0osZ0JBQUssQ0FBQyxNQUFNLFlBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckIsQ0FBQzs7Z0JBRUQsa0NBQVEsR0FBUixjQUFhLENBQUM7Z0JBOUNsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQzt3QkFDekQsV0FBVyxFQUFFLDZDQUE2Qzt3QkFDMUQsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLG1CQUFVLENBQUM7cUJBQzdELENBQUM7O21DQUFBO2dCQTBDRixzQkFBQztZQUFELENBeENBLEFBd0NDLENBeENvQyxxQkFBUyxHQXdDN0M7WUF4Q0QsNkNBd0NDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuaW1wb3J0IHtSb3V0ZXMsIEFQUF9ST1VURVN9IGZyb20gXCIuLy4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHtQYWdpbmF0ZWR9IGZyb20gXCIuLy4uLy4uL2NvcmUvY29tbW9uL3BhZ2luYXRlZFwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9kYXRhU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhbGJ1bXNcIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rXVxufSlcblxuZXhwb3J0IGNsYXNzIEFsYnVtc0NvbXBvbmVudCBleHRlbmRzIFBhZ2luYXRlZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfYWxidW1zQXBpOiBzdHJpbmcgPSBcImFwaS92MS9hbGJ1bXMvXCI7XG4gICAgcHJpdmF0ZSBfYWxidW1zOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgcm91dGVzID0gUm91dGVzO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICAgICAgICBzdXBlcigwLCAwLCAwKTtcblxuICAgICAgICBkYXRhU2VydmljZS5zZXQodGhpcy5fYWxidW1zQXBpLCAzKTtcblxuICAgICAgICB0aGlzLmdldEFsYnVtcygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxidW1zIFZpZXcgUmVuZGVyZWQhXCIpO1xuICAgIH1cblxuICAgIGNvbnZlcnREYXRlVGltZShkYXRlOiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGdldEFsYnVtcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nZXQodGhpcy5fcGFnZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YTogYW55ID0gcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgdGhpcy5fYWxidW1zID0gZGF0YS5pdGVtcztcbiAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBwYXJzZUludChkYXRhLnBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5fcGFnZXNDb3VudCA9IE1hdGguY2VpbChkYXRhLnRvdGFsUGFnZXMpO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IHBhcnNlSW50KGRhdGEudG90YWxDb3VudCk7XG4gICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PSA0MDEpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2goaSk6IHZvaWQge1xuICAgICAgICBzdXBlci5zZWFyY2goaSk7XG4gICAgICAgIHRoaXMuZ2V0QWxidW1zKCk7XG4gICAgfTtcblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
