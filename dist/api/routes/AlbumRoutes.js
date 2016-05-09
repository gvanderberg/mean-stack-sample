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
    return AlbumRoutes;
}());
Object.seal(AlbumRoutes);
module.exports = AlbumRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvQWxidW1Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sZUFBZSxXQUFXLGtDQUFrQyxDQUFDLENBQUM7QUFFckUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTlCO0lBR0k7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0JBQUksK0JBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUV2QyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGtCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekIsaUJBQVMsV0FBVyxDQUFDIiwiZmlsZSI6ImFwaS9yb3V0ZXMvQWxidW1Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuaW1wb3J0IEFsYnVtQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuLy4uL2NvbnRyb2xsZXJzL0FsYnVtQ29udHJvbGxlclwiKTtcblxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNsYXNzIEFsYnVtUm91dGVzIHtcbiAgICBwcml2YXRlIF9hbGJ1bUNvbnRyb2xsZXI6IEFsYnVtQ29udHJvbGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9hbGJ1bUNvbnRyb2xsZXIgPSBuZXcgQWxidW1Db250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSB0aGlzLl9hbGJ1bUNvbnRyb2xsZXI7XG5cbiAgICAgICAgcm91dGVyLmdldChcIi86cGFnZS86cGFnZVNpemVcIiwgY29udHJvbGxlci5yZXRyaWV2ZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KFwiL1wiLCBjb250cm9sbGVyLmNyZWF0ZSk7XG4gICAgICAgIHJvdXRlci5nZXQoXCIvOl9pZFwiLCBjb250cm9sbGVyLmZpbmRCeUlkKTtcbiAgICAgICAgcm91dGVyLnB1dChcIi86X2lkXCIsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICAgICAgcm91dGVyLmRlbGV0ZShcIi86X2lkXCIsIGNvbnRyb2xsZXIuZGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gcm91dGVyO1xuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoQWxidW1Sb3V0ZXMpO1xuXG5leHBvcnQgPSBBbGJ1bVJvdXRlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
