//@ts-ignore
import Velocity from "velocity-animate"

const velocityMixin = {
    methods: {
        beforeEnter: function (element: any) {
            element.style.opacity = 0;
            element.style.transformOrigin = 'left';
        },
        enter: function (element: any, done: any) {
            Velocity(element, { opacity: 1},
                { duration: 750 });
            Velocity(element, { complete: done });
        },
        leave: function (element: any, done: any) {
            Velocity(element, { translateX: '15px', rotateZ: '50deg' },
                { duration: 300 })
            Velocity(element, { rotateZ: '100deg' },
                { loop: 1 });
            Velocity(element, {
                    rotateZ: '45deg',
                    translateY: '30px',
                    translateX: '30px',
                    opacity: 0
                },
                { complete: done });
        }
    }
}

export default velocityMixin;
