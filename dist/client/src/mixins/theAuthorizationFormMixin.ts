const theAuthorizationFormMixin = {
    data: () => ({
        isDialogVisible: true,
        login: "",
        pwd: "",
    }),
    methods: {
        hide: function() {
            this.clearFields();
            // @ts-ignore
            this.$router.back();
            // @ts-ignore
            this.isDialogVisible = false;
        },
        clearFields: function() {
            // @ts-ignore
            this.pwd = "";
            // @ts-ignore
            this.login = "";
        },
        clickOutsideHandler: function(event: any) {
            let theAuthorizationFormHTMLNode =
                document.getElementsByClassName("authorization-form__fields-row-wrapper")[0];
            // @ts-ignore
            if (!(theAuthorizationFormHTMLNode === event.target || theAuthorizationFormHTMLNode.contains(event.target))) {
                this.hide();
            }
        }
    },
    created() {
        setTimeout(() => {
            // @ts-ignore
            document.body.addEventListener("click", this.clickOutsideHandler);
        }, 1000);
    },
    beforeDestroy() {
        // @ts-ignore
        document.body.removeEventListener("click", this.clickOutsideHandler);
    },
    computed: {
        authorizationFormWidth: function() {
            // @ts-ignore
            let width: number = this.$vuetify.breakpoint.width;
            // @ts-ignore
            switch (this.$vuetify.breakpoint.name) {
                case "sm":
                case "xs":
                    return width * 0.8;
                case "md":
                    return width * 0.7;
                default:
                    return width * 0.3;
            }
        }
    }
}

export default theAuthorizationFormMixin;
