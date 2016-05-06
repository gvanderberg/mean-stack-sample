"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RoleSchema = require("./../dataAccess/schemas/RoleSchema");
var BaseRepository = require("./interfaces/base/BaseRepository");
var RoleRepository = (function (_super) {
    __extends(RoleRepository, _super);
    function RoleRepository() {
        _super.call(this, RoleSchema);
    }
    return RoleRepository;
}(BaseRepository));
Object.seal(RoleRepository);
module.exports = RoleRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXBvc2l0b3JpZXMvUm9sZVJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTyxVQUFVLFdBQVcsb0NBQW9DLENBQUMsQ0FBQztBQUNsRSxJQUFPLGNBQWMsV0FBVyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXBFO0lBQTZCLGtDQUEwQjtJQUNuRDtRQUNJLGtCQUFNLFVBQVUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxxQkFBQztBQUFELENBSkEsQUFJQyxDQUo0QixjQUFjLEdBSTFDO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixpQkFBUyxjQUFjLENBQUMiLCJmaWxlIjoiYXBpL3JlcG9zaXRvcmllcy9Sb2xlUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJUm9sZU1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvUm9sZU1vZGVsXCIpO1xuaW1wb3J0IFJvbGVTY2hlbWEgPSByZXF1aXJlKFwiLi8uLi9kYXRhQWNjZXNzL3NjaGVtYXMvUm9sZVNjaGVtYVwiKTtcbmltcG9ydCBCYXNlUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvYmFzZS9CYXNlUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgUm9sZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxJUm9sZU1vZGVsPntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoUm9sZVNjaGVtYSk7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChSb2xlUmVwb3NpdG9yeSk7XG5cbmV4cG9ydCA9IFJvbGVSZXBvc2l0b3J5OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
