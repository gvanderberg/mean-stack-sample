"use strict";
var express = require("express");
var hash = require("password-hash");
var jwt = require("jsonwebtoken");
var UserRepository = require("./../repositories/UserRepository");
var router = express.Router();
var AuthenticateRoutes = (function () {
    function AuthenticateRoutes() {
        this._userRepository = new UserRepository();
    }
    Object.defineProperty(AuthenticateRoutes.prototype, "routes", {
        get: function () {
            var repository = this._userRepository;
            router.post("/", function (req, res) {
                repository.findOne({ "username": req.body.username }, function (error, result) {
                    if (error) {
                        res.send(error);
                    }
                    else {
                        if (!result) {
                            res.json({ "success": false, "message": "Authentication failed. User not found." });
                        }
                        else if (result) {
                            if (!hash.verify(req.body.password, result.hashedPassword)) {
                                res.json({ "success": false, "message": "Authentication failed. Wrong password." });
                            }
                            else {
                                var token = jwt.sign(result, "mean", {});
                                res.json({ "success": true, "token": token });
                            }
                        }
                    }
                });
            });
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return AuthenticateRoutes;
}());
Object.seal(AuthenticateRoutes);
module.exports = AuthenticateRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvQXV0aGVudGljYXRlUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFPLElBQUksV0FBVyxlQUFlLENBQUMsQ0FBQztBQUN2QyxJQUFPLEdBQUcsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUNyQyxJQUFPLGNBQWMsV0FBVyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXBFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5QjtJQUdJO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBSSxzQ0FBTTthQUFWO1lBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUN0QixVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtvQkFDaEUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDVixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsd0NBQXdDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4RixDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHdDQUF3QyxFQUFFLENBQUMsQ0FBQzs0QkFDeEYsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDSixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0NBRXpDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOzRCQUNsRCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLHlCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVoQyxpQkFBUyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJhcGkvcm91dGVzL0F1dGhlbnRpY2F0ZVJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgaGFzaCA9IHJlcXVpcmUoXCJwYXNzd29yZC1oYXNoXCIpO1xuaW1wb3J0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7XG5pbXBvcnQgVXNlclJlcG9zaXRvcnkgPSByZXF1aXJlKFwiLi8uLi9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnlcIik7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jbGFzcyBBdXRoZW50aWNhdGVSb3V0ZXMge1xuICAgIHByaXZhdGUgX3VzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl91c2VyUmVwb3NpdG9yeSA9IG5ldyBVc2VyUmVwb3NpdG9yeSgpO1xuICAgIH1cblxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5fdXNlclJlcG9zaXRvcnk7XG5cbiAgICAgICAgcm91dGVyLnBvc3QoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgcmVwb3NpdG9yeS5maW5kT25lKHsgXCJ1c2VybmFtZVwiOiByZXEuYm9keS51c2VybmFtZSB9LCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBcIm1lc3NhZ2VcIjogXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFVzZXIgbm90IGZvdW5kLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNoLnZlcmlmeShyZXEuYm9keS5wYXNzd29yZCwgcmVzdWx0Lmhhc2hlZFBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBcIm1lc3NhZ2VcIjogXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFdyb25nIHBhc3N3b3JkLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3Quc2lnbihyZXN1bHQsIFwibWVhblwiLCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7IFwic3VjY2Vzc1wiOiB0cnVlLCBcInRva2VuXCI6IHRva2VuIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByb3V0ZXI7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChBdXRoZW50aWNhdGVSb3V0ZXMpO1xuXG5leHBvcnQgPSBBdXRoZW50aWNhdGVSb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
