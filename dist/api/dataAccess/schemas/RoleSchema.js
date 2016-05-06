"use strict";
var DataAccess = require("./../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var RoleSchema = (function () {
    function RoleSchema() {
    }
    Object.defineProperty(RoleSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: { type: String, required: true }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return RoleSchema;
}());
var schema = mongooseConnection.model("Roles", RoleSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kYXRhQWNjZXNzL3NjaGVtYXMvUm9sZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxVQUFVLFdBQVcsaUJBQWlCLENBQUMsQ0FBQztBQUcvQyxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDM0MsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkQ7SUFBQTtJQVFBLENBQUM7SUFQRyxzQkFBVyxvQkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTthQUN6QyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUVELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBYSxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlFLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcGkvZGF0YUFjY2Vzcy9zY2hlbWFzL1JvbGVTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoXCIuLy4uL0RhdGFBY2Nlc3NcIik7XG5pbXBvcnQgSVJvbGVNb2RlbCA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVscy9pbnRlcmZhY2VzL1JvbGVNb2RlbFwiKTtcblxubGV0IG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xubGV0IG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBSb2xlU2NoZW1hIHtcbiAgICBzdGF0aWMgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgbGV0IHNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICAgICAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cblxubGV0IHNjaGVtYSA9IG1vbmdvb3NlQ29ubmVjdGlvbi5tb2RlbDxJUm9sZU1vZGVsPihcIlJvbGVzXCIsIFJvbGVTY2hlbWEuc2NoZW1hKTtcblxuZXhwb3J0ID0gc2NoZW1hO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
