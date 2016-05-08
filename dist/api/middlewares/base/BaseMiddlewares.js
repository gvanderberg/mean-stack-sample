"use strict";
var express = require("express");
var bodyParser = require("body-parser");
//import cookieParser = require("cookie-parser");
//import favicon = require("serve-favicon");
var logger = require("morgan");
var BaseRoutes = require("./../../routes/base/BaseRoutes");
var MethodOverride = require("./../MethodOverride");
var BaseMiddlewares = (function () {
    function BaseMiddlewares() {
    }
    Object.defineProperty(BaseMiddlewares, "configuration", {
        get: function () {
            var app = express();
            app.use(logger("dev"));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            //app.use(cookieParser());
            app.use(MethodOverride.configuration());
            app.use(new BaseRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseMiddlewares;
}());
Object.seal(BaseMiddlewares);
module.exports = BaseMiddlewares;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9taWRkbGV3YXJlcy9iYXNlL0Jhc2VNaWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxVQUFVLFdBQVcsYUFBYSxDQUFDLENBQUM7QUFDM0MsaURBQWlEO0FBQ2pELDRDQUE0QztBQUM1QyxJQUFPLE1BQU0sV0FBVyxRQUFRLENBQUMsQ0FBQztBQUNsQyxJQUFPLFVBQVUsV0FBVyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzlELElBQU8sY0FBYyxXQUFXLHFCQUFxQixDQUFDLENBQUM7QUFFdkQ7SUFBQTtJQWFBLENBQUM7SUFaRyxzQkFBVyxnQ0FBYTthQUF4QjtZQUNJLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELDBCQUEwQjtZQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxzQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU3QixpQkFBUyxlQUFlLENBQUMiLCJmaWxlIjoiYXBpL21pZGRsZXdhcmVzL2Jhc2UvQmFzZU1pZGRsZXdhcmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuLy9pbXBvcnQgY29va2llUGFyc2VyID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7XG4vL2ltcG9ydCBmYXZpY29uID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbmltcG9ydCBCYXNlUm91dGVzID0gcmVxdWlyZShcIi4vLi4vLi4vcm91dGVzL2Jhc2UvQmFzZVJvdXRlc1wiKTtcbmltcG9ydCBNZXRob2RPdmVycmlkZSA9IHJlcXVpcmUoXCIuLy4uL01ldGhvZE92ZXJyaWRlXCIpO1xuXG5jbGFzcyBCYXNlTWlkZGxld2FyZXMge1xuICAgIHN0YXRpYyBnZXQgY29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgbGV0IGFwcCA9IGV4cHJlc3MoKTtcblxuICAgICAgICBhcHAudXNlKGxvZ2dlcihcImRldlwiKSk7XG4gICAgICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gICAgICAgIC8vYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgICAgIGFwcC51c2UoTWV0aG9kT3ZlcnJpZGUuY29uZmlndXJhdGlvbigpKTtcbiAgICAgICAgYXBwLnVzZShuZXcgQmFzZVJvdXRlcygpLnJvdXRlcyk7XG5cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKEJhc2VNaWRkbGV3YXJlcyk7XG5cbmV4cG9ydCA9IEJhc2VNaWRkbGV3YXJlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
