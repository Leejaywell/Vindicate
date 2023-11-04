<template>
    <div class="ConfessionSuccess">
        <div id="canvas-wrapper" aria-label="你好"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import '../../public/three.min.js';
import '../../public/TweenMax.min.js';
import { threes } from '../../public/script.js';
onMounted(() => { threes() })
</script>

<style scoped>
.ConfessionSuccess {
    height: 100vh;
    background-color: #4DD0E1;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    z-index: 50;
}
</style>