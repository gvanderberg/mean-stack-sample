"use strict";
var DataAccess = require("./../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                username: { type: String, required: true },
                email: { type: String, required: true },
                hashedPassword: { type: String, required: true },
                //salt: { type: String, required: true },
                isLocked: { type: Boolean, required: true },
                dateCreated: { type: Date, required: true }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
}());
var schema = mongooseConnection.model("Users", UserSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlclNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxVQUFVLFdBQVcsaUJBQWlCLENBQUMsQ0FBQztBQUcvQyxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDM0MsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkQ7SUFBQTtJQWFBLENBQUM7SUFaRyxzQkFBVyxvQkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDMUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUN2QyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQ2hELHlDQUF5QztnQkFDekMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMzQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7YUFDOUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFFRCxJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQWEsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU5RSxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiYXBpL2RhdGFBY2Nlc3Mvc2NoZW1hcy9Vc2VyU2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFBY2Nlc3MgPSByZXF1aXJlKFwiLi8uLi9EYXRhQWNjZXNzXCIpO1xuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9Vc2VyTW9kZWxcIik7XG5cbmxldCBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcbmxldCBtb25nb29zZUNvbm5lY3Rpb24gPSBEYXRhQWNjZXNzLm1vbmdvb3NlQ29ubmVjdGlvbjtcblxuY2xhc3MgVXNlclNjaGVtYSB7XG4gICAgc3RhdGljIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIGxldCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgaGFzaGVkUGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgLy9zYWx0OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIGlzTG9ja2VkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICBkYXRlQ3JlYXRlZDogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuXG5sZXQgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElVc2VyTW9kZWw+KFwiVXNlcnNcIiwgVXNlclNjaGVtYS5zY2hlbWEpO1xuXG5leHBvcnQgPSBzY2hlbWE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
