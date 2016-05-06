import BaseBusiness = require("./base/BaseBusiness");
import IAlbumModel = require("./../../models/interfaces/AlbumModel");

interface AlbumBusiness extends BaseBusiness<IAlbumModel> {

}

export = AlbumBusiness;