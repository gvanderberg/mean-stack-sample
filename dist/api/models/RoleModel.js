"use strict";
var RoleModel = (function () {
    function RoleModel(roleModel) {
        this._roleModel = roleModel;
    }
    Object.defineProperty(RoleModel.prototype, "name", {
        get: function () {
            return this._roleModel.name;
        },
        enumerable: true,
        configurable: true
    });
    return RoleModel;
}());
module.exports = RoleModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tb2RlbHMvUm9sZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUdJLG1CQUFZLFNBQXFCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBSSwyQkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQUVELGlCQUFTLFNBQVMsQ0FBQyIsImZpbGUiOiJhcGkvbW9kZWxzL1JvbGVNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJUm9sZU1vZGVsID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9Sb2xlTW9kZWxcIik7XG5cbmNsYXNzIFJvbGVNb2RlbCB7XG4gICAgcHJpdmF0ZSBfcm9sZU1vZGVsOiBJUm9sZU1vZGVsO1xuXG4gICAgY29uc3RydWN0b3Iocm9sZU1vZGVsOiBJUm9sZU1vZGVsKSB7XG4gICAgICAgIHRoaXMuX3JvbGVNb2RlbCA9IHJvbGVNb2RlbDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sZU1vZGVsLm5hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgPSBSb2xlTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
