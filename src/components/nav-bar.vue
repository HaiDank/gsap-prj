<script setup lang="ts">
import gsap from "gsap";
import { onMounted, onUnmounted } from "vue";

import { navLinks } from "../constants";

let navTween: gsap.core.Timeline | undefined;

onMounted(() => {
    navTween = gsap.timeline({
        scrollTrigger: {
            trigger: "nav",
            start: "bottom top",
        },
    });

    navTween.fromTo("nav", {
        backgroundColor: "transparent",
    }, {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
    });
});

onUnmounted(() => {
    if (navTween) {
        navTween.revert();
    }
});
</script>

<template>
    <nav>
        <div>
            <a href="#home" class="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo">
                <p>Velvet Pour</p>
            </a>
            <ul>
                <li v-for="item in navLinks" :key="item.id">
                    <a :href="item.id">
                        {{ item.title }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
