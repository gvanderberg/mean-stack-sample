"use strict";
var express = require("express");
//import bodyParser = require("body-parser");
//import cookieParser = require("cookie-parser");
//import favicon = require("serve-favicon");
//import logger = require("morgan");
var BaseRoutes = require("./../../routes/base/BaseRoutes");
var MethodOverride = require("./../MethodOverride");
var BaseMiddlewares = (function () {
    function BaseMiddlewares() {
    }
    Object.defineProperty(BaseMiddlewares, "configuration", {
        get: function () {
            var app = express();
            //app.use(logger("dev"));
            //app.use(bodyParser.json());
            //app.use(bodyParser.urlencoded({ extended: false }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9taWRkbGV3YXJlcy9iYXNlL0Jhc2VNaWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsNkNBQTZDO0FBQzdDLGlEQUFpRDtBQUNqRCw0Q0FBNEM7QUFDNUMsb0NBQW9DO0FBQ3BDLElBQU8sVUFBVSxXQUFXLGdDQUFnQyxDQUFDLENBQUM7QUFDOUQsSUFBTyxjQUFjLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUV2RDtJQUFBO0lBYUEsQ0FBQztJQVpHLHNCQUFXLGdDQUFhO2FBQXhCO1lBQ0ksSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7WUFFcEIseUJBQXlCO1lBQ3pCLDZCQUE2QjtZQUM3QixzREFBc0Q7WUFDdEQsMEJBQTBCO1lBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUNMLHNCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTdCLGlCQUFTLGVBQWUsQ0FBQyIsImZpbGUiOiJhcGkvbWlkZGxld2FyZXMvYmFzZS9CYXNlTWlkZGxld2FyZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuLy9pbXBvcnQgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcbi8vaW1wb3J0IGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpO1xuLy9pbXBvcnQgZmF2aWNvbiA9IHJlcXVpcmUoXCJzZXJ2ZS1mYXZpY29uXCIpO1xuLy9pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbmltcG9ydCBCYXNlUm91dGVzID0gcmVxdWlyZShcIi4vLi4vLi4vcm91dGVzL2Jhc2UvQmFzZVJvdXRlc1wiKTtcbmltcG9ydCBNZXRob2RPdmVycmlkZSA9IHJlcXVpcmUoXCIuLy4uL01ldGhvZE92ZXJyaWRlXCIpO1xuXG5jbGFzcyBCYXNlTWlkZGxld2FyZXMge1xuICAgIHN0YXRpYyBnZXQgY29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgdmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuICAgICAgICAvL2FwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcbiAgICAgICAgLy9hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgLy9hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gICAgICAgIC8vYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgICAgIGFwcC51c2UoTWV0aG9kT3ZlcnJpZGUuY29uZmlndXJhdGlvbigpKTtcbiAgICAgICAgYXBwLnVzZShuZXcgQmFzZVJvdXRlcygpLnJvdXRlcyk7XG5cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKEJhc2VNaWRkbGV3YXJlcyk7XG5cbmV4cG9ydCA9IEJhc2VNaWRkbGV3YXJlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
