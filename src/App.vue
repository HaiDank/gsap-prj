<!-- eslint-disable unicorn/filename-case -->
<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import About from "./components/about.vue";
import Cocktails from "./components/cocktails.vue";
import Hero from "./components/hero.vue";
import NavBar from "./components/nav-bar.vue";
import VideoBackground from "./components/video-background.vue";

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

<template>
    <main>
        <VideoBackground />
        <NavBar />
        <Hero />
        <Cocktails />
        <About />
    </main>
</template>
