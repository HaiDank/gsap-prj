<!-- eslint-disable unicorn/filename-case -->
<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "./components/hero.vue";
import NavBar from "./components/nav-bar.vue";

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

<template>
    <main class=" h-[200vh]">
        <NavBar />
        <Hero />
    </main>
</template>
