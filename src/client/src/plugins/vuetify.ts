import Vue from 'vue';
import Vuetify,
{
    VApp,
    VImg,
    VNavigationDrawer,
    VDialog,
    VIcon,
    VBtn,
    VList,
    VListItemGroup,
    VListItem,
    VListItemTitle,
    VSpacer,
    VExpandTransition,
    VCol,
    VOverlay,
    VCardActions,
    VTextField
} from 'vuetify/lib';
import myCustomDarkTheme from "../themes/dark/myCustomDarkTheme";

Vue.use(Vuetify, {
    components: {
        VApp,
        VImg,
        VDialog,
        VNavigationDrawer,
        VIcon,
        VBtn,
        VList,
        VOverlay,
        VListItemGroup,
        VListItem,
        VListItemTitle,
        VSpacer,
        VExpandTransition,
        VCol,
        VCardActions,
        VTextField
    }
});

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
