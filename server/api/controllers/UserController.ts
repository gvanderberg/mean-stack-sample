import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import IUserModel = require("./../models/interfaces/UserModel");
import UserBusiness = require("./../business/UserBusiness");

class UserController implements IBaseController<UserBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let data: IUserModel = <IUserModel>req.body;
            let business = new UserBusiness();

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
            let business = new UserBusiness();

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
            let business = new UserBusiness();

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
            let business = new UserBusiness();

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
            let data: IUserModel = <IUserModel>req.body;
            let business = new UserBusiness();

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

export = UserController;