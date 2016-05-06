import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IRoleModel = require("./../models/interfaces/RoleModel");
import RoleBusiness = require("./../business/RoleBusiness");

class RoleController implements IBaseController<RoleBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            var user: IRoleModel = <IRoleModel>req.body;
            var business = new RoleBusiness();

            business.create(user, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params._id;
            var business = new RoleBusiness();

            business.delete(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params._id;
            var business = new RoleBusiness();

            business.findById(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                    //res.send({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var business = new RoleBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                    //res.render("users/list", { title: "Roles", data: result });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var user: IRoleModel = <IRoleModel>req.body;
            var business = new RoleBusiness();

            business.update(_id, user, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": "success" });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}

export = RoleController;