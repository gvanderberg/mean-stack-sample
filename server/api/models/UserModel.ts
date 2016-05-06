import IUserModel = require("./interfaces/UserModel");

class UserModel {
    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }

    get username(): string {
        return this._userModel.username;
    }

    get email(): string {
        return this._userModel.email;
    }

    get hashedPassword(): string {
        return this._userModel.hashedPassword;
    }

    get salt(): string {
        return this._userModel.salt;
    }

    get isLocked(): boolean {
        return this._userModel.isLocked;
    }

    get dateCreated(): Date {
        return this._userModel.dateCreated;
    }
}

export = UserModel;