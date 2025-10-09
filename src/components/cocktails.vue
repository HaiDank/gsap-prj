<script setup lang="ts">
import { cocktailLists } from "../constants";
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
        </div>
    </section>
</template>
