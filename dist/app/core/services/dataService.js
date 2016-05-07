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
                    var uri = this._baseUri;
                    //var uri = this._baseUri + page.toString() + "/" + this._pageSize.toString();
                    return this.http.get(uri).map(function (res) { return (res); });
                };
                DataService.prototype.post = function (data, mapJson) {
                    if (mapJson === void 0) { mapJson = true; }
                    if (mapJson) {
                        return this.http.post(this._baseUri, data).map(function (response) { return response.json(); });
                    }
                    else {
                        return this.http.post(this._baseUri, data);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUkscUJBQW1CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFFN0IsQ0FBQztnQkFFRCx5QkFBRyxHQUFILFVBQUksT0FBZSxFQUFFLFFBQWlCO29CQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQscUJBQXFCO2dCQUNyQixrRkFBa0Y7Z0JBRWxGLCtCQUErQjtnQkFDL0IsNkRBQTZEO2dCQUM3RCxHQUFHO2dCQUVILHlCQUFHLEdBQUgsVUFBSSxJQUFZO29CQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3hCLDhFQUE4RTtvQkFFOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQVcsR0FBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsMEJBQUksR0FBSixVQUFLLElBQVUsRUFBRSxPQUF1QjtvQkFBdkIsdUJBQXVCLEdBQXZCLGNBQXVCO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFnQixRQUFTLENBQUMsSUFBSSxFQUFFLEVBQWhDLENBQWdDLENBQUMsQ0FBQztvQkFDakcsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDL0MsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFVO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBZ0IsUUFBUyxDQUFDLElBQUksRUFBRSxFQUFoQyxDQUFnQyxDQUFDLENBQUE7Z0JBQ2xILENBQUM7Z0JBRUQsb0NBQWMsR0FBZCxVQUFlLFFBQWdCO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQWdCLFFBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFBO2dCQUN2RixDQUFDO2dCQTNDTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE0Q2Isa0JBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELHFDQTJDQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgICBwdWJsaWMgX3BhZ2VTaXplOiBudW1iZXI7XG4gICAgcHVibGljIF9iYXNlVXJpOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXG4gICAgfVxuXG4gICAgc2V0KGJhc2VVcmk6IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmFzZVVyaSA9IGJhc2VVcmk7XG4gICAgICAgIHRoaXMuX3BhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG4gICAgLy9nZXQocGFnZTogbnVtYmVyKSB7XG4gICAgLy8gICAgdmFyIHVyaSA9IHRoaXMuX2Jhc2VVcmkgKyBwYWdlLnRvU3RyaW5nKCkgKyBcIi9cIiArIHRoaXMuX3BhZ2VTaXplLnRvU3RyaW5nKCk7XG5cbiAgICAvLyAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmkpXG4gICAgLy8gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gPGFueT4oPFJlc3BvbnNlPnJlc3BvbnNlKS5qc29uKCkpO1xuICAgIC8vfVxuXG4gICAgZ2V0KHBhZ2U6IG51bWJlcikge1xuICAgICAgICB2YXIgdXJpID0gdGhpcy5fYmFzZVVyaTtcbiAgICAgICAgLy92YXIgdXJpID0gdGhpcy5fYmFzZVVyaSArIHBhZ2UudG9TdHJpbmcoKSArIFwiL1wiICsgdGhpcy5fcGFnZVNpemUudG9TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmkpLm1hcChyZXMgPT4gKDxSZXNwb25zZT5yZXMpKTtcbiAgICB9XG5cbiAgICBwb3N0KGRhdGE/OiBhbnksIG1hcEpzb246IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChtYXBKc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVyaSwgZGF0YSkubWFwKHJlc3BvbnNlID0+IDxhbnk+KDxSZXNwb25zZT5yZXNwb25zZSkuanNvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJpLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuX2Jhc2VVcmkgKyBcIi9cIiArIGlkLnRvU3RyaW5nKCkpLm1hcChyZXNwb25zZSA9PiA8YW55Pig8UmVzcG9uc2U+cmVzcG9uc2UpLmpzb24oKSlcbiAgICB9XG5cbiAgICBkZWxldGVSZXNvdXJjZShyZXNvdXJjZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHJlc291cmNlKS5tYXAocmVzcG9uc2UgPT4gPGFueT4oPFJlc3BvbnNlPnJlc3BvbnNlKS5qc29uKCkpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
