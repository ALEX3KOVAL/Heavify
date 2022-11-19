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
import HomeView from "@/views/HomeView.vue";
import SongAddedView from "@/views/SongAddedView.vue";
import PlayerView from "@/views/PlayerView.vue";
import AuthView from "@/views/AuthView.vue";
import IndexView from "@/views/IndexView.vue";
import SongSelectionView from "@/views/SongSelectionView.vue";
import {RouteConfig} from "vue-router";

const routes: Array<RouteConfig> = [
    {
        path: INDEX_ROUTE,
        component: IndexView,
        meta: {
            title: "Heavify - get some heavy"
        }
    },
    {
        path: HOME_ROUTE,
        component: HomeView,
        meta: {
            requiresAuth: true,
            title: "Welcome to Heavify"
        }
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
        }
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
        component: AuthView,
        meta: {
            title: "Authorization"
        }
    },
    {
        path: ADMIN_ROUTE,
        component: AdminView,
        meta: {
            requiresAuth: true,
            isAdmin : true,
            title: "Админ-панель"
        }
    },
];

export default routes;
