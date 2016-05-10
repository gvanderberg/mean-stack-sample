"use strict";
var PaginationSet = (function () {
    function PaginationSet() {
        this._page = 0;
        this._totalCount = 0;
        this._totalPages = 0;
        this._items = new Array();
    }
    Object.defineProperty(PaginationSet.prototype, "count", {
        get: function () {
            return this._items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationSet.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationSet.prototype, "totalCount", {
        get: function () {
            return this._totalCount;
        },
        set: function (value) {
            this._totalCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationSet.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (value) {
            this._totalPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationSet.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    return PaginationSet;
}());
module.exports = PaginationSet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9pbmZyYXN0cnVjdHVyZS9jb3JlL1BhZ2luYXRpb25TZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBVUQsc0JBQUksZ0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFlLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWUsS0FBYTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFpQjtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQUtMLG9CQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQUVELGlCQUFTLGFBQWEsQ0FBQyIsImZpbGUiOiJhcGkvaW5mcmFzdHJ1Y3R1cmUvY29yZS9QYWdpbmF0aW9uU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFnaW5hdGlvblNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSAwO1xuICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fdG90YWxQYWdlcyA9IDA7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gbmV3IEFycmF5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdG90YWxDb3VudDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdG90YWxQYWdlczogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfaXRlbXM6IEFycmF5PGFueT47XG5cbiAgICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgICB9XG5cbiAgICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxDb3VudDtcbiAgICB9XG5cbiAgICBzZXQgdG90YWxDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcbiAgICB9XG5cbiAgICBzZXQgdG90YWxQYWdlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsUGFnZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBzZXQgaXRlbXModmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCA9IFBhZ2luYXRpb25TZXQ7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
