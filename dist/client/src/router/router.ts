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
            //@ts-ignore
            if (!to.meta.requiresAuth) {
                if (to.path !== INDEX_ROUTE) {
                    return next({path:HOME_ROUTE});
                }
                else {
                    return next();
                    //если авторизованный пользователь решил перейти на index страницу,
                    // то необходимо добавить обработчик поведения кнопки входа, чтобы она сразу перебрасывала на HomeView,
                    // а, если пользователь не авторизован, то по нажатию открыть AuthView
                }
            }
            else {
                return next();
            }
        }
        else {
            if (to.path === INDEX_ROUTE) {
                return next({path: INDEX_ROUTE, query: {from: window.location.pathname}})
            }
            return AUTH_ROUTE;
        }
    }
    else {
        console.log("not auth");
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
