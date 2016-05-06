import IAlbumModel = require("./../models/interfaces/AlbumModel");
import AlbumSchema = require("./../dataAccess/schemas/AlbumSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class AlbumRepository extends BaseRepository<IAlbumModel>{
    constructor() {
        super(AlbumSchema);
    }
}

Object.seal(AlbumRepository);

export = AlbumRepository;