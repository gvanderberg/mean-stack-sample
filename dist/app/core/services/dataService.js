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
                    console.log(JSON.stringify(data));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUkscUJBQW1CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFFN0IsQ0FBQztnQkFFRCx5QkFBRyxHQUFILFVBQUksT0FBZSxFQUFFLFFBQWlCO29CQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQseUJBQUcsR0FBSCxVQUFJLElBQVk7b0JBQ1osSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBRTVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFXLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELDBCQUFJLEdBQUosVUFBSyxJQUFVLEVBQUUsT0FBdUI7b0JBQXZCLHVCQUF1QixHQUF2QixjQUF1QjtvQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWdCLEdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO29CQUN2RixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMvQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLEVBQVU7b0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFnQixHQUFJLENBQUMsSUFBSSxFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtnQkFDeEcsQ0FBQztnQkFFRCxvQ0FBYyxHQUFkLFVBQWUsUUFBZ0I7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBZ0IsR0FBSSxDQUFDLElBQUksRUFBRSxFQUEzQixDQUEyQixDQUFDLENBQUE7Z0JBQzdFLENBQUM7Z0JBbkNMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQW9DYixrQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QscUNBbUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvc2VydmljZXMvZGF0YVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0fSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAgIHB1YmxpYyBfcGFnZVNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgX2Jhc2VVcmk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBzZXQoYmFzZVVyaTogc3RyaW5nLCBwYWdlU2l6ZT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iYXNlVXJpID0gYmFzZVVyaTtcbiAgICAgICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbiAgICBnZXQocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB1cmkgPSB0aGlzLl9iYXNlVXJpICsgcGFnZS50b1N0cmluZygpICsgXCIvXCIgKyB0aGlzLl9wYWdlU2l6ZS50b1N0cmluZygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVyaSkubWFwKHJlcyA9PiAoPFJlc3BvbnNlPnJlcykpO1xuICAgIH1cblxuICAgIHBvc3QoZGF0YT86IGFueSwgbWFwSnNvbjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBpZiAobWFwSnNvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX2Jhc2VVcmksIGRhdGEpLm1hcChyZXMgPT4gPGFueT4oPFJlc3BvbnNlPnJlcykuanNvbigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJpLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuX2Jhc2VVcmkgKyBcIi9cIiArIGlkLnRvU3RyaW5nKCkpLm1hcChyZXMgPT4gPGFueT4oPFJlc3BvbnNlPnJlcykuanNvbigpKVxuICAgIH1cblxuICAgIGRlbGV0ZVJlc291cmNlKHJlc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUocmVzb3VyY2UpLm1hcChyZXMgPT4gPGFueT4oPFJlc3BvbnNlPnJlcykuanNvbigpKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
