System.register(["angular2/platform/browser", "angular2/core", "angular2/common", "angular2/http", "angular2/router", "angular2/platform/common", "rxjs/add/operator/map", "./components/app/app.component", "./core/services/dataService", "./core/services/membershipService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, common_1, http_1, router_1, common_2, app_component_1, dataService_1, membershipService_1;
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
            },
            function (membershipService_1_1) {
                membershipService_1 = membershipService_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                core_1.provide(http_1.RequestOptions, { useClass: http_1.BaseRequestOptions }),
                core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }), dataService_1.DataService, membershipService_1.MembershipService]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQSxtQkFBUyxDQUFDLDRCQUFZLEVBQ2xCLENBQUMscUJBQWM7Z0JBQ1gseUJBQWdCO2dCQUNoQix3QkFBZTtnQkFDZixjQUFPLENBQUMscUJBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSx5QkFBa0IsRUFBRSxDQUFDO2dCQUN6RCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUUsQ0FBQyxFQUFFLHlCQUFXLEVBQUUscUNBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gXCJhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtIVFRQX0JJTkRJTkdTLCBIVFRQX1BST1ZJREVSUywgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIEJhc2VSZXF1ZXN0T3B0aW9uc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTLCBST1VURVJfQklORElOR1N9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7TG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlXCI7XG5pbXBvcnQge01lbWJlcnNoaXBTZXJ2aWNlfSBmcm9tIFwiLi9jb3JlL3NlcnZpY2VzL21lbWJlcnNoaXBTZXJ2aWNlXCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsXG4gICAgW0hUVFBfUFJPVklERVJTLFxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxuICAgICAgICBDT1JFX0RJUkVDVElWRVMsXG4gICAgICAgIHByb3ZpZGUoUmVxdWVzdE9wdGlvbnMsIHsgdXNlQ2xhc3M6IEJhc2VSZXF1ZXN0T3B0aW9ucyB9KSxcbiAgICAgICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7IHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9KSwgRGF0YVNlcnZpY2UsIE1lbWJlcnNoaXBTZXJ2aWNlXSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
