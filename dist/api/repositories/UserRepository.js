"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserSchema = require("./../dataAccess/schemas/UserSchema");
var BaseRepository = require("./interfaces/base/BaseRepository");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        _super.call(this, UserSchema);
    }
    UserRepository.prototype.findOne = function (cond, callback) {
        this._model.findOne(cond, function (error, result) {
            if (error) {
                callback(error, result);
            }
            else {
                callback(error, result);
            }
        });
    };
    return UserRepository;
}(BaseRepository));
Object.seal(UserRepository);
module.exports = UserRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTyxVQUFVLFdBQVcsb0NBQW9DLENBQUMsQ0FBQztBQUNsRSxJQUFPLGNBQWMsV0FBVyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXBFO0lBQTZCLGtDQUEwQjtJQUNuRDtRQUNJLGtCQUFNLFVBQVUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLFFBQTJDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1lBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWRBLEFBY0MsQ0FkNEIsY0FBYyxHQWMxQztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6ImFwaS9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVVzZXJNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVscy9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBVc2VyU2NoZW1hID0gcmVxdWlyZShcIi4vLi4vZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWFcIik7XG5pbXBvcnQgQmFzZVJlcG9zaXRvcnkgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL2Jhc2UvQmFzZVJlcG9zaXRvcnlcIik7XG5cbmNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8SVVzZXJNb2RlbD57XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFVzZXJTY2hlbWEpO1xuICAgIH1cblxuICAgIGZpbmRPbmUoY29uZDogT2JqZWN0LCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX21vZGVsLmZpbmRPbmUoY29uZCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKFVzZXJSZXBvc2l0b3J5KTtcblxuZXhwb3J0ID0gVXNlclJlcG9zaXRvcnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
