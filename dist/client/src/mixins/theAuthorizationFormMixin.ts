import {required, maxLength, email, minLength} from "vuelidate/lib/validators";

const theAuthorizationFormMixin = {
    data: () => ({
        isDialogVisible: true,
        login: "",
        pwd: "",
        submitButtonTextShadowStyleString: "",
        show3: false,
        /*rules: {
            required: (value: any) => !!value || 'заполните',
            email:
                [
                    (value: string) => value.length >= 8 || 'не менее 8 символов',
                    (value: string) => value.length <= 30 || "не более 30 символов",
                    (value: string) => emailPattern.test(value) || "email некорректен",
                ],
            pwd:
                [
                    (value: string) => value.length >= 15 || 'не менее 15 символов',
                    (value: string) => value.length <= 40 || "не более 40 символов",
                    //(value: string) => pwdPattern.test(value) || "пароль некорректен",
                ]
        },*/
    }),
    validations: {
        login: {required, maxLength: maxLength(30), minLength: minLength(8), email},
        pwd: {required, maxLength: maxLength(40), minLength: minLength(15)}
    },
    methods: {
        back: function() {
            this.clearFields();
            // @ts-ignore
            this.$router.back();
            this.hide();
        },
        clearFields: function() {
            // @ts-ignore
            this.pwd = "";
            // @ts-ignore
            this.login = "";
        },
        hide() {
            // @ts-ignore
            this.isDialogVisible = false;
        },
        clickOutsideHandler: function(event: any) {
            let theAuthorizationFormHTMLNode =
                document.getElementsByClassName("authorization-form__fields-row-wrapper")[0];
            // @ts-ignore
            if (!(theAuthorizationFormHTMLNode === event.target || theAuthorizationFormHTMLNode.contains(event.target))) {
                this.back();
            }
        }
    },
    created() {
        // @ts-ignore
        setTimeout(() => document.body.addEventListener("click", this.clickOutsideHandler), 1000);
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
        },
        emailErrors() {
            const errors: any[] = [];
            //@ts-ignore
            if (!this.$v.login.$dirty) return errors;
            //@ts-ignore
            !this.$v.login.email && errors.push('email некорректен');
            //@ts-ignore
            !this.$v.login.required && errors.push('введите email');
            return errors;
        },
        pwdErrors() {
            const errors: any[] = [];
            //@ts-ignore
            if (!this.$v.pwd.$dirty) return errors;
            //@ts-ignore
            !this.$v.pwd.required && errors.push('введите пароль');
            return errors;
        }
    }
}

export default theAuthorizationFormMixin;
