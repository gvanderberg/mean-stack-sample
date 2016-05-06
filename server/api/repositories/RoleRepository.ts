import IRoleModel = require("./../models/interfaces/RoleModel");
import RoleSchema = require("./../dataAccess/schemas/RoleSchema");
import BaseRepository = require("./interfaces/base/BaseRepository");

class RoleRepository extends BaseRepository<IRoleModel>{
    constructor() {
        super(RoleSchema);
    }
}

Object.seal(RoleRepository);

export = RoleRepository;