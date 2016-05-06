import IPhotoModel = require("./../models/interfaces/PhotoModel");
import PhotoSchema = require("./../dataAccess/schemas/PhotoSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class PhotoRepository extends BaseRepository<IPhotoModel>{
    constructor() {
        super(PhotoSchema);
    }
}

Object.seal(PhotoRepository);

export = PhotoRepository;