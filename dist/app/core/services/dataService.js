System.register(["angular2/http", "angular2/core"], function(exports_1, context_1) {
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
    var http_1, core_1;
    var DataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                }
                DataService.prototype.set = function (baseUri, pageSize) {
                    this._baseUri = baseUri;
                    this._pageSize = pageSize;
                };
                //get(page: number) {
                //    var uri = this._baseUri + page.toString() + "/" + this._pageSize.toString();
                //    return this.http.get(uri)
                //        .map(response => <any>(<Response>response).json());
                //}
                DataService.prototype.get = function (page) {
                    var uri = this._baseUri + page.toString() + "/" + this._pageSize.toString();
                    return this.http.get(uri).map(function (response) { return (response); });
                };
                DataService.prototype.post = function (data, mapJson) {
                    if (mapJson === void 0) { mapJson = true; }
                    if (mapJson)
                        return this.http.post(this._baseUri, data).map(function (response) { return response.json(); });
                    else
                        return this.http.post(this._baseUri, data);
                };
                DataService.prototype.delete = function (id) {
                    return this.http.delete(this._baseUri + "/" + id.toString()).map(function (response) { return response.json(); });
                };
                DataService.prototype.deleteResource = function (resource) {
                    return this.http.delete(resource).map(function (response) { return response.json(); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBS0kscUJBQW1CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFFN0IsQ0FBQztnQkFFRCx5QkFBRyxHQUFILFVBQUksT0FBZSxFQUFFLFFBQWlCO29CQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQscUJBQXFCO2dCQUNyQixrRkFBa0Y7Z0JBRWxGLCtCQUErQjtnQkFDL0IsNkRBQTZEO2dCQUM3RCxHQUFHO2dCQUVILHlCQUFHLEdBQUgsVUFBSSxJQUFZO29CQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUU1RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsQ0FBVyxRQUFRLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUVELDBCQUFJLEdBQUosVUFBSyxJQUFVLEVBQUUsT0FBdUI7b0JBQXZCLHVCQUF1QixHQUF2QixjQUF1QjtvQkFDcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFnQixRQUFTLENBQUMsSUFBSSxFQUFFLEVBQWhDLENBQWdDLENBQUMsQ0FBQztvQkFDakcsSUFBSTt3QkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFRCw0QkFBTSxHQUFOLFVBQU8sRUFBVTtvQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQWdCLFFBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFBO2dCQUNsSCxDQUFDO2dCQUVELG9DQUFjLEdBQWQsVUFBZSxRQUFnQjtvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFnQixRQUFTLENBQUMsSUFBSSxFQUFFLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtnQkFDdkYsQ0FBQztnQkF6Q0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBMENiLGtCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCxxQ0F5Q0MsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9zZXJ2aWNlcy9kYXRhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3R9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG5cbiAgICBwdWJsaWMgX3BhZ2VTaXplOiBudW1iZXI7XG4gICAgcHVibGljIF9iYXNlVXJpOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXG4gICAgfVxuXG4gICAgc2V0KGJhc2VVcmk6IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmFzZVVyaSA9IGJhc2VVcmk7XG4gICAgICAgIHRoaXMuX3BhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG4gICAgLy9nZXQocGFnZTogbnVtYmVyKSB7XG4gICAgLy8gICAgdmFyIHVyaSA9IHRoaXMuX2Jhc2VVcmkgKyBwYWdlLnRvU3RyaW5nKCkgKyBcIi9cIiArIHRoaXMuX3BhZ2VTaXplLnRvU3RyaW5nKCk7XG5cbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmkpXG4gICAgLy8gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gPGFueT4oPFJlc3BvbnNlPnJlc3BvbnNlKS5qc29uKCkpO1xuICAgIC8vfVxuXG4gICAgZ2V0KHBhZ2U6IG51bWJlcikge1xuICAgICAgICB2YXIgdXJpID0gdGhpcy5fYmFzZVVyaSArIHBhZ2UudG9TdHJpbmcoKSArIFwiL1wiICsgdGhpcy5fcGFnZVNpemUudG9TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmkpLm1hcChyZXNwb25zZSA9PiAoPFJlc3BvbnNlPnJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgcG9zdChkYXRhPzogYW55LCBtYXBKc29uOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAobWFwSnNvbilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJpLCBkYXRhKS5tYXAocmVzcG9uc2UgPT4gPGFueT4oPFJlc3BvbnNlPnJlc3BvbnNlKS5qc29uKCkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVyaSwgZGF0YSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5fYmFzZVVyaSArIFwiL1wiICsgaWQudG9TdHJpbmcoKSkubWFwKHJlc3BvbnNlID0+IDxhbnk+KDxSZXNwb25zZT5yZXNwb25zZSkuanNvbigpKVxuICAgIH1cblxuICAgIGRlbGV0ZVJlc291cmNlKHJlc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUocmVzb3VyY2UpLm1hcChyZXNwb25zZSA9PiA8YW55Pig8UmVzcG9uc2U+cmVzcG9uc2UpLmpzb24oKSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
