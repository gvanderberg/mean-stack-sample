import IAlbumModel = require("./../models/interfaces/AlbumModel");
import AlbumSchema = require("./../dataAccess/schemas/AlbumSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class AlbumRepository extends BaseRepository<IAlbumModel>{
    constructor() {
        super(AlbumSchema);
    }

    fetch(page: number, pageSize: number, callback: (error: any, result: any) => void) {
        this._model.find({}).limit(pageSize).skip(page * pageSize).exec((error, result) => {
            this._model.count({}).exec((err, count) => {
                if (err) {
                    callback(err, {
                        "count": result.length,
                        "items": result,
                        "page": page,
                        "totalCount": count,
                        "totalPages": count / pageSize
                    });
                } else {
                    callback(err, {
                        "count": result.length,
                        "items": result,
                        "page": page,
                        "totalCount": count,
                        "totalPages": count / pageSize
                    });
                }
            });
        })
    }
}

Object.seal(AlbumRepository);

export = AlbumRepository;