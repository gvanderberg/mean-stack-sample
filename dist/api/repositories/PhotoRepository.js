"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhotoSchema = require("./../dataAccess/schemas/PhotoSchema");
var BaseRepository = require("./interfaces/base/BaseRepository");
var PhotoRepository = (function (_super) {
    __extends(PhotoRepository, _super);
    function PhotoRepository() {
        _super.call(this, PhotoSchema);
    }
    return PhotoRepository;
}(BaseRepository));
Object.seal(PhotoRepository);
module.exports = PhotoRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXBvc2l0b3JpZXMvUGhvdG9SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sV0FBVyxXQUFXLHFDQUFxQyxDQUFDLENBQUM7QUFDcEUsSUFBTyxjQUFjLFdBQVcsa0NBQWtDLENBQUMsQ0FBQztBQUVwRTtJQUE4QixtQ0FBMkI7SUFDckQ7UUFDSSxrQkFBTSxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKNkIsY0FBYyxHQUkzQztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFN0IsaUJBQVMsZUFBZSxDQUFDIiwiZmlsZSI6ImFwaS9yZXBvc2l0b3JpZXMvUGhvdG9SZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElQaG90b01vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvUGhvdG9Nb2RlbFwiKTtcbmltcG9ydCBQaG90b1NjaGVtYSA9IHJlcXVpcmUoXCIuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9QaG90b1NjaGVtYVwiKTtcbmltcG9ydCBCYXNlUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvYmFzZS9CYXNlUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgUGhvdG9SZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8SVBob3RvTW9kZWw+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihQaG90b1NjaGVtYSk7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChQaG90b1JlcG9zaXRvcnkpO1xuXG5leHBvcnQgPSBQaG90b1JlcG9zaXRvcnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
