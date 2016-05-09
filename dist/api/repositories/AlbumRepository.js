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
    AlbumRepository.prototype.fetch = function (page, pageSize, callback) {
        var _this = this;
        this._model.find({}).limit(pageSize).skip(page * pageSize).exec(function (error, result) {
            _this._model.count({}).exec(function (err, count) {
                if (err) {
                    callback(err, {
                        "count": result.length,
                        "items": result,
                        "page": page,
                        "totalCount": count,
                        "totalPages": count / pageSize
                    });
                }
                else {
                    callback(err, {
                        "count": result.length,
                        "items": result,
                        "page": page,
                        "totalCount": count,
                        "totalPages": count / pageSize
                    });
                }
            });
        });
    };
    return AlbumRepository;
}(BaseRepository));
Object.seal(AlbumRepository);
module.exports = AlbumRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXBvc2l0b3JpZXMvQWxidW1SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sV0FBVyxXQUFXLHFDQUFxQyxDQUFDLENBQUM7QUFDcEUsSUFBTyxjQUFjLFdBQVcsa0NBQWtDLENBQUMsQ0FBQztBQUVwRTtJQUE4QixtQ0FBMkI7SUFDckQ7UUFDSSxrQkFBTSxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLElBQVksRUFBRSxRQUFnQixFQUFFLFFBQTJDO1FBQWpGLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtZQUMxRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDTixRQUFRLENBQUMsR0FBRyxFQUFFO3dCQUNWLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTt3QkFDdEIsT0FBTyxFQUFFLE1BQU07d0JBQ2YsTUFBTSxFQUFFLElBQUk7d0JBQ1osWUFBWSxFQUFFLEtBQUs7d0JBQ25CLFlBQVksRUFBRSxLQUFLLEdBQUcsUUFBUTtxQkFDakMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osUUFBUSxDQUFDLEdBQUcsRUFBRTt3QkFDVixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07d0JBQ3RCLE9BQU8sRUFBRSxNQUFNO3dCQUNmLE1BQU0sRUFBRSxJQUFJO3dCQUNaLFlBQVksRUFBRSxLQUFLO3dCQUNuQixZQUFZLEVBQUUsS0FBSyxHQUFHLFFBQVE7cUJBQ2pDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBNUJBLEFBNEJDLENBNUI2QixjQUFjLEdBNEIzQztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFN0IsaUJBQVMsZUFBZSxDQUFDIiwiZmlsZSI6ImFwaS9yZXBvc2l0b3JpZXMvQWxidW1SZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBbGJ1bU1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvQWxidW1Nb2RlbFwiKTtcbmltcG9ydCBBbGJ1bVNjaGVtYSA9IHJlcXVpcmUoXCIuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9BbGJ1bVNjaGVtYVwiKTtcbmltcG9ydCBCYXNlUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvYmFzZS9CYXNlUmVwb3NpdG9yeVwiKTtcblxuY2xhc3MgQWxidW1SZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8SUFsYnVtTW9kZWw+e1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBbGJ1bVNjaGVtYSk7XG4gICAgfVxuXG4gICAgZmV0Y2gocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX21vZGVsLmZpbmQoe30pLmxpbWl0KHBhZ2VTaXplKS5za2lwKHBhZ2UgKiBwYWdlU2l6ZSkuZXhlYygoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwuY291bnQoe30pLmV4ZWMoKGVyciwgY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiByZXN1bHQubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZ2VcIjogcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG90YWxDb3VudFwiOiBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG90YWxQYWdlc1wiOiBjb3VudCAvIHBhZ2VTaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudFwiOiByZXN1bHQubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZ2VcIjogcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG90YWxDb3VudFwiOiBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG90YWxQYWdlc1wiOiBjb3VudCAvIHBhZ2VTaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoQWxidW1SZXBvc2l0b3J5KTtcblxuZXhwb3J0ID0gQWxidW1SZXBvc2l0b3J5OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
