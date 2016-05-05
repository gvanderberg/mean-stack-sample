System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChartModel;
    return {
        setters:[],
        execute: function() {
            ChartModel = (function () {
                function ChartModel(config) {
                    this.id = config["id"];
                    this.data = config["data"];
                    this.height = config["height"] || 300;
                    this.width = config["width"] || 600;
                }
                return ChartModel;
            }());
            exports_1("ChartModel", ChartModel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbHMvQ2hhcnRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBTUksb0JBQVksTUFBYztvQkFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztnQkFDeEMsQ0FBQztnQkFDTCxpQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsbUNBWUMsQ0FBQSIsImZpbGUiOiJhcHAvbW9kZWxzL0NoYXJ0TW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2hhcnRNb2RlbCB9IGZyb20gXCIuL2ludGVyZmFjZXMvQ2hhcnRNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBDaGFydE1vZGVsIGltcGxlbWVudHMgSUNoYXJ0TW9kZWwge1xuICAgIGlkOiBTdHJpbmc7XG4gICAgZGF0YTogT2JqZWN0O1xuICAgIGhlaWdodDogTnVtYmVyO1xuICAgIHdpZHRoOiBOdW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE9iamVjdCkge1xuICAgICAgICB0aGlzLmlkID0gY29uZmlnW1wiaWRcIl07XG4gICAgICAgIHRoaXMuZGF0YSA9IGNvbmZpZ1tcImRhdGFcIl07XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnW1wiaGVpZ2h0XCJdIHx8IDMwMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNvbmZpZ1tcIndpZHRoXCJdIHx8IDYwMDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
