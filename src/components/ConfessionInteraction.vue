<template>
    <div>
        <div id="infobox" ref="infobox">
            <div class="content">{{ content }}</div>
            <div class="confirm" ref="confirm">
                <a :style="{ padding: paddingA, opacity: opacityA }" @click="refuse()">{{ text1 }}</a>
                <a :style="{ padding: paddingA, opacity: opacityA }" @click="agree()">{{ text2 }}</a>
            </div>
        </div>
        <div id="masks" ref="masks"></div>
        <ConfessionElf v-if="elfDisplay" ref="genie"></ConfessionElf>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { typeWriterModule } from './JS/FunctionalModules.js';
import ConfessionElf from './SpecialEffect/ConfessionElf.vue';

const htmlSize = document.querySelector('html');
const masks = ref(null);
const infobox = ref(null);
const content = ref('');
const confirm = ref(null);
const paddingA = ref('');
const opacityA = ref('');
const elfDisplay = ref(false);
const genie = ref(null);
const state = ref(true);
const questionsAnswered = ref({
    issue1: '阿Q：你觉得这个效果怎么样！',
    issue2: '阿Q：(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )真的吗？这样说阿Q会伤心的！',
    issue3: '阿Q：(*＞◡❛)哇！我们的想法居然一样耶！',
    issue4: '阿Q：( ´◔︎ ‸◔︎`)那阿Q下次继续努力吧！',
    issue5: '阿Q：(*＞◡❛)哇，阿Q也觉得很棒耶！',
    reply1: '不行',
    reply2: '可以',
    reply3: '我再想想',
    reply4: '确实不行',
    reply5: '感觉不对',
    reply6: '真的很棒',
    reply7: null,
});
const text1 = ref('不行');
const text2 = ref('可以');
const emit = defineEmits('endConversation');

const conversationalInteraction = () => {
    masks.value.style.display = 'block';
    masks.value.style.opacity = '0.7';
    infobox.value.style.width = '250px';
    typeWriterModule(questionsAnswered.value.issue1, content);
    confirm.value.style.display = 'flex';
    elfDisplay.value = !elfDisplay.value;
    setTimeout(() => {
        paddingA.value = '10px 10px';
        opacityA.value = '1';
        htmlSize.style.fontSize = '8px';
    }, 500);
};

const refuse = () => {
    const { reply1, reply2, reply3, reply4, issue1, issue2 } = questionsAnswered.value;
    if (state.value) { genie.value.spriteStatus(); state.value = false; };
    if (text1.value == reply3) {
        text1.value = reply1;
        text2.value = reply2;
        return typeWriterModule(issue1, content);
    }
    typeWriterModule(issue2, content);
    text1.value = reply3;
    text2.value = reply4;
};

const agree = () => {
    const { reply4, reply5, reply6, issue3, issue4, issue5 } = questionsAnswered.value;
    if (!state.value) { genie.value.spriteStatus(); state.value = true; };
    if (text2.value == reply4) { typeWriterModule(issue4, content); questionsAnswered.value.reply7 = true; }
    else if (text2.value == reply6) { typeWriterModule(issue5, content); }
    if (text2.value == reply4 || text2.value == reply6) {
        confirm.value.style.display = 'none';
        return setTimeout(() => {
            content.value = '';
            infobox.value.style.width = '0px';
            htmlSize.style.fontSize = '0px';
            emit('endConversation', questionsAnswered.value.reply7);
        }, 5000)
    };
    typeWriterModule(issue3, content);
    text1.value = reply5;
    text2.value = reply6;
};

defineExpose({ conversationalInteraction });
</script>

<style scoped>
#masks {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: black;
    opacity: 0;
    transition: 0.5s;
    z-index: 10;
}

#infobox {
    width: 0px;
    height: auto;
    max-width: 80%;
    aspect-ratio: 3/2;
    background-color: rgb(146 166 240);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 25px;
    font-family: kaiti;
    color: white;
    transition: 1s;
}

#infobox>.content {
    padding: 20px 15px 20px 15px;
}

#infobox>.confirm {
    display: none;
    justify-content: space-between;
    padding: 0 20px 20px 20px;
}

#infobox>.confirm>a {
    background-color: #f0f0f0;
    color: #23a6e4;
    border: none;
    font-size: 18px;
    border-radius: 8px;
    box-shadow: -3px -3px 7px rgba(0, 0, 0, 0.2), 3px 3px 7px rgba(255, 255, 255, 0.7);
    opacity: 0;
    transition: 1s;
}
</style>