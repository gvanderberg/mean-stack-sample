"use strict";
var DataAccess = require("./../DataAccess");
var PhotoSchema = require("./PhotoSchema");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var AlbumSchema = (function () {
    function AlbumSchema() {
    }
    Object.defineProperty(AlbumSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                title: { type: String, required: true },
                description: { type: String },
                dateCreated: { type: Date, required: true },
                photos: { type: [PhotoSchema] }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return AlbumSchema;
}());
var schema = mongooseConnection.model("Albums", AlbumSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kYXRhQWNjZXNzL3NjaGVtYXMvQWxidW1TY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sVUFBVSxXQUFXLGlCQUFpQixDQUFDLENBQUM7QUFFL0MsSUFBTyxXQUFXLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFFOUMsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFXQSxDQUFDO0lBVkcsc0JBQVcscUJBQU07YUFBakI7WUFDSSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ3ZDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Z0JBQzdCLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDM0MsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7YUFDbEMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGtCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFFRCxJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQWMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVqRixpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiYXBpL2RhdGFBY2Nlc3Mvc2NoZW1hcy9BbGJ1bVNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZShcIi4vLi4vRGF0YUFjY2Vzc1wiKTtcbmltcG9ydCBJQWxidW1Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVscy9pbnRlcmZhY2VzL0FsYnVtTW9kZWxcIik7XG5pbXBvcnQgUGhvdG9TY2hlbWEgPSByZXF1aXJlKFwiLi9QaG90b1NjaGVtYVwiKTtcblxubGV0IG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xubGV0IG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBBbGJ1bVNjaGVtYSB7XG4gICAgc3RhdGljIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIGxldCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgICAgICBkYXRlQ3JlYXRlZDogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgcGhvdG9zOiB7IHR5cGU6IFtQaG90b1NjaGVtYV0gfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cblxubGV0IHNjaGVtYSA9IG1vbmdvb3NlQ29ubmVjdGlvbi5tb2RlbDxJQWxidW1Nb2RlbD4oXCJBbGJ1bXNcIiwgQWxidW1TY2hlbWEuc2NoZW1hKTtcblxuZXhwb3J0ID0gc2NoZW1hO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
