System.register(["angular2/core", "angular2/common", "angular2/router", "./../../core/common/paginated", "./../../core/services/dataService"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, paginated_1, dataService_1;
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
            },
            function (paginated_1_1) {
                paginated_1 = paginated_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            }],
        execute: function() {
            AlbumPhotosComponent = (function (_super) {
                __extends(AlbumPhotosComponent, _super);
                function AlbumPhotosComponent(dataService, routeParam) {
                    _super.call(this, 0, 0, 0);
                    this.dataService = dataService;
                    this.routeParam = routeParam;
                    this._albumsApi = "api/v1/albums/";
                    this._photosApi = "api/v1/photos/";
                    dataService.set(this._albumsApi, 12);
                    this._routeParam = routeParam;
                    this._albumId = this._routeParam.get("id");
                    this._albumsApi += this._albumId + "/photos/";
                    this.getAlbumPhotos();
                    console.log("Album Photos View Rendered!");
                }
                AlbumPhotosComponent.prototype.convertDateTime = function (date) {
                    return date;
                };
                AlbumPhotosComponent.prototype.getAlbumPhotos = function () {
                    this._albumTitle = "XXX";
                    this._photos = new Array();
                    this._photos.push({ "DateUploaded": "01 Jan 2016", "Title": "A:XX", "Uri": "aaa" });
                    this._photos.push({ "DateUploaded": "02 Jan 2016", "Title": "B:XX", "Uri": "bbb" });
                    this._photos.push({ "DateUploaded": "03 Jan 2016", "Title": "C:XX", "Uri": "ccc" });
                    this._photos.push({ "DateUploaded": "04 Jan 2016", "Title": "D:XX", "Uri": "ddd" });
                    this._photos.push({ "DateUploaded": "05 Jan 2016", "Title": "E:XX", "Uri": "eee" });
                };
                AlbumPhotosComponent.prototype.ngOnInit = function () { };
                AlbumPhotosComponent = __decorate([
                    core_1.Component({
                        selector: "album-photos",
                        styleUrls: ["app/components/albumPhotos/album-photos.component.css"],
                        templateUrl: "app/components/albumPhotos/album-photos.component.html",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService, router_1.RouteParams])
                ], AlbumPhotosComponent);
                return AlbumPhotosComponent;
            }(paginated_1.Paginated));
            exports_1("AlbumPhotosComponent", AlbumPhotosComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUEwQyx3Q0FBUztnQkFRL0MsOEJBQW1CLFdBQXdCLEVBQVMsVUFBdUI7b0JBQ3ZFLGtCQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBREEsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtvQkFQbkUsZUFBVSxHQUFXLGdCQUFnQixDQUFDO29CQUN0QyxlQUFVLEdBQVcsZ0JBQWdCLENBQUM7b0JBUzFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFFckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7b0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7b0JBRTlDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELDhDQUFlLEdBQWYsVUFBZ0IsSUFBVTtvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCw2Q0FBYyxHQUFkO29CQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDeEYsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSLGNBQWEsQ0FBQztnQkEzQ2xCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFNBQVMsRUFBRSxDQUFDLHVEQUF1RCxDQUFDO3dCQUNwRSxXQUFXLEVBQUUsd0RBQXdEO3dCQUNyRSxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsbUJBQVUsQ0FBQztxQkFDN0QsQ0FBQzs7d0NBQUE7Z0JBdUNGLDJCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ3lDLHFCQUFTLEdBcUNsRDtZQXJDRCx1REFxQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hbGJ1bVBob3Rvcy9hbGJ1bS1waG90b3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7Um91dGVyTGluaywgUm91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuaW1wb3J0IHtSb3V0ZXMsIEFQUF9ST1VURVN9IGZyb20gXCIuLy4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHtQYWdpbmF0ZWR9IGZyb20gXCIuLy4uLy4uL2NvcmUvY29tbW9uL3BhZ2luYXRlZFwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9kYXRhU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhbGJ1bS1waG90b3NcIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgUm91dGVyTGlua11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbGJ1bVBob3Rvc0NvbXBvbmVudCBleHRlbmRzIFBhZ2luYXRlZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfYWxidW1zQXBpOiBzdHJpbmcgPSBcImFwaS92MS9hbGJ1bXMvXCI7XG4gICAgcHJpdmF0ZSBfcGhvdG9zQXBpOiBzdHJpbmcgPSBcImFwaS92MS9waG90b3MvXCI7XG4gICAgcHJpdmF0ZSBfYWxidW1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2FsYnVtVGl0bGU6IHN0cmluZztcbiAgICBwcml2YXRlIF9waG90b3M6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSBfcm91dGVQYXJhbTogUm91dGVQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwdWJsaWMgcm91dGVQYXJhbTogUm91dGVQYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoMCwgMCwgMCk7XG5cbiAgICAgICAgZGF0YVNlcnZpY2Uuc2V0KHRoaXMuX2FsYnVtc0FwaSwgMTIpO1xuXG4gICAgICAgIHRoaXMuX3JvdXRlUGFyYW0gPSByb3V0ZVBhcmFtO1xuICAgICAgICB0aGlzLl9hbGJ1bUlkID0gdGhpcy5fcm91dGVQYXJhbS5nZXQoXCJpZFwiKTtcbiAgICAgICAgdGhpcy5fYWxidW1zQXBpICs9IHRoaXMuX2FsYnVtSWQgKyBcIi9waG90b3MvXCI7XG5cbiAgICAgICAgdGhpcy5nZXRBbGJ1bVBob3RvcygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxidW0gUGhvdG9zIFZpZXcgUmVuZGVyZWQhXCIpO1xuICAgIH1cblxuICAgIGNvbnZlcnREYXRlVGltZShkYXRlOiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGdldEFsYnVtUGhvdG9zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hbGJ1bVRpdGxlID0gXCJYWFhcIjtcbiAgICAgICAgdGhpcy5fcGhvdG9zID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuX3Bob3Rvcy5wdXNoKHsgXCJEYXRlVXBsb2FkZWRcIjogXCIwMSBKYW4gMjAxNlwiLCBcIlRpdGxlXCI6IFwiQTpYWFwiLCBcIlVyaVwiOiBcImFhYVwiIH0pO1xuICAgICAgICB0aGlzLl9waG90b3MucHVzaCh7IFwiRGF0ZVVwbG9hZGVkXCI6IFwiMDIgSmFuIDIwMTZcIiwgXCJUaXRsZVwiOiBcIkI6WFhcIiwgXCJVcmlcIjogXCJiYmJcIiB9KTtcbiAgICAgICAgdGhpcy5fcGhvdG9zLnB1c2goeyBcIkRhdGVVcGxvYWRlZFwiOiBcIjAzIEphbiAyMDE2XCIsIFwiVGl0bGVcIjogXCJDOlhYXCIsIFwiVXJpXCI6IFwiY2NjXCIgfSk7XG4gICAgICAgIHRoaXMuX3Bob3Rvcy5wdXNoKHsgXCJEYXRlVXBsb2FkZWRcIjogXCIwNCBKYW4gMjAxNlwiLCBcIlRpdGxlXCI6IFwiRDpYWFwiLCBcIlVyaVwiOiBcImRkZFwiIH0pO1xuICAgICAgICB0aGlzLl9waG90b3MucHVzaCh7IFwiRGF0ZVVwbG9hZGVkXCI6IFwiMDUgSmFuIDIwMTZcIiwgXCJUaXRsZVwiOiBcIkU6WFhcIiwgXCJVcmlcIjogXCJlZWVcIiB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
