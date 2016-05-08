System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotificationService = (function () {
                function NotificationService() {
                    this._notify = alert;
                }
                NotificationService.prototype.printConfirmationDialog = function (message, okCallback) {
                    this._notify.confirm(message, function (e) {
                        if (e) {
                            okCallback();
                        }
                        else {
                        }
                    });
                };
                NotificationService.prototype.printErrorMessage = function (message) {
                    this._notify.error(message);
                };
                NotificationService.prototype.printSuccessMessage = function (message) {
                    this._notify.success(message);
                };
                NotificationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NotificationService);
                return NotificationService;
            }());
            exports_1("NotificationService", NotificationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFHSTtvQkFGUSxZQUFPLEdBQVEsS0FBSyxDQUFDO2dCQUViLENBQUM7Z0JBRWpCLHFEQUF1QixHQUF2QixVQUF3QixPQUFlLEVBQUUsVUFBcUI7b0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ0osVUFBVSxFQUFFLENBQUM7d0JBQ2pCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1IsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELCtDQUFpQixHQUFqQixVQUFrQixPQUFlO29CQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxpREFBbUIsR0FBbkIsVUFBb0IsT0FBZTtvQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBckJMO29CQUFDLGlCQUFVLEVBQUU7O3VDQUFBO2dCQXNCYiwwQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQscURBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuZGVjbGFyZSBsZXQgYWxlcnQ6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgX25vdGlmeTogYW55ID0gYWxlcnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHJpbnRDb25maXJtYXRpb25EaWFsb2cobWVzc2FnZTogc3RyaW5nLCBva0NhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5LmNvbmZpcm0obWVzc2FnZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgb2tDYWxsYmFjaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpbnRFcnJvck1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25vdGlmeS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcmludFN1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9ub3RpZnkuc3VjY2VzcyhtZXNzYWdlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
