import Vue from "vue";
import VueRouter from 'vue-router';
import routes from "./routes";
import UserStore from "@/store/userStore";
import {AUTH_ROUTE, HOME_ROUTE, INDEX_ROUTE} from "@/utils/consts";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to: any, from: any, savedPosition: any) {
        return {
            x: 0,
            y: 0,
            behavior: "smooth"
        }
    }
});

router.beforeEach(async (to, from, next) => {
    if (localStorage.getItem("accessToken")) {
        console.log("auth");
        if (await UserStore.actions.checkAuth()) {
            if (to.path === AUTH_ROUTE) {
                return HOME_ROUTE;
            }
            return to.path;
        }
        else {
            if (to.path === INDEX_ROUTE) {
                return next({path: INDEX_ROUTE, query: {from: window.location.pathname}})
            }
            return AUTH_ROUTE;
        }
    }
    else {
        //@ts-ignore
        if (to.meta.requiresAuth) {
            next({path: AUTH_ROUTE});
        }
        else {
            next();
        }

    }
    /*console.log(to.name);
    if (to.name !== "auth") next({path: AUTH_ROUTE});
    else next();*/
});

router.afterEach((to: any, from: any) => {
    Vue.nextTick(() => {
        // @ts-ignore
        document.title = to.meta.title;
    });
});

export default router;
