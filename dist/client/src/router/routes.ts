import {
    ADMIN_ROUTE,
    PLAYER_ROUTE,
    SONG_ADDED_ROUTE,
    HOME_ROUTE,
    INDEX_ROUTE,
    REGISTRATION_ROUTE,
    LOGIN_ROUTE, SONG_SELECTION_ROUTE
} from "@/utils/consts";
import AdminView from "@/views/AdminView.vue";
import HomeView from "@/views/HomeView.vue";
import SongAddedView from "@/views/SongAddedView.vue";
import PlayerView from "@/views/PlayerView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import IndexView from "@/views/IndexView.vue";
import SongSelectionView from "@/views/SongSelectionView.vue";
import {RouteConfig} from "vue-router";

const routes: Array<RouteConfig> = [
    {
        path: INDEX_ROUTE,
        component: IndexView
    },
    {
        path: HOME_ROUTE,
        component: HomeView,
        meta: {
            requiresAuth: true
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
        path: LOGIN_ROUTE,
        component: LoginView
    },
    {
        path: REGISTRATION_ROUTE,
        component: RegisterView
    },
    {
        path: ADMIN_ROUTE,
        component: AdminView,
        meta: {
            requiresAuth: true,
            isAdmin : true
        }
    },
];

export default routes;
