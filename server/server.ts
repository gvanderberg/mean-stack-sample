import express = require("express");
import path = require("path");
import Middlewares = require("./api/middlewares/base/BaseMiddlewares");

const PORT: number = process.env.PORT || 3000;

let app = express();

app.use(Middlewares.configuration);
app.use("/app", express.static(path.resolve(__dirname, "app")));
app.use("/libs", express.static(path.resolve(__dirname, "libs")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err["status"] = 404;
    next(err);
});

// development error handler will print stacktrace
if (app.get("env") === "development") {
    app.use((err: any, req, res, next) => {
        res.status(err["status"] || 500);
        res.render("error", { message: err.message, error: err });
    });
}

// production error handler no stacktraces leaked to user
app.use((err: any, req, res, next) => {
    res.status(err["status"] || 500);
    res.render("error", { message: err.message, error: {} });
});

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("This express app is listening on port:" + port);
});