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
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            }],
        execute: function() {
            PhotosComponent = (function (_super) {
                __extends(PhotosComponent, _super);
                function PhotosComponent(dataService) {
                    _super.call(this, 0, 0, 0);
                    this.dataService = dataService;
                    this._photosApi = "api/v1/photos/";
                    dataService.set(this._photosApi, 12);
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
                    __metadata('design:paramtypes', [dataService_1.DataService])
                ], PhotosComponent);
                return PhotosComponent;
            }(paginated_1.Paginated));
            exports_1("PhotosComponent", PhotosComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBcUMsbUNBQVM7Z0JBSTFDLHlCQUFtQixXQUF3QjtvQkFDdkMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFEQSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFIbkMsZUFBVSxHQUFXLGdCQUFnQixDQUFDO29CQU0xQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxtQ0FBUyxHQUFUO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsa0NBQVEsR0FBUixjQUFhLENBQUM7Z0JBeEJsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQzt3QkFDekQsV0FBVyxFQUFFLDZDQUE2Qzt3QkFDMUQsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLG1CQUFVLENBQUM7cUJBQzdELENBQUM7O21DQUFBO2dCQW9CRixzQkFBQztZQUFELENBbEJBLEFBa0JDLENBbEJvQyxxQkFBUyxHQWtCN0M7WUFsQkQsNkNBa0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIlxuaW1wb3J0IHtQYWdpbmF0ZWR9IGZyb20gXCIuLy4uLy4uL2NvcmUvY29tbW9uL3BhZ2luYXRlZFwiO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9kYXRhU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwaG90b3NcIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC9jb21wb25lbnRzL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvY29tcG9uZW50cy9waG90b3MvcGhvdG9zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rXVxufSlcblxuZXhwb3J0IGNsYXNzIFBob3Rvc0NvbXBvbmVudCBleHRlbmRzIFBhZ2luYXRlZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfcGhvdG9zQXBpOiBzdHJpbmcgPSBcImFwaS92MS9waG90b3MvXCI7XG4gICAgcHJpdmF0ZSBfcGhvdG9zOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICAgICAgICBzdXBlcigwLCAwLCAwKTtcblxuICAgICAgICBkYXRhU2VydmljZS5zZXQodGhpcy5fcGhvdG9zQXBpLCAxMik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJQaG90b3MgVmlldyBSZW5kZXJlZCFcIik7XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9waG90b3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5fcGhvdG9zLnB1c2goe30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
