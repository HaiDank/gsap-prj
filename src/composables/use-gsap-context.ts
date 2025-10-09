import gsap from "gsap";
import { onMounted, onUnmounted } from "vue";

export function useGSAPContext(cb = () => {}) {
    let ctx: gsap.Context | null = null;

    onMounted(() => {
        ctx = gsap.context(() => {
            cb();
        });
    });

    onUnmounted(() => {
        if (ctx) {
            ctx.revert();
        }
    });
}
