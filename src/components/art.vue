<script setup lang="ts">
import gsap from "gsap";

import { useGSAPContext } from "../composables/use-gsap-context";
import { useIsMobile } from "../composables/use-is-mobile";
import { featureLists, goodLists } from "../constants";

const isMobile = useIsMobile();

useGSAPContext(() => {
    const start = isMobile ? "top 20%" : "top top";

    const artTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#art",
            start,
            end: "bottom center",
            scrub: 1.5,
            pin: true,
        },
    });

    artTimeline.to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
    }).to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
    }).to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
    });
});
</script>

<template>
    <div id="art">
        <div class="container mx-auto h-full pt-20">
            <h2 class="will-fade">
                The ART
            </h2>
            <div class="content">
                <ul class="space-y-4 will-fade">
                    <li v-for="(item, index) in goodLists" :key="index">
                        <img src="/images/check.png" alt="check">
                        <p>{{ item }}</p>
                    </li>
                </ul>
                <div class="cocktail-img">
                    <img
                        src="/images/under-img.jpg"
                        alt="cocktail"
                        class="abs-center masked-img size-full object-contain"
                    >
                </div>
                <ul class="space-y-4 will-fade">
                    <li v-for="(item, index) in featureLists" :key="index">
                        <img src="/images/check.png" alt="check">
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
            <div class="masked-container">
                <h2 class="will-fade">
                    Sip-Worthy Perfection
                </h2>
                <div id="masked-content">
                    <h3>
                        Made with Craft, Poured with Passion
                    </h3>
                    <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </div>
    </div>
</template>
