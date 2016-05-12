"use strict";
var express = require("express");
var bodyParser = require("body-parser");
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
            app.use(bodyParser.urlencoded({ extended: true }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9taWRkbGV3YXJlcy9iYXNlL0Jhc2VNaWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxVQUFVLFdBQVcsYUFBYSxDQUFDLENBQUM7QUFDM0MsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFDbEMsSUFBTyxVQUFVLFdBQVcsZ0NBQWdDLENBQUMsQ0FBQztBQUM5RCxJQUFPLGNBQWMsV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBRXZEO0lBQUE7SUFZQSxDQUFDO0lBWEcsc0JBQVcsZ0NBQWE7YUFBeEI7WUFDSSxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztZQUVwQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxzQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU3QixpQkFBUyxlQUFlLENBQUMiLCJmaWxlIjoiYXBpL21pZGRsZXdhcmVzL2Jhc2UvQmFzZU1pZGRsZXdhcmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5pbXBvcnQgQmFzZVJvdXRlcyA9IHJlcXVpcmUoXCIuLy4uLy4uL3JvdXRlcy9iYXNlL0Jhc2VSb3V0ZXNcIik7XG5pbXBvcnQgTWV0aG9kT3ZlcnJpZGUgPSByZXF1aXJlKFwiLi8uLi9NZXRob2RPdmVycmlkZVwiKTtcblxuY2xhc3MgQmFzZU1pZGRsZXdhcmVzIHtcbiAgICBzdGF0aWMgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIGxldCBhcHAgPSBleHByZXNzKCk7XG5cbiAgICAgICAgYXBwLnVzZShsb2dnZXIoXCJkZXZcIikpO1xuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gICAgICAgIGFwcC51c2UoTWV0aG9kT3ZlcnJpZGUuY29uZmlndXJhdGlvbigpKTtcbiAgICAgICAgYXBwLnVzZShuZXcgQmFzZVJvdXRlcygpLnJvdXRlcyk7XG5cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKEJhc2VNaWRkbGV3YXJlcyk7XG5cbmV4cG9ydCA9IEJhc2VNaWRkbGV3YXJlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
