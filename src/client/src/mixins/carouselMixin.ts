const TheCarouselMixin = {
    data: () => ({
        drawer: true,
        presentationCarouselSlides: [],
    }),
    computed: {
        //@ts-ignore
        setHeight() {
            //@ts-ignore
            const w = this.$vuetify.breakpoint.width;
            //@ts-ignore
            let h = this.$vuetify.breakpoint.height;
            if (h > w) {
                if (w * (100 / h) < 58.7) {
                    //@ts-ignore
                    this.carouselHeight = w * 0.5;
                    //@ts-ignore
                    return this.carouselHeight;
                }
                else {
                    //@ts-ignore
                    this.carouselHeight = w * 0.4;
                    //@ts-ignore
                    return this.carouselHeight;
                }
            }
            else {
                //@ts-ignore
                this.carouselHeight = h * 0.55;
                //@ts-ignore
                return this.carouselHeight;
            }
        },
        //@ts-ignore
        setWidth() {
            //@ts-ignore
            const w = this.$vuetify.breakpoint.width;
            //@ts-ignore
            let h = this.$vuetify.breakpoint.height;
            if (h > w) {
                //@ts-ignore
                switch(this.$vuetify.breakpoint.name) {
                    case "xs":
                    case "sm":
                        //@ts-ignore
                        this.carouselWidth = w * 0.6;
                        break;
                    case "md":
                        //@ts-ignore
                        this.carouselWidth = w * 0.5;
                        break;
                }
                //@ts-ignore
                return this.carouselWidth;
            }
            else {
                //@ts-ignore
                this.carouselWidth = w * 0.5;
                //@ts-ignore
                return this.carouselWidth;
            }
        }
    }
}

export default TheCarouselMixin;
