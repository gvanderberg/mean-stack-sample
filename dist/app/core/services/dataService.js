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
                DataService.prototype.get = function (page) {
                    var uri = this._baseUri + page.toString() + "/" + this._pageSize.toString();
                    return this.http.get(uri).map(function (res) { return (res); });
                };
                DataService.prototype.post = function (data, mapJson) {
                    if (mapJson === void 0) { mapJson = true; }
                    if (mapJson) {
                        return this.http.post(this._baseUri, data).map(function (res) { return res.json(); });
                    }
                    else {
                        return this.http.post(this._baseUri, data);
                    }
                };
                DataService.prototype.delete = function (id) {
                    return this.http.delete(this._baseUri + "/" + id.toString()).map(function (res) { return res.json(); });
                };
                DataService.prototype.deleteResource = function (resource) {
                    return this.http.delete(resource).map(function (res) { return res.json(); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUkscUJBQW1CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFFN0IsQ0FBQztnQkFFRCx5QkFBRyxHQUFILFVBQUksT0FBZSxFQUFFLFFBQWlCO29CQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQseUJBQUcsR0FBSCxVQUFJLElBQVk7b0JBQ1osSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRTVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFXLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELDBCQUFJLEdBQUosVUFBSyxJQUFVLEVBQUUsT0FBdUI7b0JBQXZCLHVCQUF1QixHQUF2QixjQUF1QjtvQkFDcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBZ0IsR0FBSSxDQUFDLElBQUksRUFBRSxFQUEzQixDQUEyQixDQUFDLENBQUM7b0JBQ3ZGLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw0QkFBTSxHQUFOLFVBQU8sRUFBVTtvQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWdCLEdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFBO2dCQUN4RyxDQUFDO2dCQUVELG9DQUFjLEdBQWQsVUFBZSxRQUFnQjtvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFnQixHQUFJLENBQUMsSUFBSSxFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtnQkFDN0UsQ0FBQztnQkFsQ0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBbUNiLGtCQUFDO1lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtZQWxDRCxxQ0FrQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9zZXJ2aWNlcy9kYXRhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFJlcXVlc3R9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgcHVibGljIF9wYWdlU2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBfYmFzZVVyaTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHtcblxuICAgIH1cblxuICAgIHNldChiYXNlVXJpOiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Jhc2VVcmkgPSBiYXNlVXJpO1xuICAgICAgICB0aGlzLl9wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxuICAgIGdldChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVyaSA9IHRoaXMuX2Jhc2VVcmkgKyBwYWdlLnRvU3RyaW5nKCkgKyBcIi9cIiArIHRoaXMuX3BhZ2VTaXplLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJpKS5tYXAocmVzID0+ICg8UmVzcG9uc2U+cmVzKSk7XG4gICAgfVxuXG4gICAgcG9zdChkYXRhPzogYW55LCBtYXBKc29uOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAobWFwSnNvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX2Jhc2VVcmksIGRhdGEpLm1hcChyZXMgPT4gPGFueT4oPFJlc3BvbnNlPnJlcykuanNvbigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJpLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuX2Jhc2VVcmkgKyBcIi9cIiArIGlkLnRvU3RyaW5nKCkpLm1hcChyZXMgPT4gPGFueT4oPFJlc3BvbnNlPnJlcykuanNvbigpKVxuICAgIH1cblxuICAgIGRlbGV0ZVJlc291cmNlKHJlc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUocmVzb3VyY2UpLm1hcChyZXMgPT4gPGFueT4oPFJlc3BvbnNlPnJlcykuanNvbigpKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
