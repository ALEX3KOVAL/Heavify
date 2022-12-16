import {required, maxLength, email, minLength} from "vuelidate/lib/validators";
import UserStore from "@/store/userStore";
import httpStatusCodes from "@/http/api/codes/httpStatusCodes";

const theAuthorizationFormMixin = {
    data: () => ({
        isDialogVisible: true,
        login: "",
        pwd: "",
        submitButtonTextShadowStyleString: "",
        isPasswordVisible: false,
        register: false,
        userId: "",
    }),
    validations: {
        login: {required, maxLength: maxLength(30), minLength: minLength(15), email},
        pwd: {required, maxLength: maxLength(40), minLength: minLength(7)},
        userId: {required, maxLength: maxLength(30), minLength: minLength(10), email}
    },
    methods: {
        async authorize() {
            //@ts-ignore
            this.$v.pwd.$touch();
            //@ts-ignore
            this.$v.login.$touch();
            //@ts-ignore
            if (!this.$v.login.$invalid && !this.$v.pwd.$invalid) {
                //@ts-ignore
                let response = await UserStore.actions.login(this.login, this.pwd);
                if (response.status === httpStatusCodes.SUCCESS) {
                    //@ts-ignore
                    this.clearFields();
                    //@ts-ignore
                    this.hide();
                    //@ts-ignore
                    await this.$router.push('/home');
                }
                else {
                    //@ts-ignore
                    this.clearFields();
                    console.log(response.message);
                }
            }
            else {
                // потрясти неправильно заполненные формы
            }
        },
        back: function() {
            this.clearFields();
            // @ts-ignore
            this.$router.back();
            this.hide();
        },
        checkForLatinAndNumbers(value: string): boolean {
            return /^[^А-Яа-яё\W]+$/.test(value);
        },
        checkPassword(): boolean {
            //@ts-ignore
            return /^[^А-Яа-яё\!\@\#\$\%\&\(\)\-\<\>\?\,\.\`\~\"\'\№\;\:]+$/.test(this.pwd);
        },
        clearFields: function() {
            // @ts-ignore
            this.pwd = "";
            // @ts-ignore
            this.login = "";
            // @ts-ignore
            this.userId = "";
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
        createCancelButtonTextShadow(): string {
            //@ts-ignore
            return (this.submitButtonTextShadowStyleString as string).replace("#6200EE", "red");
        },
        setTitle(): string {
            // @ts-ignore
            return this.register ? "Регистрация" : "Войти";
        },
        setAuthModeBtnTitle(): string {
            // @ts-ignore
            return this.register ? "Войти" : "Регистрация";
        },
        emailErrors() {
            const errors: any[] = [];
            //@ts-ignore
            if (!this.$v.login.$dirty) return errors;
            //@ts-ignore
            !this.$v.login.email && errors.push('почта некорректна');
            //@ts-ignore
            !this.$v.login.minLength && errors.push("должна быть не менее 15 символов");
            //@ts-ignore
            !this.$v.login.maxLength && errors.push("не должна превышать 30 символов");
            //@ts-ignore
            !this.$v.login.required && errors.push('введите почту');
            return errors;
        },
        pwdErrors() {
            const errors: any[] = [];
            //@ts-ignore
            if (!this.$v.pwd.$dirty) return errors;
            //@ts-ignore
            !this.$v.pwd.required && errors.push('введите пароль');
            //@ts-ignore
            !this.checkPassword() && errors.push("не должен содержать кириллицу и !@#$%&()-<>?,.`~\"№';:");
            //@ts-ignore
            !this.$v.pwd.minLength && errors.push("должен быть не менее 7 символов");
            //@ts-ignore
            !this.$v.pwd.maxLength && errors.push("не должен превышать 40 символов");
            return errors;
        },
        userIdErrors() {
            const errors: any[] = [];
            //@ts-ignore
            if (!this.$v.userId.$dirty) return errors;
            //@ts-ignore
            !this.$v.userId.required && errors.push('введите идентификатор');
            //@ts-ignore
            !this.checkForLatinAndNumbers(this.userId) && errors.push("должен содержать только символы латиницы и цифры");
            //@ts-ignore
            !this.$v.userId.minLength && errors.push("должен быть не менее 10 символов");
            //@ts-ignore
            !this.$v.userId.maxLength && errors.push("не должен превышать 30 символов");
            return errors;
        }
    }
}

export default theAuthorizationFormMixin;
