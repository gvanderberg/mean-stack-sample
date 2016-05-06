"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AlbumSchema = require("./../dataAccess/schemas/AlbumSchema");
var BaseRepository = require("./interfaces/base/BaseRepository");
var AlbumRepository = (function (_super) {
    __extends(AlbumRepository, _super);
    function AlbumRepository() {
        _super.call(this, AlbumSchema);
    }
    return AlbumRepository;
}(BaseRepository));
Object.seal(AlbumRepository);
module.exports = AlbumRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXBvc2l0b3JpZXMvQWxidW1SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sV0FBVyxXQUFXLHFDQUFxQyxDQUFDLENBQUM7QUFDcEUsSUFBTyxjQUFjLFdBQVcsa0NBQWtDLENBQUMsQ0FBQztBQUVwRTtJQUE4QixtQ0FBMkI7SUFDckQ7UUFDSSxrQkFBTSxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKNkIsY0FBYyxHQUkzQztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFN0IsaUJBQVMsZUFBZSxDQUFDIiwiZmlsZSI6ImFwaS9yZXBvc2l0b3JpZXMvQWxidW1SZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBbGJ1bU1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvQWxidW1Nb2RlbFwiKTtcbmltcG9ydCBBbGJ1bVNjaGVtYSA9IHJlcXVpcmUoXCIuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9BbGJ1bVNjaGVtYVwiKTtcbmltcG9ydCBCYXNlUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvYmFzZS9CYXNlUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgQWxidW1SZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8SUFsYnVtTW9kZWw+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBbGJ1bVNjaGVtYSk7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChBbGJ1bVJlcG9zaXRvcnkpO1xuXG5leHBvcnQgPSBBbGJ1bVJlcG9zaXRvcnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
