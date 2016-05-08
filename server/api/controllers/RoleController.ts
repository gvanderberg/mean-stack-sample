import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IRoleModel = require("./../models/interfaces/RoleModel");
import RoleBusiness = require("./../business/RoleBusiness");

class RoleController implements IBaseController<RoleBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let data: IRoleModel = <IRoleModel>req.body;
            let business = new RoleBusiness();

            business.create(data, (error, result) => {
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
            let id: string = req.params._id;
            let business = new RoleBusiness();

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
            let id: string = req.params._id;
            let business = new RoleBusiness();

            business.findById(id, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            let business = new RoleBusiness();

            business.retrieve((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(result);
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
            let id: string = req.params._id;
            let data: IRoleModel = <IRoleModel>req.body;
            let business = new RoleBusiness();

            business.update(id, data, (error, result) => {
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