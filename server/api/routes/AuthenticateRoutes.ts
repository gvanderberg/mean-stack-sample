import express = require("express");
import hash = require("password-hash");
import jwt = require("jsonwebtoken");
import UserRepository = require("./../repositories/UserRepository");

let router = express.Router();

class AuthenticateRoutes {
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    get routes() {
        let repository = this._userRepository;

        router.post("/", (req, res) => {
            repository.findOne({ "username": req.body.username }, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    if (!result) {
                        res.json({ "success": false, "message": "Authentication failed. User not found." });
                    } else if (result) {
                        if (!hash.verify(req.body.password, result.hashedPassword)) {
                            res.json({ "success": false, "message": "Authentication failed. Wrong password." });
                        } else {
                            var token = jwt.sign(result, "mean", {});

                            res.json({ "success": true, "token": token });
                        }
                    }
                }
            });
        });

        return router;
    }
}

Object.seal(AuthenticateRoutes);

export = AuthenticateRoutes;