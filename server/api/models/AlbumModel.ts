import IAlbumModel = require("./interfaces/AlbumModel");
import IPhotoModel = require("./interfaces/PhotoModel");

class AlbumModel {
    private _albumModel: IAlbumModel;

    constructor(albumModel: IAlbumModel) {
        this._albumModel = albumModel;
    }

    get title(): string {
        return this._albumModel.title;
    }

    get description(): string {
        return this._albumModel.description;
    }

    get dateCreated(): Date {
        return this._albumModel.dateCreated;
    }

    get photos(): [IPhotoModel] {
        return this._albumModel.photos;
    }
}

export = AlbumModel;