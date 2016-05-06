"use strict";
var PhotoModel = (function () {
    function PhotoModel(photoModel) {
        this._photoModel = photoModel;
    }
    Object.defineProperty(PhotoModel.prototype, "title", {
        get: function () {
            return this._photoModel.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoModel.prototype, "uri", {
        get: function () {
            return this._photoModel.uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoModel.prototype, "dateUploaded", {
        get: function () {
            return this._photoModel.dateUploaded;
        },
        enumerable: true,
        configurable: true
    });
    return PhotoModel;
}());
module.exports = PhotoModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tb2RlbHMvUGhvdG9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFHSSxvQkFBWSxVQUF1QjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksNkJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQUVELGlCQUFTLFVBQVUsQ0FBQyIsImZpbGUiOiJhcGkvbW9kZWxzL1Bob3RvTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVBob3RvTW9kZWwgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1Bob3RvTW9kZWxcIik7XG5cbmNsYXNzIFBob3RvTW9kZWwge1xuICAgIHByaXZhdGUgX3Bob3RvTW9kZWw6IElQaG90b01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocGhvdG9Nb2RlbDogSVBob3RvTW9kZWwpIHtcbiAgICAgICAgdGhpcy5fcGhvdG9Nb2RlbCA9IHBob3RvTW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waG90b01vZGVsLnRpdGxlO1xuICAgIH1cblxuICAgIGdldCB1cmkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob3RvTW9kZWwudXJpO1xuICAgIH1cblxuICAgIGdldCBkYXRlVXBsb2FkZWQoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waG90b01vZGVsLmRhdGVVcGxvYWRlZDtcbiAgICB9XG59XG5cbmV4cG9ydCA9IFBob3RvTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
