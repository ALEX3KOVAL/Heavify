import Vue from "vue";
import VueRouter from 'vue-router';
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0,
            behavior: "smooth"
        }
    }
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        // @ts-ignore
        document.title = to.meta.title;
    });
});

export default router;
