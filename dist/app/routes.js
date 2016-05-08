System.register(["angular2/router", "./components/about/about.component", "./components/albums/albums.component", "./components/albumPhotos/album-photos.component", "./components/contact/contact.component", "./components/home/home.component", "./components/login/login.component", "./components/photos/photos.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_component_1, albums_component_1, album_photos_component_1, contact_component_1, home_component_1, login_component_1, photos_component_1;
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
                photos: new router_1.Route({ path: "/photos", name: "Photos", component: photos_component_1.PhotosComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVNXLE1BQU0sRUFVSixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaEI4RCxDQUFDO1lBTTNFLG9CQUFBLE1BQU0sR0FBRztnQkFDaEIsSUFBSSxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLENBQUM7Z0JBQ3RFLEtBQUssRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxDQUFDO2dCQUM5RSxNQUFNLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQztnQkFDbEYsV0FBVyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFLENBQUM7Z0JBQzVHLE9BQU8sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsQ0FBQztnQkFDdEYsS0FBSyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLENBQUM7Z0JBQzlFLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxDQUFDO2FBQ3JGLENBQUEsQ0FBQztZQUVXLHdCQUFBLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC9yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlLCBSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FsYnVtc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbGJ1bVBob3Rvc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9hbGJ1bVBob3Rvcy9hbGJ1bS1waG90b3MuY29tcG9uZW50XCI7O1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQaG90b3NDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnRcIjtcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gICAgaG9tZTogbmV3IFJvdXRlKHsgcGF0aDogXCIvXCIsIG5hbWU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSksXG4gICAgYWJvdXQ6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2Fib3V0XCIsIG5hbWU6IFwiQWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9KSxcbiAgICBhbGJ1bXM6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2FsYnVtc1wiLCBuYW1lOiBcIkFsYnVtc1wiLCBjb21wb25lbnQ6IEFsYnVtc0NvbXBvbmVudCB9KSxcbiAgICBhbGJ1bVBob3RvczogbmV3IFJvdXRlKHsgcGF0aDogXCIvYWxidW1zLzppZC9waG90b3NcIiwgbmFtZTogXCJBbGJ1bVBob3Rvc1wiLCBjb21wb25lbnQ6IEFsYnVtUGhvdG9zQ29tcG9uZW50IH0pLFxuICAgIGNvbnRhY3Q6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9KSxcbiAgICBsb2dpbjogbmV3IFJvdXRlKHsgcGF0aDogXCIvbG9naW5cIiwgbmFtZTogXCJMb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0pLFxuICAgIHBob3RvczogbmV3IFJvdXRlKHsgcGF0aDogXCIvcGhvdG9zXCIsIG5hbWU6IFwiUGhvdG9zXCIsIGNvbXBvbmVudDogUGhvdG9zQ29tcG9uZW50IH0pXG59O1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUyA9IE9iamVjdC5rZXlzKFJvdXRlcykubWFwKHIgPT4gUm91dGVzW3JdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
