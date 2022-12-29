import {
    ADMIN_ROUTE,
    PLAYER_ROUTE,
    SONG_ADDED_ROUTE,
    HOME_ROUTE,
    INDEX_ROUTE,
    AUTH_ROUTE,
    SONG_SELECTION_ROUTE
} from "@/utils/consts";
import AdminView from "@/views/AdminView.vue";
import SongAddedView from "@/views/SongAddedView.vue";
import PlayerView from "@/views/PlayerView.vue";
import SongSelectionView from "@/views/SongSelectionView.vue";
import {RouteConfig} from "vue-router";

const routes: Array<RouteConfig> = [
    {
        path: INDEX_ROUTE,
        name: "index",
        component: () => import("@/views/IndexView.vue"),
        meta: {
            title: "Heavify - get some heavy"
        },
    },
    {
        path: HOME_ROUTE,
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {
            requiresAuth: true,
            title: "Welcome to Heavify",
            layout: "DefaultPageLayout"
        },
    },
    {
        path: SONG_ADDED_ROUTE,
        component: SongAddedView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: SONG_SELECTION_ROUTE,
        component: SongSelectionView,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: PLAYER_ROUTE,
        component: PlayerView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: AUTH_ROUTE,
        name: "auth",
        component: () => import("@/views/AuthView.vue"),
        meta: {
            title: "Authorization",
            layout: "AuthPageLayout"
        }
    },
    {
        path: ADMIN_ROUTE,
        component: AdminView,
        meta: {
            requiresAuth: true,
            isAdmin : true,
            title: "Admin"
        }
    },
];

export default routes;
