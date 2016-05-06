import IRoleModel = require("./interfaces/RoleModel");

class RoleModel {
    private _roleModel: IRoleModel;

    constructor(roleModel: IRoleModel) {
        this._roleModel = roleModel;
    }

    get name(): string {
        return this._roleModel.name;
    }
}

export = RoleModel;