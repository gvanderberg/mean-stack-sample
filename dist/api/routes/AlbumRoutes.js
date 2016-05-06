"use strict";
var express = require("express");
var AlbumController = require("./../controllers/AlbumController");
var router = express.Router();
var AlbumRoutes = (function () {
    function AlbumRoutes() {
        this._albumController = new AlbumController();
    }
    Object.defineProperty(AlbumRoutes.prototype, "routes", {
        get: function () {
            var controller = this._albumController;
            router.get("/", controller.retrieve);
            router.post("/", controller.create);
            router.get("/:_id", controller.findById);
            router.put("/:_id", controller.update);
            router.delete("/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return AlbumRoutes;
}());
Object.seal(AlbumRoutes);
module.exports = AlbumRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvQWxidW1Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sZUFBZSxXQUFXLGtDQUFrQyxDQUFDLENBQUM7QUFFckUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCO0lBR0k7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0JBQUksK0JBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUV2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDTCxrQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpCLGlCQUFTLFdBQVcsQ0FBQyIsImZpbGUiOiJhcGkvcm91dGVzL0FsYnVtUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBBbGJ1bUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi9jb250cm9sbGVycy9BbGJ1bUNvbnRyb2xsZXJcIik7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jbGFzcyBBbGJ1bVJvdXRlcyB7XG4gICAgcHJpdmF0ZSBfYWxidW1Db250cm9sbGVyOiBBbGJ1bUNvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYWxidW1Db250cm9sbGVyID0gbmV3IEFsYnVtQ29udHJvbGxlcigpO1xuICAgIH1cblxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5fYWxidW1Db250cm9sbGVyO1xuXG4gICAgICAgIHJvdXRlci5nZXQoXCIvXCIsIGNvbnRyb2xsZXIucmV0cmlldmUpO1xuICAgICAgICByb3V0ZXIucG9zdChcIi9cIiwgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIuZ2V0KFwiLzpfaWRcIiwgY29udHJvbGxlci5maW5kQnlJZCk7XG4gICAgICAgIHJvdXRlci5wdXQoXCIvOl9pZFwiLCBjb250cm9sbGVyLnVwZGF0ZSk7XG4gICAgICAgIHJvdXRlci5kZWxldGUoXCIvOl9pZFwiLCBjb250cm9sbGVyLmRlbGV0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKEFsYnVtUm91dGVzKTtcblxuZXhwb3J0ID0gQWxidW1Sb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
