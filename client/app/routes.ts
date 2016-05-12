import {Route, Router} from "angular2/router";
import {AboutComponent} from "./components/about/about.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumPhotosComponent} from "./components/albumPhotos/album-photos.component";;
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {RegisterComponent} from "./components/register/register.component";

export var Routes = {
    home: new Route({ path: "/", name: "Home", component: HomeComponent }),
    about: new Route({ path: "/about", name: "About", component: AboutComponent }),
    albums: new Route({ path: "/albums", name: "Albums", component: AlbumsComponent }),
    albumPhotos: new Route({ path: "/albums/:id/photos", name: "AlbumPhotos", component: AlbumPhotosComponent }),
    contact: new Route({ path: "/contact", name: "Contact", component: ContactComponent }),
    login: new Route({ path: "/login", name: "Login", component: LoginComponent }),
    photos: new Route({ path: "/photos", name: "Photos", component: PhotosComponent }),
    register: new Route({ path: "/register", name: "Register", component: RegisterComponent })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);