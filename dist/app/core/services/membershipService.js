System.register(["angular2/core", "./dataService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dataService_1;
    var MembershipService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            }],
        execute: function() {
            MembershipService = (function () {
                function MembershipService(dataService) {
                    this.dataService = dataService;
                    this._loginApi = "api/v1/account/login/";
                    this._logoutApi = "api/v1/account/logout/";
                    this._registerApi = "api/v1/account/register/";
                }
                MembershipService.prototype.getLoggedInUser = function () {
                    var user;
                    if (this.isAuthenticated()) {
                        var userData = JSON.parse(localStorage.getItem("user"));
                        user = { "username": userData.username, "password": userData.password };
                    }
                    return user;
                };
                MembershipService.prototype.isAuthenticated = function () {
                    var user = localStorage.getItem("user");
                    if (user != null) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                MembershipService.prototype.login = function (credentials) {
                    this.dataService.set(this._loginApi);
                    return this.dataService.post(JSON.stringify(credentials));
                };
                MembershipService.prototype.logout = function () {
                    this.dataService.set(this._logoutApi);
                    return this.dataService.post(null, false);
                };
                MembershipService.prototype.register = function (registration) {
                    this.dataService.set(this._registerApi);
                    return this.dataService.post(registration);
                };
                MembershipService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [dataService_1.DataService])
                ], MembershipService);
                return MembershipService;
            }());
            exports_1("MembershipService", MembershipService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL21lbWJlcnNoaXBTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBS0ksMkJBQW1CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFKbkMsY0FBUyxHQUFXLHVCQUF1QixDQUFDO29CQUM1QyxlQUFVLEdBQVcsd0JBQXdCLENBQUM7b0JBQzlDLGlCQUFZLEdBQVcsMEJBQTBCLENBQUM7Z0JBSTFELENBQUM7Z0JBRUQsMkNBQWUsR0FBZjtvQkFDSSxJQUFJLElBQVksQ0FBQztvQkFFakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRXhELElBQUksR0FBRyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzVFLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCwyQ0FBZSxHQUFmO29CQUNJLElBQUksSUFBSSxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFLLEdBQUwsVUFBTSxXQUFXO29CQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFRCxrQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSLFVBQVMsWUFBb0I7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQWhETDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkFpRGIsd0JBQUM7WUFBRCxDQWhEQSxBQWdEQyxJQUFBO1lBaERELGlEQWdEQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL3NlcnZpY2VzL21lbWJlcnNoaXBTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL2RhdGFTZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW1iZXJzaGlwU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbG9naW5BcGk6IHN0cmluZyA9IFwiYXBpL3YxL2FjY291bnQvbG9naW4vXCI7XG4gICAgcHJpdmF0ZSBfbG9nb3V0QXBpOiBzdHJpbmcgPSBcImFwaS92MS9hY2NvdW50L2xvZ291dC9cIjtcbiAgICBwcml2YXRlIF9yZWdpc3RlckFwaTogc3RyaW5nID0gXCJhcGkvdjEvYWNjb3VudC9yZWdpc3Rlci9cIjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGdldExvZ2dlZEluVXNlcigpOiBPYmplY3Qge1xuICAgICAgICBsZXQgdXNlcjogT2JqZWN0O1xuXG4gICAgICAgIGlmICh0aGlzLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICBsZXQgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG5cbiAgICAgICAgICAgIHVzZXIgPSB7IFwidXNlcm5hbWVcIjogdXNlckRhdGEudXNlcm5hbWUsIFwicGFzc3dvcmRcIjogdXNlckRhdGEucGFzc3dvcmQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHVzZXI6IE9iamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcblxuICAgICAgICBpZiAodXNlciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0KHRoaXMuX2xvZ2luQXBpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wb3N0KEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldCh0aGlzLl9sb2dvdXRBcGkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnBvc3QobnVsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHJlZ2lzdHJhdGlvbjogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0KHRoaXMuX3JlZ2lzdGVyQXBpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wb3N0KHJlZ2lzdHJhdGlvbik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
