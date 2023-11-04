<template>
  <div @click="backgroundMusic.play()">
    <ConfessionCard @dialogue=comeEnd v-if="opens"></ConfessionCard>
    <ConfessionOpens @destroyed=switchScenesOne v-if="enter"></ConfessionOpens>
    <ConfessionFailed v-if="fail" ref="failureAnimation"></ConfessionFailed>
    <ConfessionSuccess v-if="successAnimation"></ConfessionSuccess>
    <audio id="backgroundMusic" autoplay loop ref="backgroundMusic">
      <source :src="musicUrl" type="audio/mpeg">
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { clickEffect } from './components/JS/AnimatedEffects.js';
import ConfessionOpens from './components/ConfessionOpens.vue';
import ConfessionCard from './components/ConfessionCard.vue';
import ConfessionFailed from './components/ConfessionFailed.vue';
import ConfessionSuccess from './components/ConfessionSuccess.vue';
import startmusic from './assets/startmusic.mp3'
import transitionmusic from './assets/transitionmusic.mp3'


const opens = ref(false);
const enter = ref(true);
const backgroundMusic = ref(null);
const musicUrl = ref(startmusic);
const fail = ref(false);
const failureAnimation = ref(null);
const successAnimation = ref(false);

onMounted(() => { clickEffect(); }); // 点击页面特效

const switchScenesOne = (data) => {
  opens.value = !opens.value;
  setTimeout(() => { enter.value = data; }, 1000);
};

const comeEnd = (data) => {
  if (data) {
    musicUrl.value = transitionmusic;
    backgroundMusic.value.load();
    backgroundMusic.value.play();
    return setTimeout(() => { fail.value = data; }, 1000);
  };
  return setTimeout(() => {
    opens.value = false;
    successAnimation.value = !data;
  }, 1000);
};
</script>
