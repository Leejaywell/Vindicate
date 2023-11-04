<template>
    <div>
        <ConfessionLoveanimation ref="loveAnimation"></ConfessionLoveanimation>
        <div id="confessionLetter" ref="confessionLetter">
            <div class="heal"></div>
            <div class="switch" ref="transitions"></div>
            <div class="heart" @click.once="openingAnimation"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ConfessionLoveanimation from "./Animation/ConfessionLoveanimation.vue";

const confessionLetter = ref(null);
const transitions = ref(null);
const loveAnimation = ref(null);
const emit = defineEmits('destroyed');

const openingAnimation = () => {
    transitions.value.style.width = `${(window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) * 2}px`;
    confessionLetter.value.style.opacity = 0;
    loveAnimation.value.loveAnimation();
    setTimeout(() => { emit('destroyed', false); }, 500);
};
</script>

<style scoped>
#confessionLetter {
    width: 500px;
    height: auto;
    max-width: 80%;
    aspect-ratio: 3/2;
    background-color: rgb(247 241 229);
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    transition: opacity 2.5s ease-in-out;
    animation: confessionLetterFloating 4s infinite ease-in-out;
    z-index: 1;
}

@keyframes confessionLetterFloating {
    0% {
        transform: translate(-50%, -50%) translateY(0);
    }

    50% {
        transform: translate(-50%, -50%) translateY(-20px);
    }

    100% {
        transform: translate(-50%, -50%) translateY(0);
    }
}

#confessionLetter>.heal {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #f5d8b7;
    clip-path: polygon(0 2.5%, 50% 50%, 102.5% 0, 0 0);
    border-radius: 15px;
}

#confessionLetter>.switch {
    width: 0%;
    height: auto;
    aspect-ratio: 1/1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: width 2s;
    border-radius: 100%;
    background: pink;
    cursor: pointer;
}

#confessionLetter>.heart {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    background-color: pink;
    transform: rotate(45deg);
}

#confessionLetter>.heart::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: pink;
    left: -20px;
}

#confessionLetter>.heart::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: pink;
    top: -20px;
}
</style>