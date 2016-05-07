System.register(["angular2/platform/browser", "angular2/core", "angular2/common", "angular2/http", "angular2/router", "angular2/platform/common", "rxjs/add/operator/map", "./components/app/app.component", "./core/services/dataService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, common_1, http_1, router_1, common_2, app_component_1, dataService_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                core_1.provide(http_1.RequestOptions, { useClass: http_1.BaseRequestOptions }),
                core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }), dataService_1.DataService]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQSxtQkFBUyxDQUFDLDRCQUFZLEVBQ1YsQ0FBQyxxQkFBYztnQkFDZix5QkFBZ0I7Z0JBQ2hCLHdCQUFlO2dCQUNmLGNBQU8sQ0FBQyxxQkFBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLHlCQUFrQixFQUFFLENBQUM7Z0JBQ3pELGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRSxDQUFDLEVBQUUseUJBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSBcImFuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXJcIjtcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0hUVFBfQklORElOR1MsIEhUVFBfUFJPVklERVJTLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgQmFzZVJlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9CSU5ESU5HU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gXCJhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvZGF0YVNlcnZpY2VcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgXG4gICAgICAgICAgICBbSFRUUF9QUk9WSURFUlMsIFxuICAgICAgICAgICAgUk9VVEVSX1BST1ZJREVSUywgXG4gICAgICAgICAgICBDT1JFX0RJUkVDVElWRVMsIFxuICAgICAgICAgICAgcHJvdmlkZShSZXF1ZXN0T3B0aW9ucywgeyB1c2VDbGFzczogQmFzZVJlcXVlc3RPcHRpb25zIH0pLCBcbiAgICAgICAgICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSksIERhdGFTZXJ2aWNlXSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
