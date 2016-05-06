System.register(["angular2/router", "./components/home/home.component", "./components/about/about.component", "./components/albums/albums.component", "./components/contact/contact.component", "./components/photos/photos.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, about_component_1, albums_component_1, contact_component_1, photos_component_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (photos_component_1_1) {
                photos_component_1 = photos_component_1_1;
            }],
        execute: function() {
            //import {AlbumPhotos} from "./components/albumPhotos";
            //import {Account} from "./components/account/account";
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: "/", name: "Home", component: home_component_1.HomeComponent }),
                //account: new Route({ path: "/account/...", name: "Account", component: Account }),
                about: new router_1.Route({ path: "/about", name: "About", component: about_component_1.AboutComponent }),
                albums: new router_1.Route({ path: "/albums", name: "Albums", component: albums_component_1.AlbumsComponent }),
                //albumPhotos: new Route({ path: "/albums/:id/photos", name: "AlbumPhotos", component: AlbumPhotos }),
                contact: new router_1.Route({ path: "/contact", name: "Contact", component: contact_component_1.ContactComponent }),
                photos: new router_1.Route({ path: "/photos", name: "Photos", component: photos_component_1.PhotosComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVNXLE1BQU0sRUFVSixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYnZCLHVEQUF1RDtZQUN2RCx1REFBdUQ7WUFFNUMsb0JBQUEsTUFBTSxHQUFHO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsQ0FBQztnQkFDdEUsb0ZBQW9GO2dCQUNwRixLQUFLLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsQ0FBQztnQkFDOUUsTUFBTSxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLENBQUM7Z0JBQ2xGLHNHQUFzRztnQkFDdEcsT0FBTyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxDQUFDO2dCQUN0RixNQUFNLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQzthQUNyRixDQUFBLENBQUM7WUFFVyx3QkFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZSwgUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWxidW1zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQaG90b3NDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnRcIjtcbi8vaW1wb3J0IHtBbGJ1bVBob3Rvc30gZnJvbSBcIi4vY29tcG9uZW50cy9hbGJ1bVBob3Rvc1wiO1xuLy9pbXBvcnQge0FjY291bnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50XCI7XG5cbmV4cG9ydCB2YXIgUm91dGVzID0ge1xuICAgIGhvbWU6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL1wiLCBuYW1lOiBcIkhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0pLFxuICAgIC8vYWNjb3VudDogbmV3IFJvdXRlKHsgcGF0aDogXCIvYWNjb3VudC8uLi5cIiwgbmFtZTogXCJBY2NvdW50XCIsIGNvbXBvbmVudDogQWNjb3VudCB9KSxcbiAgICBhYm91dDogbmV3IFJvdXRlKHsgcGF0aDogXCIvYWJvdXRcIiwgbmFtZTogXCJBYm91dFwiLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH0pLFxuICAgIGFsYnVtczogbmV3IFJvdXRlKHsgcGF0aDogXCIvYWxidW1zXCIsIG5hbWU6IFwiQWxidW1zXCIsIGNvbXBvbmVudDogQWxidW1zQ29tcG9uZW50IH0pLFxuICAgIC8vYWxidW1QaG90b3M6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2FsYnVtcy86aWQvcGhvdG9zXCIsIG5hbWU6IFwiQWxidW1QaG90b3NcIiwgY29tcG9uZW50OiBBbGJ1bVBob3RvcyB9KSxcbiAgICBjb250YWN0OiBuZXcgUm91dGUoeyBwYXRoOiBcIi9jb250YWN0XCIsIG5hbWU6IFwiQ29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQgfSksXG4gICAgcGhvdG9zOiBuZXcgUm91dGUoeyBwYXRoOiBcIi9waG90b3NcIiwgbmFtZTogXCJQaG90b3NcIiwgY29tcG9uZW50OiBQaG90b3NDb21wb25lbnQgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVTID0gT2JqZWN0LmtleXMoUm91dGVzKS5tYXAociA9PiBSb3V0ZXNbcl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
