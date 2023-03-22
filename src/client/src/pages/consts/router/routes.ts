import {RouteConfig} from "vue-router";
import SongAddedView from "../../ui/views/SongAddedView.vue";
import SongSelectionView from "../../ui/views/SongSelectionView.vue";
import PlayerView from "../../ui/views/PlayerView.vue";
import AdminView from "../../ui/views/AdminView.vue";
import {
    ADMIN_PATH,
    AUTH_PATH,
    HOME_PATH,
    INDEX_PATH,
    PLAYER_PATH,
    SONG_ADDED_PATH,
    SONG_SELECTION_PATH
} from "./paths"

const routes: Array<RouteConfig> = [
    {
        path: INDEX_PATH,
        name: "index",
        component: () => import("../../ui/views/IndexView.vue"),
        meta: {
            title: "Heavify - get some heavy",
            pageIsLoadedOnce: false
        },
    },
    {
        path: HOME_PATH,
        name: "home",
        component: () => import("../../ui/views/HomeView.vue"),
        meta: {
            requiresAuth: true,
            title: "Welcome to Heavify",
            layout: "DefaultPageLayout.vue"
        },
    },
    {
        path: SONG_ADDED_PATH,
        component: SongAddedView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: SONG_SELECTION_PATH,
        component: SongSelectionView,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: PLAYER_PATH,
        component: PlayerView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: AUTH_PATH,
        name: "auth",
        component: () => import("../../ui/views/AuthView.vue"),
        meta: {
            title: "Authorization",
            layout: "AuthPageLayout.vue"
        }
    },
    {
        path: ADMIN_PATH,
        component: AdminView,
        meta: {
            requiresAuth: true,
            isAdmin : true,
            title: "Admin"
        }
    },
];

export default routes;
