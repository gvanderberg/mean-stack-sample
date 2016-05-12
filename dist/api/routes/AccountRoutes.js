"use strict";
var express = require("express");
var hash = require("password-hash");
var jwt = require("jsonwebtoken");
var UserRepository = require("./../repositories/UserRepository");
var router = express.Router();
var AccountRoutes = (function () {
    function AccountRoutes() {
        this._userRepository = new UserRepository();
    }
    Object.defineProperty(AccountRoutes.prototype, "routes", {
        get: function () {
            var repository = this._userRepository;
            router.post("/login", function (req, res) {
                var user = req.body;
                repository.findOne({ "username": user.username }, function (error, result) {
                    if (error) {
                        res.send(error);
                    }
                    else {
                        if (!result) {
                            res.json({ "success": false, "message": "Authentication failed. User not found." });
                        }
                        else if (result) {
                            if (!hash.verify(user.password, result.hashedPassword)) {
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
    return AccountRoutes;
}());
Object.seal(AccountRoutes);
module.exports = AccountRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yb3V0ZXMvQWNjb3VudFJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxJQUFJLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFDdkMsSUFBTyxHQUFHLFdBQVcsY0FBYyxDQUFDLENBQUM7QUFDckMsSUFBTyxjQUFjLFdBQVcsa0NBQWtDLENBQUMsQ0FBQztBQUVwRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0JBQUksaUNBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDM0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFFcEIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtvQkFDNUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDVixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsd0NBQXdDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4RixDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsd0NBQXdDLEVBQUUsQ0FBQyxDQUFDOzRCQUN4RixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FFekMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7NEJBQ2xELENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsb0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUUzQixpQkFBUyxhQUFhLENBQUMiLCJmaWxlIjoiYXBpL3JvdXRlcy9BY2NvdW50Um91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBoYXNoID0gcmVxdWlyZShcInBhc3N3b3JkLWhhc2hcIik7XG5pbXBvcnQgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcbmltcG9ydCBVc2VyUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuLy4uL3JlcG9zaXRvcmllcy9Vc2VyUmVwb3NpdG9yeVwiKTtcblxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNsYXNzIEFjY291bnRSb3V0ZXMge1xuICAgIHByaXZhdGUgX3VzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl91c2VyUmVwb3NpdG9yeSA9IG5ldyBVc2VyUmVwb3NpdG9yeSgpO1xuICAgIH1cblxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5fdXNlclJlcG9zaXRvcnk7XG5cbiAgICAgICAgcm91dGVyLnBvc3QoXCIvbG9naW5cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHJlcS5ib2R5O1xuXG4gICAgICAgICAgICByZXBvc2l0b3J5LmZpbmRPbmUoeyBcInVzZXJuYW1lXCI6IHVzZXIudXNlcm5hbWUgfSwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNlbmQoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgXCJtZXNzYWdlXCI6IFwiQXV0aGVudGljYXRpb24gZmFpbGVkLiBVc2VyIG5vdCBmb3VuZC5cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzaC52ZXJpZnkodXNlci5wYXNzd29yZCwgcmVzdWx0Lmhhc2hlZFBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBcIm1lc3NhZ2VcIjogXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQuIFdyb25nIHBhc3N3b3JkLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3Quc2lnbihyZXN1bHQsIFwibWVhblwiLCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7IFwic3VjY2Vzc1wiOiB0cnVlLCBcInRva2VuXCI6IHRva2VuIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByb3V0ZXI7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChBY2NvdW50Um91dGVzKTtcblxuZXhwb3J0ID0gQWNjb3VudFJvdXRlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
