"use strict";
var express = require("express");
var hash = require("password-hash");
var UserRepository = require("./../repositories/UserRepository");
var UserSchema = require("./../dataAccess/schemas/UserSchema");
var router = express.Router();
var SetupRoutes = (function () {
    function SetupRoutes() {
        this._userRepository = new UserRepository();
    }
    Object.defineProperty(SetupRoutes.prototype, "routes", {
        get: function () {
            var repository = this._userRepository;
            router.get("/", function (req, res) {
                var user = new UserSchema();
                user.email = "john.doe@blah.com";
                user.username = "jdoe";
                user.hashedPassword = hash.generate("password");
                user.isLocked = false;
                user.dateCreated = new Date();
                repository.create(user, function (error, result) {
                    if (error) {
                        res.send(error);
                    }
                    else {
                        res.json({ "success": true });
                    }
                });
            });
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return SetupRoutes;
}());
Object.seal(SetupRoutes);
module.exports = SetupRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvU2V0dXBSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sSUFBSSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLElBQU8sY0FBYyxXQUFXLGtDQUFrQyxDQUFDLENBQUM7QUFDcEUsSUFBTyxVQUFVLFdBQVcsb0NBQW9DLENBQUMsQ0FBQztBQUVsRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0JBQUksK0JBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFFNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFFOUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtvQkFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGtCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekIsaUJBQVMsV0FBVyxDQUFDIiwiZmlsZSI6ImFwaS9yb3V0ZXMvU2V0dXBSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuaW1wb3J0IGhhc2ggPSByZXF1aXJlKFwicGFzc3dvcmQtaGFzaFwiKTtcbmltcG9ydCBVc2VyUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuLy4uL3JlcG9zaXRvcmllcy9Vc2VyUmVwb3NpdG9yeVwiKTtcbmltcG9ydCBVc2VyU2NoZW1hID0gcmVxdWlyZShcIi4vLi4vZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWFcIik7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jbGFzcyBTZXR1cFJvdXRlcyB7XG4gICAgcHJpdmF0ZSBfdXNlclJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5ID0gbmV3IFVzZXJSZXBvc2l0b3J5KCk7XG4gICAgfVxuXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgbGV0IHJlcG9zaXRvcnkgPSB0aGlzLl91c2VyUmVwb3NpdG9yeTtcblxuICAgICAgICByb3V0ZXIuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXJTY2hlbWEoKTtcblxuICAgICAgICAgICAgdXNlci5lbWFpbCA9IFwiam9obi5kb2VAYmxhaC5jb21cIjtcbiAgICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSBcImpkb2VcIjtcbiAgICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmQgPSBoYXNoLmdlbmVyYXRlKFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgICB1c2VyLmlzTG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB1c2VyLmRhdGVDcmVhdGVkID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgcmVwb3NpdG9yeS5jcmVhdGUodXNlciwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNlbmQoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgXCJzdWNjZXNzXCI6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKFNldHVwUm91dGVzKTtcblxuZXhwb3J0ID0gU2V0dXBSb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
