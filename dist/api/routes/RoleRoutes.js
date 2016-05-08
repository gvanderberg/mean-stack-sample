"use strict";
var express = require("express");
var RoleController = require("./../controllers/RoleController");
var router = express.Router();
var RoleRoutes = (function () {
    function RoleRoutes() {
        this._roleController = new RoleController();
    }
    Object.defineProperty(RoleRoutes.prototype, "routes", {
        get: function () {
            var controller = this._roleController;
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
    return RoleRoutes;
}());
Object.seal(RoleRoutes);
module.exports = RoleRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvUm9sZVJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxjQUFjLFdBQVcsaUNBQWlDLENBQUMsQ0FBQztBQUVuRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0JBQUksOEJBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUxQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV4QixpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiYXBpL3JvdXRlcy9Sb2xlUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBSb2xlQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuLy4uL2NvbnRyb2xsZXJzL1JvbGVDb250cm9sbGVyXCIpO1xuXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY2xhc3MgUm9sZVJvdXRlcyB7XG4gICAgcHJpdmF0ZSBfcm9sZUNvbnRyb2xsZXI6IFJvbGVDb250cm9sbGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3JvbGVDb250cm9sbGVyID0gbmV3IFJvbGVDb250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSB0aGlzLl9yb2xlQ29udHJvbGxlcjtcblxuICAgICAgICByb3V0ZXIuZ2V0KFwiL1wiLCBjb250cm9sbGVyLnJldHJpZXZlKTtcbiAgICAgICAgcm91dGVyLmdldChcIi86cGFnZS86cGFnZVNpemVcIiwgY29udHJvbGxlci5yZXRyaWV2ZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KFwiL1wiLCBjb250cm9sbGVyLmNyZWF0ZSk7XG4gICAgICAgIHJvdXRlci5nZXQoXCIvOl9pZFwiLCBjb250cm9sbGVyLmZpbmRCeUlkKTtcbiAgICAgICAgcm91dGVyLnB1dChcIi86X2lkXCIsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICAgICAgcm91dGVyLmRlbGV0ZShcIi86X2lkXCIsIGNvbnRyb2xsZXIuZGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gcm91dGVyO1xuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoUm9sZVJvdXRlcyk7XG5cbmV4cG9ydCA9IFJvbGVSb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
