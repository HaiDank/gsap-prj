<script setup lang="ts">
import gsap from "gsap";
import { ref } from "vue";

import { useGSAPContext } from "../composables/use-gsap-context";
import { useIsMobile } from "../composables/use-is-mobile";

const videoRef = ref<HTMLVideoElement | null>(null);
const isMobile = useIsMobile();

useGSAPContext(() => {
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
