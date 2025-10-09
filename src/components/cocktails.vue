<script setup lang="ts">
import gsap from "gsap";

import { useGSAPContext } from "../composables/use-gsap-context";
import { cocktailLists, mockTailLists } from "../constants";

useGSAPContext(() => {
    const parallaxTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#cocktails",
            start: "top 30%",
            end: "bottom 80%",
            scrub: true,
        },
    });

    parallaxTl.from("#c-left-leaf", {
        x: -100,
        y: 100,
    }).from("#c-right-leaf", {
        x: 100,
        y: 100,
    });
});
</script>

<template>
    <section id="cocktails" class="noisy">
        <img
            id="c-left-leaf"
            src="/images/cocktail-left-leaf.png"
            alt="l-leaf"
        >
        <img
            id="c-right-leaf"
            src="/images/cocktail-right-leaf.png"
            alt="r-leaf"
        >

        <div class="list">
            <div class="popular">
                <h2>Most popular cocktails:</h2>
                <ul>
                    <li v-for="item in cocktailLists" :key="item.name">
                        <div class="md:me-28">
                            <h3>
                                {{ item.name }}
                            </h3>
                            <p>
                                {{ item.country }} | {{ item.detail }}
                            </p>
                            <span>- {{ item.price }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="loved">
                <h2>Most loved mocktails:</h2>

                <ul>
                    <li v-for="item in mockTailLists" :key="item.name">
                        <div class="me-28">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.country }} | {{ item.detail }}</p>
                        </div>
                        <span>- {{ item.price }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
