<script setup lang="ts">
import gsap from "gsap";
import { computed, ref } from "vue";

import { useGSAPContext } from "../composables/use-gsap-context";
import { sliderLists } from "../constants";

const currentIndex = ref(0);
const contentRef = ref();
const numberOfCocktails = sliderLists.length;

function goToSlide(index: number) {
    const newIndex = (index + numberOfCocktails) % numberOfCocktails;

    currentIndex.value = newIndex;
}

function getCocktailAt(indexOffset: number) {
    return sliderLists[(currentIndex.value + indexOffset + numberOfCocktails) % numberOfCocktails];
}

const currentCocktail = computed(() => getCocktailAt(0));
const prevCocktail = computed(() => getCocktailAt(-1));
const nextCocktail = computed(() => getCocktailAt(1));

useGSAPContext(() => {
    gsap.fromTo("#title", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
    });

    gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, {
        xPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
    });

    gsap.fromTo(".details h2", { opacity: 0, yPercent: 100 }, {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
    });

    gsap.fromTo(".details p", { opacity: 0, yPercent: 100 }, {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
    });
}, [currentIndex]);
</script>

<template>
    <section id="menu" aria-labelledby="menu-heading">
        <img
            id="m-left-leaf"
            src="/images/slider-left-leaf.png"
            alt="left-leaf"
        >
        <img
            id="m-right-leaf"
            src="/images/slider-right-leaf.png"
            alt="right-leaf"
        >

        <h2 id="menu-heading" class="sr-only">
            Cocktail Menu
        </h2>

        <nav class="cocktail-tabs" aria-label="Cocktail Navigation">
            <button
                v-for="(item, index) in sliderLists"
                :key="item.id"
                :class="index === currentIndex ? 'text-white border-white' : 'text-white/50 border-white/50'"
                @click="goToSlide(index)"
            >
                {{ item.name }}
            </button>
        </nav>
        <div class="content">
            <div class="arrows">
                <button class="text-left" @click="goToSlide(currentIndex - 1)">
                    <span>{{ prevCocktail?.name }}</span>
                    <img
                        src="/images/right-arrow.png"
                        alt="right-arrow"
                        aria-hidden="true"
                    >
                </button>

                <button class="text-left" @click="goToSlide(currentIndex + 1)">
                    <span>{{ nextCocktail?.name }}</span>
                    <img
                        src="/images/left-arrow.png"
                        alt="left-arrow"
                        aria-hidden="true"
                    >
                </button>
            </div>

            <div class="cocktail">
                <img
                    :src="currentCocktail?.image"
                    class="object-contain"
                >
            </div>

            <div class="recipe">
                <div ref="contentRef" class="info">
                    <p>
                        Recipe for:
                    </p>
                    <p id="title">
                        {{ currentCocktail?.name }}
                    </p>
                </div>
                <div class="details">
                    <h2>{{ currentCocktail?.title }}</h2>
                    <p>{{ currentCocktail?.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
