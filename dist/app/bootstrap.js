System.register(["angular2/platform/browser", "angular2/core", "angular2/common", "angular2/http", "angular2/router", "angular2/platform/common", "rxjs/add/operator/map", "./components/app/app.component", "./core/services/dataService", "./core/services/membershipService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var browser_1, core_1, common_1, http_1, router_1, common_2, app_component_1, dataService_1, membershipService_1;
    var AppBaseRequestOptions;
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
            AppBaseRequestOptions = (function (_super) {
                __extends(AppBaseRequestOptions, _super);
                function AppBaseRequestOptions() {
                    _super.apply(this, arguments);
                    this.headers = new http_1.Headers({
                        "Content-Type": "application/json"
                    });
                }
                return AppBaseRequestOptions;
            }(http_1.BaseRequestOptions));
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }), dataService_1.DataService, membershipService_1.MembershipService]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBb0MseUNBQWtCO2dCQUF0RDtvQkFBb0MsOEJBQWtCO29CQUNsRCxZQUFPLEdBQVksSUFBSSxjQUFPLENBQUM7d0JBQzNCLGNBQWMsRUFBRSxrQkFBa0I7cUJBQ3JDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUFELDRCQUFDO1lBQUQsQ0FKQSxBQUlDLENBSm1DLHlCQUFrQixHQUlyRDtZQUVELG1CQUFTLENBQUMsNEJBQVksRUFDbEIsQ0FBQyxxQkFBYztnQkFDWCx5QkFBZ0I7Z0JBQ2hCLHdCQUFlO2dCQUNmLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRSxDQUFDLEVBQUUseUJBQVcsRUFBRSxxQ0FBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSBcImFuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXJcIjtcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0hUVFBfQklORElOR1MsIEhUVFBfUFJPVklERVJTLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgQmFzZVJlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9CSU5ESU5HU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gXCJhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvZGF0YVNlcnZpY2VcIjtcbmltcG9ydCB7TWVtYmVyc2hpcFNlcnZpY2V9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvbWVtYmVyc2hpcFNlcnZpY2VcIjtcblxuY2xhc3MgQXBwQmFzZVJlcXVlc3RPcHRpb25zIGV4dGVuZHMgQmFzZVJlcXVlc3RPcHRpb25zIHtcbiAgICBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0pXG59XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsXG4gICAgW0hUVFBfUFJPVklERVJTLFxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxuICAgICAgICBDT1JFX0RJUkVDVElWRVMsXG4gICAgICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSksIERhdGFTZXJ2aWNlLCBNZW1iZXJzaGlwU2VydmljZV0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
