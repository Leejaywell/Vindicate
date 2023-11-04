<template>
    <div>
        <div id="confessionCard" ref="confessionCard">
            <div class="front">
                <p ref="confessionCardP">{{ text }}</p>
            </div>
            <div class="back">
                <h4>这是一个小彩蛋</h4>
                <img src="../assets/paintedEggshell.png" @click.once="dialogueAnimations.conversationalInteraction()">
            </div>
        </div>
        <ConfessionInteraction v-if="opening" ref="dialogueAnimations" @endConversation="comeEnd"></ConfessionInteraction>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { typeWriterModule } from './JS/FunctionalModules.js';
import ConfessionInteraction from './ConfessionInteraction.vue';
import { startAnimation, stopAnimation } from './JS/AnimatedEffects.js';

const confessionCard = ref(null);
const text = ref('');
const confessionCardP = ref(null);
const emit = defineEmits('dialogue');
const opening = ref(true);
const dialogueAnimations = ref(null);

startAnimation();

const confessionCardAnimation = () => {
    confessionCard.value.style.width = '480px';
    confessionCardP.value.style.padding = '20px';
    const confessionContent = '思绪如潮难成眠，心中想你念不断。今日终于鼓起勇，表白真情在心间。时光匆匆转眼逝，你我生命之奇迹。愿共度美好光阴，相伴永远不分离。————阿Q';
    typeWriterModule(confessionContent, text);
};

const comeEnd = (data) => {
    setTimeout(() => { stopAnimation(); opening.value = false; }, 1000);
    if (data) {
        text.value = '';
        confessionCard.value.style.width = '0';
        return emit('dialogue', true);
    };
    emit('dialogue', false);
};

onMounted(() => { setTimeout(() => { confessionCardAnimation(); }, 100) });
</script>

<style scoped>
#confessionCard {
    width: 0;
    height: auto;
    max-width: 80%;
    aspect-ratio: 3/2;
    transition: 2s;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, 0%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    font-size: 20px;
    font-family: kaiti;
    background-color: rgb(0 0 0 / 0%);
    perspective: 1000px;
}

#confessionCard:hover .front {
    transform: rotateY(-180deg);
}

#confessionCard:hover .back {
    transform: rotateY(0deg);
}

#confessionCard>.front,
#confessionCard>.back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    backface-visibility: hidden;
    transition: transform 1s;
}

#confessionCard>.front {
    transform: rotateY(0deg);
    background-color: #97a6ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

#confessionCard>.back {
    transform: rotateY(180deg);
    background-color: #89c9ce;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#confessionCard>.back>h4 {
    flex: 1;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}

#confessionCard>.back>img {
    height: 80%;
}
</style>