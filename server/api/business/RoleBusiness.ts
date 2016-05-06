import IRoleBusiness = require("./interfaces/RoleBusiness");
import IRoleModel = require("./../models/interfaces/RoleModel");
import RoleRepository = require("./../repositories/RoleRepository");

class RoleBusiness implements IRoleBusiness {
    private _roleRepository: RoleRepository;

    constructor() {
        this._roleRepository = new RoleRepository();
    }

    create(item: IRoleModel, callback: (error: any, result: any) => void) {
        this._roleRepository.create(item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._roleRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IRoleModel) => void) {
        this._roleRepository.findById(_id, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._roleRepository.retrieve(callback);
    }

    update(_id: string, item: IRoleModel, callback: (error: any, result: any) => void) {
        this._roleRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            else {
                this._roleRepository.update(res._id, item, callback);
            }
        });
    }
}

Object.seal(RoleBusiness);

export = RoleBusiness;