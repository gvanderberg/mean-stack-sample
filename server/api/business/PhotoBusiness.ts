import IPhotoBusiness = require("./interfaces/PhotoBusiness");
import IPhotoModel = require("./../models/interfaces/PhotoModel");
import PhotoRepository = require("./../repositories/PhotoRepository");

class PhotoBusiness implements IPhotoBusiness {
    private _photoRepository: PhotoRepository;

    constructor() {
        this._photoRepository = new PhotoRepository();
    }

    create(item: IPhotoModel, callback: (error: any, result: any) => void) {
        this._photoRepository.create(item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._photoRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IPhotoModel) => void) {
        this._photoRepository.findById(_id, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._photoRepository.retrieve(callback);
    }

    update(_id: string, item: IPhotoModel, callback: (error: any, result: any) => void) {
        this._photoRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._photoRepository.update(res._id, item, callback);
            }
        });
    }
}

Object.seal(PhotoBusiness);

export = PhotoBusiness;