System.register(["angular2/router", "./components/about/about.component", "./components/albums/albums.component", "./components/albumPhotos/album-photos.component", "./components/contact/contact.component", "./components/home/home.component", "./components/login/login.component", "./components/photos/photos.component", "./components/register/register.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_component_1, albums_component_1, album_photos_component_1, contact_component_1, home_component_1, login_component_1, photos_component_1, register_component_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (album_photos_component_1_1) {
                album_photos_component_1 = album_photos_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (photos_component_1_1) {
                photos_component_1 = photos_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }],
        execute: function() {
            ;
            exports_1("Routes", Routes = {
                home: new router_1.Route({ path: "/", name: "Home", component: home_component_1.HomeComponent }),
                about: new router_1.Route({ path: "/about", name: "About", component: about_component_1.AboutComponent }),
                albums: new router_1.Route({ path: "/albums", name: "Albums", component: albums_component_1.AlbumsComponent }),
                albumPhotos: new router_1.Route({ path: "/albums/:id/photos", name: "AlbumPhotos", component: album_photos_component_1.AlbumPhotosComponent }),
                contact: new router_1.Route({ path: "/contact", name: "Contact", component: contact_component_1.ContactComponent }),
                login: new router_1.Route({ path: "/login", name: "Login", component: login_component_1.LoginComponent }),
                photos: new router_1.Route({ path: "/photos", name: "Photos", component: photos_component_1.PhotosComponent }),
                register: new router_1.Route({ path: "/register", name: "Register", component: register_component_1.RegisterComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVVXLE1BQU0sRUFXSixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbEI4RCxDQUFDO1lBTzNFLG9CQUFBLE1BQU0sR0FBRztnQkFDaEIsSUFBSSxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLENBQUM7Z0JBQ3RFLEtBQUssRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxDQUFDO2dCQUM5RSxNQUFNLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQztnQkFDbEYsV0FBVyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFLENBQUM7Z0JBQzVHLE9BQU8sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsQ0FBQztnQkFDdEYsS0FBSyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLENBQUM7Z0JBQzlFLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxDQUFDO2dCQUNsRixRQUFRLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLENBQUM7YUFDN0YsQ0FBQSxDQUFDO1lBRVcsd0JBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiYXBwL3JvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGUsIFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWxidW1zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0FsYnVtUGhvdG9zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FsYnVtUGhvdG9zL2FsYnVtLXBob3Rvcy5jb21wb25lbnRcIjs7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Bob3Rvc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9waG90b3MvcGhvdG9zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gICAgaG9tZTogbmV3IFJvdXRlKHsgcGF0aDogXCIvXCIsIG5hbWU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSksXG4gICAgYWJvdXQ6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2Fib3V0XCIsIG5hbWU6IFwiQWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9KSxcbiAgICBhbGJ1bXM6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2FsYnVtc1wiLCBuYW1lOiBcIkFsYnVtc1wiLCBjb21wb25lbnQ6IEFsYnVtc0NvbXBvbmVudCB9KSxcbiAgICBhbGJ1bVBob3RvczogbmV3IFJvdXRlKHsgcGF0aDogXCIvYWxidW1zLzppZC9waG90b3NcIiwgbmFtZTogXCJBbGJ1bVBob3Rvc1wiLCBjb21wb25lbnQ6IEFsYnVtUGhvdG9zQ29tcG9uZW50IH0pLFxuICAgIGNvbnRhY3Q6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9KSxcbiAgICBsb2dpbjogbmV3IFJvdXRlKHsgcGF0aDogXCIvbG9naW5cIiwgbmFtZTogXCJMb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0pLFxuICAgIHBob3RvczogbmV3IFJvdXRlKHsgcGF0aDogXCIvcGhvdG9zXCIsIG5hbWU6IFwiUGhvdG9zXCIsIGNvbXBvbmVudDogUGhvdG9zQ29tcG9uZW50IH0pLFxuICAgIHJlZ2lzdGVyOiBuZXcgUm91dGUoeyBwYXRoOiBcIi9yZWdpc3RlclwiLCBuYW1lOiBcIlJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVTID0gT2JqZWN0LmtleXMoUm91dGVzKS5tYXAociA9PiBSb3V0ZXNbcl0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
