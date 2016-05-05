System.register(["angular2/platform/browser", "angular2/common", "angular2/router", "./components/app/app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, common_1, router_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, common_1.CORE_DIRECTIVES]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHlCQUFnQixFQUFFLHdCQUFlLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXAgfSBmcm9tIFwiYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlclwiXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiXG5pbXBvcnQgeyBST1VURVJfQklORElOR1MsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnRcIlxuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbUk9VVEVSX1BST1ZJREVSUywgQ09SRV9ESVJFQ1RJVkVTXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
