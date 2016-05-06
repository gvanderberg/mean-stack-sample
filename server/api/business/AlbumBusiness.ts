import IAlbumBusiness = require("./interfaces/AlbumBusiness");
import IAlbumModel = require("./../models/interfaces/AlbumModel");
import AlbumRepository = require("./../repositories/AlbumRepository");

class AlbumBusiness implements IAlbumBusiness {
    private _albumRepository: AlbumRepository;

    constructor() {
        this._albumRepository = new AlbumRepository();
    }

    create(item: IAlbumModel, callback: (error: any, result: any) => void) {
        this._albumRepository.create(item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._albumRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IAlbumModel) => void) {
        this._albumRepository.findById(_id, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._albumRepository.retrieve(callback);
    }

    update(_id: string, item: IAlbumModel, callback: (error: any, result: any) => void) {
        this._albumRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._albumRepository.update(res._id, item, callback);
            }
        });
    }
}

Object.seal(AlbumBusiness);

export = AlbumBusiness;