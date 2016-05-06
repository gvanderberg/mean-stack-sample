"use strict";
var express = require("express");
var AlbumRoutes = require("./../AlbumRoutes");
var PhotoRoutes = require("./../PhotoRoutes");
var RoleRoutes = require("./../RoleRoutes");
var UserRoutes = require("./../UserRoutes");
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            // api routes
            app.use("/api/v1/albums", new AlbumRoutes().routes);
            app.use("/api/v1/photos", new PhotoRoutes().routes);
            app.use("/api/v1/roles", new RoleRoutes().routes);
            app.use("/api/v1/users", new UserRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
module.exports = BaseRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvYmFzZS9CYXNlUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVwQyxJQUFPLFdBQVcsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELElBQU8sV0FBVyxXQUFXLGtCQUFrQixDQUFDLENBQUM7QUFDakQsSUFBTyxVQUFVLFdBQVcsaUJBQWlCLENBQUMsQ0FBQztBQUMvQyxJQUFPLFVBQVUsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBRS9DLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCO0lBQUE7SUFVQSxDQUFDO0lBVEcsc0JBQUksOEJBQU07YUFBVjtZQUNJLGFBQWE7WUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBRUQsaUJBQVMsVUFBVSxDQUFDIiwiZmlsZSI6ImFwaS9yb3V0ZXMvYmFzZS9CYXNlUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5pbXBvcnQgQWxidW1Sb3V0ZXMgPSByZXF1aXJlKFwiLi8uLi9BbGJ1bVJvdXRlc1wiKTtcbmltcG9ydCBQaG90b1JvdXRlcyA9IHJlcXVpcmUoXCIuLy4uL1Bob3RvUm91dGVzXCIpO1xuaW1wb3J0IFJvbGVSb3V0ZXMgPSByZXF1aXJlKFwiLi8uLi9Sb2xlUm91dGVzXCIpO1xuaW1wb3J0IFVzZXJSb3V0ZXMgPSByZXF1aXJlKFwiLi8uLi9Vc2VyUm91dGVzXCIpO1xuXG5sZXQgYXBwID0gZXhwcmVzcygpO1xuXG5jbGFzcyBCYXNlUm91dGVzIHtcbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgICAvLyBhcGkgcm91dGVzXG4gICAgICAgIGFwcC51c2UoXCIvYXBpL3YxL2FsYnVtc1wiLCBuZXcgQWxidW1Sb3V0ZXMoKS5yb3V0ZXMpO1xuICAgICAgICBhcHAudXNlKFwiL2FwaS92MS9waG90b3NcIiwgbmV3IFBob3RvUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9hcGkvdjEvcm9sZXNcIiwgbmV3IFJvbGVSb3V0ZXMoKS5yb3V0ZXMpO1xuICAgICAgICBhcHAudXNlKFwiL2FwaS92MS91c2Vyc1wiLCBuZXcgVXNlclJvdXRlcygpLnJvdXRlcyk7XG5cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG59XG5cbmV4cG9ydCA9IEJhc2VSb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
