"use strict";
var DataAccess = require("./../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var PhotoSchema = (function () {
    function PhotoSchema() {
    }
    Object.defineProperty(PhotoSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                title: { type: String, required: true },
                uri: { type: String },
                dateUploaded: { type: Date, required: true }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return PhotoSchema;
}());
var schema = mongooseConnection.model("Photos", PhotoSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kYXRhQWNjZXNzL3NjaGVtYXMvUGhvdG9TY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sVUFBVSxXQUFXLGlCQUFpQixDQUFDLENBQUM7QUFHL0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFVQSxDQUFDO0lBVEcsc0JBQVcscUJBQU07YUFBakI7WUFDSSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ3ZDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Z0JBQ3JCLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTthQUMvQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQUVELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBYyxRQUFRLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWpGLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcGkvZGF0YUFjY2Vzcy9zY2hlbWFzL1Bob3RvU2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFBY2Nlc3MgPSByZXF1aXJlKFwiLi8uLi9EYXRhQWNjZXNzXCIpO1xuaW1wb3J0IElQaG90b01vZGVsID0gcmVxdWlyZShcIi4vLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvUGhvdG9Nb2RlbFwiKTtcblxubGV0IG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xubGV0IG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBQaG90b1NjaGVtYSB7XG4gICAgc3RhdGljIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIGxldCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgdXJpOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgICAgICAgICAgZGF0ZVVwbG9hZGVkOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG5cbmxldCBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWw8SVBob3RvTW9kZWw+KFwiUGhvdG9zXCIsIFBob3RvU2NoZW1hLnNjaGVtYSk7XG5cbmV4cG9ydCA9IHNjaGVtYTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
