import express = require("express");
import path = require("path");

let port: number = process.env.PORT || 3000;
let app = express();

app.use("/app", express.static(path.resolve(__dirname, "app")));
app.use("/libs", express.static(path.resolve(__dirname, "libs")));

let renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
}

app.get("/*", renderIndex);

let server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("This express app is listening on port:" + port);
});