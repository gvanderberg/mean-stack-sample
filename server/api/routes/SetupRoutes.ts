import express = require("express");
import hash = require("password-hash");
import UserRepository = require("./../repositories/UserRepository");
import UserSchema = require("./../dataAccess/schemas/UserSchema");

let router = express.Router();

class SetupRoutes {
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    get routes() {
        let repository = this._userRepository;

        router.get("/", (req, res) => {
            let user = new UserSchema();

            user.email = "john.doe@blah.com";
            user.username = "jdoe";
            user.hashedPassword = hash.generate("password");
            user.isLocked = false;
            user.dateCreated = new Date();

            repository.create(user, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json({ "success": true });
                }
            })
        });

        return router;
    }
}

Object.seal(SetupRoutes);

export = SetupRoutes;