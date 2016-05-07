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
            }],
        execute: function() {
            AlbumPhotosComponent = (function (_super) {
                __extends(AlbumPhotosComponent, _super);
                function AlbumPhotosComponent(routeParam) {
                    _super.call(this, 0, 0, 0);
                    this.routeParam = routeParam;
                    this._albumsApi = "api/v1/albums";
                    this._photosApi = "api/v1/photos";
                    console.log("Album Photos View Rendered!");
                    this._routeParam = routeParam;
                    this._albumId = this._routeParam.get("id");
                    this._albumsApi += this._albumId + "/photos/";
                    this.getAlbumPhotos();
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
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], AlbumPhotosComponent);
                return AlbumPhotosComponent;
            }(paginated_1.Paginated));
            exports_1("AlbumPhotosComponent", AlbumPhotosComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUEwQyx3Q0FBUztnQkFRL0MsOEJBQW1CLFVBQXVCO29CQUN0QyxrQkFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQURBLGVBQVUsR0FBVixVQUFVLENBQWE7b0JBUGxDLGVBQVUsR0FBVyxlQUFlLENBQUM7b0JBQ3JDLGVBQVUsR0FBVyxlQUFlLENBQUM7b0JBU3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7b0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7b0JBRTlDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCw4Q0FBZSxHQUFmLFVBQWdCLElBQVU7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsNkNBQWMsR0FBZDtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBRUQsdUNBQVEsR0FBUixjQUFhLENBQUM7Z0JBeENsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixTQUFTLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQzt3QkFDcEUsV0FBVyxFQUFFLHdEQUF3RDt3QkFDckUsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLG1CQUFVLENBQUM7cUJBQzdELENBQUM7O3dDQUFBO2dCQW9DRiwyQkFBQztZQUFELENBbENBLEFBa0NDLENBbEN5QyxxQkFBUyxHQWtDbEQ7WUFsQ0QsdURBa0NDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWxidW1QaG90b3MvYWxidW0tcGhvdG9zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlckxpbmssIFJvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCJcbmltcG9ydCB7Um91dGVzLCBBUFBfUk9VVEVTfSBmcm9tIFwiLi8uLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCB7UGFnaW5hdGVkfSBmcm9tIFwiLi8uLi8uLi9jb3JlL2NvbW1vbi9wYWdpbmF0ZWRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYWxidW0tcGhvdG9zXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJhcHAvY29tcG9uZW50cy9hbGJ1bVBob3Rvcy9hbGJ1bS1waG90b3MuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50cy9hbGJ1bVBob3Rvcy9hbGJ1bS1waG90b3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIFJvdXRlckxpbmtdXG59KVxuXG5leHBvcnQgY2xhc3MgQWxidW1QaG90b3NDb21wb25lbnQgZXh0ZW5kcyBQYWdpbmF0ZWQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2FsYnVtc0FwaTogc3RyaW5nID0gXCJhcGkvdjEvYWxidW1zXCI7XG4gICAgcHJpdmF0ZSBfcGhvdG9zQXBpOiBzdHJpbmcgPSBcImFwaS92MS9waG90b3NcIjtcbiAgICBwcml2YXRlIF9hbGJ1bUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYWxidW1UaXRsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3Bob3RvczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtOiBSb3V0ZVBhcmFtcztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZVBhcmFtOiBSb3V0ZVBhcmFtcykge1xuICAgICAgICBzdXBlcigwLCAwLCAwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkFsYnVtIFBob3RvcyBWaWV3IFJlbmRlcmVkIVwiKTtcbiAgICAgICAgdGhpcy5fcm91dGVQYXJhbSA9IHJvdXRlUGFyYW07XG4gICAgICAgIHRoaXMuX2FsYnVtSWQgPSB0aGlzLl9yb3V0ZVBhcmFtLmdldChcImlkXCIpO1xuICAgICAgICB0aGlzLl9hbGJ1bXNBcGkgKz0gdGhpcy5fYWxidW1JZCArIFwiL3Bob3Rvcy9cIjtcblxuICAgICAgICB0aGlzLmdldEFsYnVtUGhvdG9zKCk7XG4gICAgfVxuXG4gICAgY29udmVydERhdGVUaW1lKGRhdGU6IERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0QWxidW1QaG90b3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FsYnVtVGl0bGUgPSBcIlhYWFwiO1xuICAgICAgICB0aGlzLl9waG90b3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5fcGhvdG9zLnB1c2goeyBcIkRhdGVVcGxvYWRlZFwiOiBcIjAxIEphbiAyMDE2XCIsIFwiVGl0bGVcIjogXCJBOlhYXCIsIFwiVXJpXCI6IFwiYWFhXCIgfSk7XG4gICAgICAgIHRoaXMuX3Bob3Rvcy5wdXNoKHsgXCJEYXRlVXBsb2FkZWRcIjogXCIwMiBKYW4gMjAxNlwiLCBcIlRpdGxlXCI6IFwiQjpYWFwiLCBcIlVyaVwiOiBcImJiYlwiIH0pO1xuICAgICAgICB0aGlzLl9waG90b3MucHVzaCh7IFwiRGF0ZVVwbG9hZGVkXCI6IFwiMDMgSmFuIDIwMTZcIiwgXCJUaXRsZVwiOiBcIkM6WFhcIiwgXCJVcmlcIjogXCJjY2NcIiB9KTtcbiAgICAgICAgdGhpcy5fcGhvdG9zLnB1c2goeyBcIkRhdGVVcGxvYWRlZFwiOiBcIjA0IEphbiAyMDE2XCIsIFwiVGl0bGVcIjogXCJEOlhYXCIsIFwiVXJpXCI6IFwiZGRkXCIgfSk7XG4gICAgICAgIHRoaXMuX3Bob3Rvcy5wdXNoKHsgXCJEYXRlVXBsb2FkZWRcIjogXCIwNSBKYW4gMjAxNlwiLCBcIlRpdGxlXCI6IFwiRTpYWFwiLCBcIlVyaVwiOiBcImVlZVwiIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
