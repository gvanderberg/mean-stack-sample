"use strict";
var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();
app.use("/app", express.static(path.resolve(__dirname, "app")));
app.use("/libs", express.static(path.resolve(__dirname, "libs")));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
};
app.get("/*", renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("This express app is listening on port:" + port);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFFOUIsSUFBSSxJQUFJLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQzVDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWxFLElBQUksV0FBVyxHQUFHLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUMxRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBO0FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFM0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDMUIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbmxldCBwb3J0OiBudW1iZXIgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5sZXQgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFwiL2FwcFwiLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImFwcFwiKSkpO1xuYXBwLnVzZShcIi9saWJzXCIsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibGlic1wiKSkpO1xuXG5sZXQgcmVuZGVySW5kZXggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImluZGV4Lmh0bWxcIikpO1xufVxuXG5hcHAuZ2V0KFwiLypcIiwgcmVuZGVySW5kZXgpO1xuXG5sZXQgc2VydmVyID0gYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGhvc3QgPSBzZXJ2ZXIuYWRkcmVzcygpLmFkZHJlc3M7XG4gICAgbGV0IHBvcnQgPSBzZXJ2ZXIuYWRkcmVzcygpLnBvcnQ7XG5cbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgZXhwcmVzcyBhcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6XCIgKyBwb3J0KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==