import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import myCustomDarkTheme from "@/themes/dark/myCustomDarkTheme";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: myCustomDarkTheme
        }
    },
    breakpoint: {
        thresholds: {
            xs: 600,
            sm: 940,
            md: 1260,
            lg: 1900
        },
        scrollBarWidth: 20
    },
});
