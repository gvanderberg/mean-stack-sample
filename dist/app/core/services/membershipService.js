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
                    return this.dataService.post(credentials);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL21lbWJlcnNoaXBTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBS0ksMkJBQW1CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFKbkMsY0FBUyxHQUFXLHVCQUF1QixDQUFDO29CQUM1QyxlQUFVLEdBQVcsd0JBQXdCLENBQUM7b0JBQzlDLGlCQUFZLEdBQVcsMEJBQTBCLENBQUM7Z0JBSTFELENBQUM7Z0JBRUQsMkNBQWUsR0FBZjtvQkFDSSxJQUFJLElBQVksQ0FBQztvQkFFakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRXhELElBQUksR0FBRyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzVFLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCwyQ0FBZSxHQUFmO29CQUNJLElBQUksSUFBSSxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGlDQUFLLEdBQUwsVUFBTSxXQUFtQjtvQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsa0NBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsb0NBQVEsR0FBUixVQUFTLFlBQW9CO29CQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFoREw7b0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7Z0JBaURiLHdCQUFDO1lBQUQsQ0FoREEsQUFnREMsSUFBQTtZQWhERCxpREFnREMsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9zZXJ2aWNlcy9tZW1iZXJzaGlwU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3R9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9kYXRhU2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVtYmVyc2hpcFNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2xvZ2luQXBpOiBzdHJpbmcgPSBcImFwaS92MS9hY2NvdW50L2xvZ2luL1wiO1xuICAgIHByaXZhdGUgX2xvZ291dEFwaTogc3RyaW5nID0gXCJhcGkvdjEvYWNjb3VudC9sb2dvdXQvXCI7XG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJBcGk6IHN0cmluZyA9IFwiYXBpL3YxL2FjY291bnQvcmVnaXN0ZXIvXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBnZXRMb2dnZWRJblVzZXIoKTogT2JqZWN0IHtcbiAgICAgICAgbGV0IHVzZXI6IE9iamVjdDtcblxuICAgICAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuXG4gICAgICAgICAgICB1c2VyID0geyBcInVzZXJuYW1lXCI6IHVzZXJEYXRhLnVzZXJuYW1lLCBcInBhc3N3b3JkXCI6IHVzZXJEYXRhLnBhc3N3b3JkIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB1c2VyOiBPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG5cbiAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbihjcmVkZW50aWFsczogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0KHRoaXMuX2xvZ2luQXBpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wb3N0KGNyZWRlbnRpYWxzKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0KHRoaXMuX2xvZ291dEFwaSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UucG9zdChudWxsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIocmVnaXN0cmF0aW9uOiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS5zZXQodGhpcy5fcmVnaXN0ZXJBcGkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnBvc3QocmVnaXN0cmF0aW9uKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
