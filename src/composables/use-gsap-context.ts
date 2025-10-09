import gsap from "gsap";
import { onMounted, onUnmounted, watch } from "vue";

export function useGSAPContext(cb = () => {}, dependencies: any[] = []) {
    let ctx: gsap.Context | null = null;

    onMounted(() => {
        if (dependencies.length === 0) {
            ctx = gsap.context(() => {
                cb();
            });
        }
    });

    watch(dependencies, () => {
        if (dependencies.length > 0) {
            ctx = gsap.context(() => {
                cb();
            });
        }
    });

    onUnmounted(() => {
        if (ctx) {
            ctx.revert();
        }
    });
}
