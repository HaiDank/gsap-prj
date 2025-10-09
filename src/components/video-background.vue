<script setup lang="ts">
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";

import { useIsMobile } from "../composables/use-is-mobile";

const videoRef = ref<HTMLVideoElement | null>(null);
const isMobile = useIsMobile();

let ctx: gsap.Context | null = null;

onMounted(() => {
    ctx = gsap.context(() => {
        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });
        videoRef.value!.onloadedmetadata = () => {
            videoTimeline.to(videoRef.value, {
                currentTime: videoRef.value!.duration,
            });
        };
    });
});

onUnmounted(() => {
    if (ctx) {
        ctx.revert();
    }
});
</script>

<template>
    <div class="video">
        <video
            ref="videoRef"
            muted
            src="/videos/output.mp4"
            :playsinline="true"
            preload="auto"
        />
    </div>
</template>
