<template>
    <div>
        <div id="loveEffect" ref="loveEffect">
            <ul ref="loveEffectUl">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const loveEffectUl = ref(null);
const loveEffect = ref(null);

const loveAnimation = () => {
    const loveLi = loveEffectUl.value.querySelectorAll('li');
    loveEffectUl.value.style.height = '100%';
    loveEffectUl.value.style.opacity = 0;
    loveLi.forEach((li) => { li.style.animation = 'love'; li.style.height = '100%'; });
    loveEffect.value.style.opacity = 0;
};

defineExpose({ loveAnimation });
</script>

<style scoped>
#loveEffect {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #232e6d;
    transition: 3s;
}

#loveEffect>ul {
    height: 40%;
    transition: 1.5s;
}

#loveEffect>ul>li {
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    margin-right: 10px;
    transition: height 1.25s, opacity 0.75s;
}

#loveEffect>ul>:nth-child(1) {
    background-color: #f62e74;
    animation: love1 4s infinite;
}

#loveEffect>ul>:nth-child(2) {
    background-color: #f45330;
    animation: love2 4s infinite;
    animation-delay: 0.15s;
}

#loveEffect>ul>:nth-child(3) {
    background-color: #ffc883;
    animation: love3 4s infinite;
    animation-delay: 0.3s;
}

#loveEffect>ul>:nth-child(4) {
    background-color: #30d268;
    animation: love4 4s infinite;
    animation-delay: 0.45s;
}

#loveEffect>ul>:nth-child(5) {
    background-color: #006cb4;
    animation: love5 4s infinite;
    animation-delay: 0.6s;
}

#loveEffect>ul>:nth-child(6) {
    background-color: #784697;
    animation: love4 4s infinite;
    animation-delay: 0.75s;
}

#loveEffect>ul>:nth-child(7) {
    background-color: #ffc883;
    animation: love3 4s infinite;
    animation-delay: 0.9s;
}

#loveEffect>ul>:nth-child(8) {
    background-color: #f45330;
    animation: love2 4s infinite;
    animation-delay: 1.05s;
}

#loveEffect>ul>:nth-child(9) {
    background-color: #f62e74;
    animation: love1 4s infinite;
    animation-delay: 1.2s;
}

@keyframes love1 {

    30%,
    50% {
        height: 60px;
        transform: translateY(-30px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love2 {

    30%,
    50% {
        height: 125px;
        transform: translateY(-62.5px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }

}

@keyframes love3 {

    30%,
    50% {
        height: 160px;
        transform: translateY(-75px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love4 {

    30%,
    50% {
        height: 180px;
        transform: translateY(-60px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}

@keyframes love5 {

    30%,
    50% {
        height: 190px;
        transform: translateY(-45px);
    }

    75%,
    100% {
        height: 20px;
        transform: translateY(0);
    }
}
</style>