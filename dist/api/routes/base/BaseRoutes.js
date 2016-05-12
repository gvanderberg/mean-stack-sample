"use strict";
var express = require("express");
var AlbumRoutes = require("./../AlbumRoutes");
var AccountRoutes = require("./../AccountRoutes");
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
            app.use("/api/v1/account", new AccountRoutes().routes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvYmFzZS9CYXNlUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVwQyxJQUFPLFdBQVcsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELElBQU8sYUFBYSxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDckQsSUFBTyxXQUFXLFdBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxJQUFPLFVBQVUsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBQy9DLElBQU8sV0FBVyxXQUFXLGtCQUFrQixDQUFDLENBQUM7QUFDakQsSUFBTyxVQUFVLFdBQVcsaUJBQWlCLENBQUMsQ0FBQztBQUUvQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUVwQjtJQUFBO0lBWUEsQ0FBQztJQVhHLHNCQUFJLDhCQUFNO2FBQVY7WUFDSSxhQUFhO1lBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQUVELGlCQUFTLFVBQVUsQ0FBQyIsImZpbGUiOiJhcGkvcm91dGVzL2Jhc2UvQmFzZVJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuaW1wb3J0IEFsYnVtUm91dGVzID0gcmVxdWlyZShcIi4vLi4vQWxidW1Sb3V0ZXNcIik7XG5pbXBvcnQgQWNjb3VudFJvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL0FjY291bnRSb3V0ZXNcIik7XG5pbXBvcnQgUGhvdG9Sb3V0ZXMgPSByZXF1aXJlKFwiLi8uLi9QaG90b1JvdXRlc1wiKTtcbmltcG9ydCBSb2xlUm91dGVzID0gcmVxdWlyZShcIi4vLi4vUm9sZVJvdXRlc1wiKTtcbmltcG9ydCBTZXR1cFJvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL1NldHVwUm91dGVzXCIpO1xuaW1wb3J0IFVzZXJSb3V0ZXMgPSByZXF1aXJlKFwiLi8uLi9Vc2VyUm91dGVzXCIpO1xuXG5sZXQgYXBwID0gZXhwcmVzcygpO1xuXG5jbGFzcyBCYXNlUm91dGVzIHtcbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgICAvLyBhcGkgcm91dGVzXG4gICAgICAgIGFwcC51c2UoXCIvYXBpL3YxL2FsYnVtc1wiLCBuZXcgQWxidW1Sb3V0ZXMoKS5yb3V0ZXMpO1xuICAgICAgICBhcHAudXNlKFwiL2FwaS92MS9hY2NvdW50XCIsIG5ldyBBY2NvdW50Um91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvcGhvdG9zXCIsIG5ldyBQaG90b1JvdXRlcygpLnJvdXRlcyk7XG4gICAgICAgIGFwcC51c2UoXCIvYXBpL3YxL3JvbGVzXCIsIG5ldyBSb2xlUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvc2V0dXBcIiwgbmV3IFNldHVwUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvdXNlcnNcIiwgbmV3IFVzZXJSb3V0ZXMoKS5yb3V0ZXMpO1xuXG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgfVxufVxuXG5leHBvcnQgPSBCYXNlUm91dGVzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
