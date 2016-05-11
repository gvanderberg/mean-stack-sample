"use strict";
var express = require("express");
var AlbumRoutes = require("./../AlbumRoutes");
var AuthenticateRoutes = require("./../AuthenticateRoutes");
var PhotoRoutes = require("./../PhotoRoutes");
var RoleRoutes = require("./../RoleRoutes");
var SetupRoutes = require("./../SetupRoutes");
var UserRoutes = require("./../UserRoutes");
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            // api routes
            app.use("/api/v1/albums", new AlbumRoutes().routes);
            app.use("/api/v1/authenticate", new AuthenticateRoutes().routes);
            app.use("/api/v1/photos", new PhotoRoutes().routes);
            app.use("/api/v1/roles", new RoleRoutes().routes);
            app.use("/api/v1/setup", new SetupRoutes().routes);
            app.use("/api/v1/users", new UserRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
module.exports = BaseRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvYmFzZS9CYXNlUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVwQyxJQUFPLFdBQVcsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELElBQU8sa0JBQWtCLFdBQVcseUJBQXlCLENBQUMsQ0FBQztBQUMvRCxJQUFPLFdBQVcsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELElBQU8sVUFBVSxXQUFXLGlCQUFpQixDQUFDLENBQUM7QUFDL0MsSUFBTyxXQUFXLFdBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxJQUFPLFVBQVUsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBRS9DLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCO0lBQUE7SUFZQSxDQUFDO0lBWEcsc0JBQUksOEJBQU07YUFBVjtZQUNJLGFBQWE7WUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWxELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFFRCxpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiYXBpL3JvdXRlcy9iYXNlL0Jhc2VSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmltcG9ydCBBbGJ1bVJvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL0FsYnVtUm91dGVzXCIpO1xuaW1wb3J0IEF1dGhlbnRpY2F0ZVJvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL0F1dGhlbnRpY2F0ZVJvdXRlc1wiKTtcbmltcG9ydCBQaG90b1JvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL1Bob3RvUm91dGVzXCIpO1xuaW1wb3J0IFJvbGVSb3V0ZXMgPSByZXF1aXJlKFwiLi8uLi9Sb2xlUm91dGVzXCIpO1xuaW1wb3J0IFNldHVwUm91dGVzID0gcmVxdWlyZShcIi4vLi4vU2V0dXBSb3V0ZXNcIik7XG5pbXBvcnQgVXNlclJvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL1VzZXJSb3V0ZXNcIik7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5cbmNsYXNzIEJhc2VSb3V0ZXMge1xuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICAgIC8vIGFwaSByb3V0ZXNcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvYWxidW1zXCIsIG5ldyBBbGJ1bVJvdXRlcygpLnJvdXRlcyk7XG4gICAgICAgIGFwcC51c2UoXCIvYXBpL3YxL2F1dGhlbnRpY2F0ZVwiLCBuZXcgQXV0aGVudGljYXRlUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvcGhvdG9zXCIsIG5ldyBQaG90b1JvdXRlcygpLnJvdXRlcyk7XG4gICAgICAgIGFwcC51c2UoXCIvYXBpL3YxL3JvbGVzXCIsIG5ldyBSb2xlUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvc2V0dXBcIiwgbmV3IFNldHVwUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvdXNlcnNcIiwgbmV3IFVzZXJSb3V0ZXMoKS5yb3V0ZXMpO1xuXG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgfVxufVxuXG5leHBvcnQgPSBCYXNlUm91dGVzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
