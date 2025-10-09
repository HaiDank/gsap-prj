import { onBeforeUnmount, onMounted, ref } from "vue";

export function useIsMobile(breakpoint = 768) {
    const isMobile = ref(false);

    const check = () => {
        isMobile.value = window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    };

    onMounted(() => {
        check();
        window.addEventListener("resize", check);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("resize", check);
    });

    return isMobile.value;
}
