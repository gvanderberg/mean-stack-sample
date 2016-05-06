import BaseBusiness = require("./base/BaseBusiness");
import IRoleModel = require("./../../models/interfaces/RoleModel");

interface RoleBusiness extends BaseBusiness<IRoleModel> {

}

export = RoleBusiness;