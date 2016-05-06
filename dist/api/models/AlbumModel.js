"use strict";
var AlbumModel = (function () {
    function AlbumModel(albumModel) {
        this._albumModel = albumModel;
    }
    Object.defineProperty(AlbumModel.prototype, "title", {
        get: function () {
            return this._albumModel.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumModel.prototype, "description", {
        get: function () {
            return this._albumModel.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumModel.prototype, "dateCreated", {
        get: function () {
            return this._albumModel.dateCreated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlbumModel.prototype, "photos", {
        get: function () {
            return this._albumModel.photos;
        },
        enumerable: true,
        configurable: true
    });
    return AlbumModel;
}());
module.exports = AlbumModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tb2RlbHMvQWxidW1Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFHSSxvQkFBWSxVQUF1QjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksNkJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQUVELGlCQUFTLFVBQVUsQ0FBQyIsImZpbGUiOiJhcGkvbW9kZWxzL0FsYnVtTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFsYnVtTW9kZWwgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0FsYnVtTW9kZWxcIik7XG5pbXBvcnQgSVBob3RvTW9kZWwgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1Bob3RvTW9kZWxcIik7XG5cbmNsYXNzIEFsYnVtTW9kZWwge1xuICAgIHByaXZhdGUgX2FsYnVtTW9kZWw6IElBbGJ1bU1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoYWxidW1Nb2RlbDogSUFsYnVtTW9kZWwpIHtcbiAgICAgICAgdGhpcy5fYWxidW1Nb2RlbCA9IGFsYnVtTW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGJ1bU1vZGVsLnRpdGxlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxidW1Nb2RlbC5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgZGF0ZUNyZWF0ZWQoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGJ1bU1vZGVsLmRhdGVDcmVhdGVkO1xuICAgIH1cblxuICAgIGdldCBwaG90b3MoKTogW0lQaG90b01vZGVsXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGJ1bU1vZGVsLnBob3RvcztcbiAgICB9XG59XG5cbmV4cG9ydCA9IEFsYnVtTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
