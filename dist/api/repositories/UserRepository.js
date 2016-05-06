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
    return UserRepository;
}(BaseRepository));
Object.seal(UserRepository);
module.exports = UserRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTyxVQUFVLFdBQVcsb0NBQW9DLENBQUMsQ0FBQztBQUNsRSxJQUFPLGNBQWMsV0FBVyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXBFO0lBQTZCLGtDQUEwQjtJQUNuRDtRQUNJLGtCQUFNLFVBQVUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxxQkFBQztBQUFELENBSkEsQUFJQyxDQUo0QixjQUFjLEdBSTFDO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixpQkFBUyxjQUFjLENBQUMiLCJmaWxlIjoiYXBpL3JlcG9zaXRvcmllcy9Vc2VyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJVXNlck1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvVXNlck1vZGVsXCIpO1xuaW1wb3J0IFVzZXJTY2hlbWEgPSByZXF1aXJlKFwiLi8uLi9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlclNjaGVtYVwiKTtcbmltcG9ydCBCYXNlUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvYmFzZS9CYXNlUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxJVXNlck1vZGVsPntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoVXNlclNjaGVtYSk7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChVc2VyUmVwb3NpdG9yeSk7XG5cbmV4cG9ydCA9IFVzZXJSZXBvc2l0b3J5OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
