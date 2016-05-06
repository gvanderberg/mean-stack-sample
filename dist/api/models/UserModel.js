"use strict";
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "username", {
        get: function () {
            return this._userModel.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "hashedPassword", {
        get: function () {
            return this._userModel.hashedPassword;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "salt", {
        get: function () {
            return this._userModel.salt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "isLocked", {
        get: function () {
            return this._userModel.isLocked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "dateCreated", {
        get: function () {
            return this._userModel.dateCreated;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
module.exports = UserModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tb2RlbHMvVXNlck1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUdJLG1CQUFZLFNBQXFCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBRUQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6ImFwaS9tb2RlbHMvVXNlck1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcblxuY2xhc3MgVXNlck1vZGVsIHtcbiAgICBwcml2YXRlIF91c2VyTW9kZWw6IElVc2VyTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcih1c2VyTW9kZWw6IElVc2VyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5fdXNlck1vZGVsID0gdXNlck1vZGVsO1xuICAgIH1cblxuICAgIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLnVzZXJuYW1lO1xuICAgIH1cblxuICAgIGdldCBlbWFpbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLmVtYWlsO1xuICAgIH1cblxuICAgIGdldCBoYXNoZWRQYXNzd29yZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLmhhc2hlZFBhc3N3b3JkO1xuICAgIH1cblxuICAgIGdldCBzYWx0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwuc2FsdDtcbiAgICB9XG5cbiAgICBnZXQgaXNMb2NrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwuaXNMb2NrZWQ7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGVDcmVhdGVkKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLmRhdGVDcmVhdGVkO1xuICAgIH1cbn1cblxuZXhwb3J0ID0gVXNlck1vZGVsOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
