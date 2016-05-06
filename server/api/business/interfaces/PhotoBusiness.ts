import BaseBusiness = require("./base/BaseBusiness");
import IPhotoModel = require("./../../models/interfaces/PhotoModel");

interface PhotoBusiness extends BaseBusiness<IPhotoModel> {

}

export = PhotoBusiness;