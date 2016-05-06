import IPhotoModel = require("./interfaces/PhotoModel");

class PhotoModel {
    private _photoModel: IPhotoModel;

    constructor(photoModel: IPhotoModel) {
        this._photoModel = photoModel;
    }

    get title(): string {
        return this._photoModel.title;
    }

    get uri(): string {
        return this._photoModel.uri;
    }

    get dateUploaded(): Date {
        return this._photoModel.dateUploaded;
    }
}

export = PhotoModel;