"use strict";
var UserRepository = require("./../repositories/UserRepository");
var UserBusiness = (function () {
    function UserBusiness() {
        this._userRepository = new UserRepository();
    }
    UserBusiness.prototype.create = function (item, callback) {
        this._userRepository.create(item, callback);
    };
    UserBusiness.prototype.delete = function (_id, callback) {
        this._userRepository.delete(_id, callback);
    };
    UserBusiness.prototype.findById = function (_id, callback) {
        this._userRepository.findById(_id, callback);
    };
    UserBusiness.prototype.retrieve = function (callback) {
        this._userRepository.retrieve(callback);
    };
    UserBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._userRepository.findById(_id, function (err, res) {
            if (err) {
                callback(err, res);
            }
            else {
                _this._userRepository.update(res._id, item, callback);
            }
        });
    };
    return UserBusiness;
}());
Object.seal(UserBusiness);
module.exports = UserBusiness;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9idXNpbmVzcy9Vc2VyQnVzaW5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU8sY0FBYyxXQUFXLGtDQUFrQyxDQUFDLENBQUM7QUFFcEU7SUFHSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLElBQWdCLEVBQUUsUUFBMkM7UUFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLFFBQTJDO1FBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEdBQVcsRUFBRSxRQUFrRDtRQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxRQUEyQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxJQUFnQixFQUFFLFFBQTJDO1FBQWpGLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUxQixpQkFBUyxZQUFZLENBQUMiLCJmaWxlIjoiYXBpL2J1c2luZXNzL1VzZXJCdXNpbmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVXNlckJ1c2luZXNzID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9Vc2VyQnVzaW5lc3NcIik7XG5pbXBvcnQgSVVzZXJNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVscy9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBVc2VyUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuLy4uL3JlcG9zaXRvcmllcy9Vc2VyUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgVXNlckJ1c2luZXNzIGltcGxlbWVudHMgSVVzZXJCdXNpbmVzcyB7XG4gICAgcHJpdmF0ZSBfdXNlclJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5ID0gbmV3IFVzZXJSZXBvc2l0b3J5KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKGl0ZW06IElVc2VyTW9kZWwsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkuY3JlYXRlKGl0ZW0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBkZWxldGUoX2lkOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkuZGVsZXRlKF9pZCwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZpbmRCeUlkKF9pZDogc3RyaW5nLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogSVVzZXJNb2RlbCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl91c2VyUmVwb3NpdG9yeS5maW5kQnlJZChfaWQsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZShjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5LnJldHJpZXZlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoX2lkOiBzdHJpbmcsIGl0ZW06IElVc2VyTW9kZWwsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoX2lkLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyUmVwb3NpdG9yeS51cGRhdGUocmVzLl9pZCwgaXRlbSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKFVzZXJCdXNpbmVzcyk7XG5cbmV4cG9ydCA9IFVzZXJCdXNpbmVzczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
