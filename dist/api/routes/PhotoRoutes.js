"use strict";
var express = require("express");
var PhotoController = require("./../controllers/PhotoController");
var router = express.Router();
var PhotoRoutes = (function () {
    function PhotoRoutes() {
        this._photoController = new PhotoController();
    }
    Object.defineProperty(PhotoRoutes.prototype, "routes", {
        get: function () {
            var controller = this._photoController;
            router.get("/", controller.retrieve);
            router.get("/:page/:pageSize", controller.retrieve);
            router.post("/", controller.create);
            router.get("/:_id", controller.findById);
            router.put("/:_id", controller.update);
            router.delete("/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return PhotoRoutes;
}());
Object.seal(PhotoRoutes);
module.exports = PhotoRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvUGhvdG9Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sZUFBZSxXQUFXLGtDQUFrQyxDQUFDLENBQUM7QUFFckUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCO0lBR0k7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0JBQUksK0JBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUV2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDTCxrQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpCLGlCQUFTLFdBQVcsQ0FBQyIsImZpbGUiOiJhcGkvcm91dGVzL1Bob3RvUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBQaG90b0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi9jb250cm9sbGVycy9QaG90b0NvbnRyb2xsZXJcIik7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jbGFzcyBQaG90b1JvdXRlcyB7XG4gICAgcHJpdmF0ZSBfcGhvdG9Db250cm9sbGVyOiBQaG90b0NvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcGhvdG9Db250cm9sbGVyID0gbmV3IFBob3RvQ29udHJvbGxlcigpO1xuICAgIH1cblxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5fcGhvdG9Db250cm9sbGVyO1xuXG4gICAgICAgIHJvdXRlci5nZXQoXCIvXCIsIGNvbnRyb2xsZXIucmV0cmlldmUpO1xuICAgICAgICByb3V0ZXIuZ2V0KFwiLzpwYWdlLzpwYWdlU2l6ZVwiLCBjb250cm9sbGVyLnJldHJpZXZlKTtcbiAgICAgICAgcm91dGVyLnBvc3QoXCIvXCIsIGNvbnRyb2xsZXIuY3JlYXRlKTtcbiAgICAgICAgcm91dGVyLmdldChcIi86X2lkXCIsIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXIucHV0KFwiLzpfaWRcIiwgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKFwiLzpfaWRcIiwgY29udHJvbGxlci5kZWxldGUpO1xuXG4gICAgICAgIHJldHVybiByb3V0ZXI7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChQaG90b1JvdXRlcyk7XG5cbmV4cG9ydCA9IFBob3RvUm91dGVzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
