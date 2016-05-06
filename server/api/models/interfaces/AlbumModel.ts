import mongoose = require("mongoose");
import IPhotoModel = require("./PhotoModel");

interface AlbumModel extends mongoose.Document {
    title: string;
    description: string;
    dateCreated: Date;
    photos: [IPhotoModel];
}

export = AlbumModel;