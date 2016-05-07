import {Route, Router} from "angular2/router";
import {AboutComponent} from "./components/about/about.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumPhotosComponent} from "./components/albumPhotos/album-photos.component";;
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {PhotosComponent} from "./components/photos/photos.component";

export var Routes = {
    home: new Route({ path: "/", name: "Home", component: HomeComponent }),
    about: new Route({ path: "/about", name: "About", component: AboutComponent }),
    albums: new Route({ path: "/albums", name: "Albums", component: AlbumsComponent }),
    albumPhotos: new Route({ path: "/albums/:id/photos", name: "AlbumPhotos", component: AlbumPhotosComponent }),
    contact: new Route({ path: "/contact", name: "Contact", component: ContactComponent }),
    photos: new Route({ path: "/photos", name: "Photos", component: PhotosComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);