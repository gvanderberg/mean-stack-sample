import IUserModel = require("./../models/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class UserRepository extends BaseRepository<IUserModel>{
    constructor() {
        super(UserSchema);
    }

    findOne(cond: Object, callback: (error: any, result: any) => void) {
        this._model.findOne(cond, (error, result) => {
            if (error) {
                callback(error, result);
            } else {
                callback(error, result);
            }
        })
    }
}

Object.seal(UserRepository);

export = UserRepository;