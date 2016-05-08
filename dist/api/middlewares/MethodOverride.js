"use strict";
var express = require("express");
//import methodOverride = require("method-override");
var MethodOverride = (function () {
    function MethodOverride() {
    }
    MethodOverride.configuration = function () {
        var app = express();
        //app.use(methodOverride("X-HTTP-Method"));
        //app.use(methodOverride("X-HTTP-Method-Override"));
        //app.use(methodOverride("X-Method-Override"));
        //app.use(methodOverride("_method"));
        return app;
    };
    return MethodOverride;
}());
Object.seal(MethodOverride);
module.exports = MethodOverride;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9taWRkbGV3YXJlcy9NZXRob2RPdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMscURBQXFEO0FBRXJEO0lBQUE7SUFXQSxDQUFDO0lBVlUsNEJBQWEsR0FBcEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUVwQiwyQ0FBMkM7UUFDM0Msb0RBQW9EO1FBQ3BELCtDQUErQztRQUMvQyxxQ0FBcUM7UUFFckMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxxQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixpQkFBUyxjQUFjLENBQUMiLCJmaWxlIjoiYXBpL21pZGRsZXdhcmVzL01ldGhvZE92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbi8vaW1wb3J0IG1ldGhvZE92ZXJyaWRlID0gcmVxdWlyZShcIm1ldGhvZC1vdmVycmlkZVwiKTtcblxuY2xhc3MgTWV0aG9kT3ZlcnJpZGUge1xuICAgIHN0YXRpYyBjb25maWd1cmF0aW9uKCk6IGFueSB7XG4gICAgICAgIGxldCBhcHAgPSBleHByZXNzKCk7XG4gICAgICAgIFxuICAgICAgICAvL2FwcC51c2UobWV0aG9kT3ZlcnJpZGUoXCJYLUhUVFAtTWV0aG9kXCIpKTtcbiAgICAgICAgLy9hcHAudXNlKG1ldGhvZE92ZXJyaWRlKFwiWC1IVFRQLU1ldGhvZC1PdmVycmlkZVwiKSk7XG4gICAgICAgIC8vYXBwLnVzZShtZXRob2RPdmVycmlkZShcIlgtTWV0aG9kLU92ZXJyaWRlXCIpKTtcbiAgICAgICAgLy9hcHAudXNlKG1ldGhvZE92ZXJyaWRlKFwiX21ldGhvZFwiKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXBwO1xuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoTWV0aG9kT3ZlcnJpZGUpO1xuXG5leHBvcnQgPSBNZXRob2RPdmVycmlkZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
