System.register(["angular2/router", "./components/about/about.component", "./components/albums/albums.component", "./components/albumPhotos/album-photos.component", "./components/contact/contact.component", "./components/home/home.component", "./components/photos/photos.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, about_component_1, albums_component_1, album_photos_component_1, contact_component_1, home_component_1, photos_component_1;
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
                photos: new router_1.Route({ path: "/photos", name: "Photos", component: photos_component_1.PhotosComponent })
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (r) { return Routes[r]; }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVFXLE1BQU0sRUFTSixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZDhELENBQUM7WUFLM0Usb0JBQUEsTUFBTSxHQUFHO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsQ0FBQztnQkFDdEUsS0FBSyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLENBQUM7Z0JBQzlFLE1BQU0sRUFBRSxJQUFJLGNBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxDQUFDO2dCQUNsRixXQUFXLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUUsQ0FBQztnQkFDNUcsT0FBTyxFQUFFLElBQUksY0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxDQUFDO2dCQUN0RixNQUFNLEVBQUUsSUFBSSxjQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQzthQUNyRixDQUFBLENBQUM7WUFFVyx3QkFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZSwgUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbGJ1bXNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWxidW1QaG90b3NDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYWxidW1QaG90b3MvYWxidW0tcGhvdG9zLmNvbXBvbmVudFwiOztcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQaG90b3NDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnRcIjtcblxuZXhwb3J0IHZhciBSb3V0ZXMgPSB7XG4gICAgaG9tZTogbmV3IFJvdXRlKHsgcGF0aDogXCIvXCIsIG5hbWU6IFwiSG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSksXG4gICAgYWJvdXQ6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2Fib3V0XCIsIG5hbWU6IFwiQWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9KSxcbiAgICBhbGJ1bXM6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2FsYnVtc1wiLCBuYW1lOiBcIkFsYnVtc1wiLCBjb21wb25lbnQ6IEFsYnVtc0NvbXBvbmVudCB9KSxcbiAgICBhbGJ1bVBob3RvczogbmV3IFJvdXRlKHsgcGF0aDogXCIvYWxidW1zLzppZC9waG90b3NcIiwgbmFtZTogXCJBbGJ1bVBob3Rvc1wiLCBjb21wb25lbnQ6IEFsYnVtUGhvdG9zQ29tcG9uZW50IH0pLFxuICAgIGNvbnRhY3Q6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9KSxcbiAgICBwaG90b3M6IG5ldyBSb3V0ZSh7IHBhdGg6IFwiL3Bob3Rvc1wiLCBuYW1lOiBcIlBob3Rvc1wiLCBjb21wb25lbnQ6IFBob3Rvc0NvbXBvbmVudCB9KVxufTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVMgPSBPYmplY3Qua2V5cyhSb3V0ZXMpLm1hcChyID0+IFJvdXRlc1tyXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
