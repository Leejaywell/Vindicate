<template>
    <div id="ConfessionElf">
        <div style="width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 11;"></div>
        <div id="role">
            <input id="mimikyu" aria-label="Disguise is broken" class="mimikyu-control" type="checkbox" ref="mimikyu">
            <label for="mimikyu" class="mimikyu">
                <div class="mimikyu-head">
                    <div class="mimikyu-disguise-face">
                        <div class="mimikyu-disguise-eye mimikyu-disguise-eye-left mimikyu-disguise-line">
                            <div class="mimikyu-disguise-line"></div>
                        </div>
                        <div class="mimikyu-disguise-eye mimikyu-disguise-eye-right mimikyu-disguise-line">
                            <div class="mimikyu-disguise-line mimikyu-disguise-line-1"></div>
                            <div class="mimikyu-disguise-line mimikyu-disguise-line-2"></div>
                        </div>
                        <div class="mimikyu-disguise-blush mimikyu-disguise-blush-left mimikyu-disguise-line">
                            <div class="mimikyu-disguise-line"></div>
                        </div>
                        <div class="mimikyu-disguise-blush mimikyu-disguise-blush-right mimikyu-disguise-line">
                            <div class="mimikyu-disguise-line"></div>
                        </div>
                        <div class="mimikyu-disguise-mouth mimikyu-disguise-mouth-1">
                            <div class="mimikyu-disguise-mouth mimikyu-disguise-mouth-2">
                                <div class="mimikyu-disguise-mouth mimikyu-disguise-mouth-3">
                                    <div class="mimikyu-disguise-mouth mimikyu-disguise-mouth-4">
                                        <div class="mimikyu-disguise-mouth mimikyu-disguise-mouth-5">
                                            <div class="mimikyu-disguise-mouth mimikyu-disguise-mouth-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mimikyu-ear mimikyu-ear-left">
                        <div class="mimikyu-ear-tip"></div>
                        <div class="mimikyu-ear-top"></div>
                    </div>
                    <div class="mimikyu-ear mimikyu-ear-right">
                        <div class="mimikyu-ear-top"></div>
                    </div>
                </div>
                <div class="mimikyu-body">
                    <div class="mimikyu-face">
                        <div class="mimikyu-eye mimikyu-eye-left"></div>
                        <div class="mimikyu-eye mimikyu-eye-right"></div>
                    </div>
                    <div class="mimikyu-disguise-torso"></div>
                    <div class="mimikyu-disguise-tail">
                        <div class="mimikyu-disguise-tail-tip"></div>
                    </div>
                    <div class="mimikyu-disguise-frays">
                        <div class="mimikyu-disguise-fray mimikyu-disguise-fray-1"></div>
                        <div class="mimikyu-disguise-fray mimikyu-disguise-fray-2"></div>
                        <div class="mimikyu-disguise-fray mimikyu-disguise-fray-3"></div>
                        <div class="mimikyu-disguise-fray mimikyu-disguise-fray-4"></div>
                        <div class="mimikyu-disguise-fray mimikyu-disguise-fray-5"></div>
                        <div class="mimikyu-shadow-fray mimikyu-shadow-fray-1"></div>
                        <div class="mimikyu-shadow-fray mimikyu-shadow-fray-2"></div>
                        <div class="mimikyu-shadow-fray mimikyu-shadow-fray-3"></div>
                        <div class="mimikyu-shadow-fray mimikyu-shadow-fray-4"></div>
                    </div>
                    <div class="mimikyu-shadow-clip">
                        <div class="mimikyu-shadow-rotate">
                            <div class="mimikyu-shadow-fingers">
                                <div class="mimikyu-shadow-finger mimikyu-shadow-finger-1"></div>
                                <div class="mimikyu-shadow-finger mimikyu-shadow-finger-2"></div>
                                <div class="mimikyu-shadow-finger mimikyu-shadow-finger-3"></div>
                            </div>
                            <div class="mimikyu-shadow-claw-wrap">
                                <div class="mimikyu-shadow-claw"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mimikyu-shadow"></div>
                <div class="heart"></div>
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const mimikyu = ref(null);
const spriteStatus = () => { mimikyu.value.click(); };
defineExpose({ spriteStatus });
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#role {
    display: grid;
    place-items: center;
    font-size: 16px;
    line-height: 1;
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -10%);
    z-index: 10;
}

.mimikyu {
    position: relative;
    cursor: pointer;
}

.mimikyu-disguise-line::before,
.mimikyu-disguise-line::after {
    content: '';
}

.mimikyu-disguise-line,
.mimikyu-disguise-line::before,
.mimikyu-disguise-line::after {
    position: absolute;
    border: inherit;
    border-radius: inherit;
}

.mimikyu-disguise-eye {
    position: absolute;
    z-index: 3;
    bottom: 3.5rem;
    border-radius: 100%;
    border: 3px solid;
    color: #3b3737;
}

.mimikyu-disguise-eye::before {
    height: 90%;
    width: 90%;
    left: 5%;
}

.mimikyu-disguise-eye::after {
    height: 70%;
    width: 70%;
    left: 5%;
}

.mimikyu-disguise-eye-left {
    left: 2rem;
    height: 2.5rem;
    width: 2rem;
}

.mimikyu-disguise-eye-left .mimikyu-disguise-line {
    top: 10%;
    left: 20%;
    height: 70%;
    width: 70%;
}

.mimikyu-disguise-eye-left .mimikyu-disguise-line::before {
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
}

.mimikyu-disguise-eye-left .mimikyu-disguise-line::after {
    top: 10%;
    left: 10%;
    height: 40%;
    width: 40%;
}

.mimikyu-disguise-eye-right {
    right: 2rem;
    height: 3rem;
    width: 2.25rem;
}

.mimikyu-disguise-eye-right .mimikyu-disguise-line-1 {
    top: 10%;
    left: 20%;
    height: 85%;
    width: 80%;
}

.mimikyu-disguise-eye-right .mimikyu-disguise-line-1::before {
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
}

.mimikyu-disguise-eye-right .mimikyu-disguise-line-1::after {
    top: 0;
    left: -10%;
    height: 90%;
    width: 90%;
}

.mimikyu-disguise-eye-right .mimikyu-disguise-line-2 {
    top: 30%;
    left: 40%;
    height: 40%;
    width: 50%;
}

.mimikyu-disguise-eye-right .mimikyu-disguise-line-2::before {
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
}

.mimikyu-disguise-eye-right .mimikyu-disguise-line-2::after {
    top: 20%;
    left: 5%;
    height: 60%;
    width: 60%;
}

.mimikyu-disguise-blush {
    position: absolute;
    z-index: 1;
    bottom: 3.5rem;
    border-radius: 6px;
    border-top: 6px solid #d65a2d;
}

.mimikyu-disguise-blush-left {
    left: 1rem;
    width: 2rem;
    transform: rotate(5deg);
    transform: rotate(5deg);
}

.mimikyu-disguise-blush-left::before {
    top: -0.125rem;
    left: -0.25rem;
    width: 2.75rem;
    transform: rotate(-10deg);
    transform: rotate(-10deg);
}

.mimikyu-disguise-blush-left::after {
    top: 0.125rem;
    left: -0.25rem;
    width: 3rem;
}

.mimikyu-disguise-blush-left .mimikyu-disguise-line {
    top: 0.325rem;
    left: 0;
    width: 2.75rem;
    transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.mimikyu-disguise-blush-left .mimikyu-disguise-line::before {
    width: 2rem;
    top: -0.1875rem;
    left: 0.125rem;
    transform: rotate(12deg);
    transform: rotate(12deg);
}

.mimikyu-disguise-blush-left .mimikyu-disguise-line::after {
    width: 1.5rem;
    top: 0.0625rem;
    left: 0.5rem;
    transform: rotate(-5deg);
    transform: rotate(-5deg);
}

.mimikyu-disguise-blush-right {
    right: 1.5rem;
    width: 1.5rem;
    transform: rotate(-7deg);
    transform: rotate(-7deg);
}

.mimikyu-disguise-blush-right::before {
    top: -0.1875rem;
    width: 2rem;
    transform: rotate(10deg);
    transform: rotate(10deg);
}

.mimikyu-disguise-blush-right::after {
    top: 0.0625rem;
    left: -0.25rem;
    width: 2.25rem;
    transform: rotate(-5deg);
    transform: rotate(-5deg);
}

.mimikyu-disguise-blush-right .mimikyu-disguise-line {
    top: 0.325rem;
    left: -0.25rem;
    width: 2.75rem;
    transform: rotate(5deg);
    transform: rotate(5deg);
}

.mimikyu-disguise-blush-right .mimikyu-disguise-line::before {
    top: -0.125rem;
    left: 0.25rem;
    width: 2.5rem;
    transform: rotate(-10deg);
    transform: rotate(-10deg);
}

.mimikyu-disguise-blush-right .mimikyu-disguise-line::after {
    top: 0.125rem;
    left: 0.25rem;
    width: 1.75rem;
}

.mimikyu-disguise-mouth {
    position: absolute;
    height: 6px;
    border-radius: 3px / 50%;
    background-color: #3b3737;
}

.mimikyu-disguise-mouth-1,
.mimikyu-disguise-mouth-3,
.mimikyu-disguise-mouth-5 {
    transform-origin: left center;
    transform-origin: left center;
}

.mimikyu-disguise-mouth-3,
.mimikyu-disguise-mouth-5 {
    left: 3px;
}

.mimikyu-disguise-mouth-2,
.mimikyu-disguise-mouth-4,
.mimikyu-disguise-mouth-6 {
    right: 3px;
    transform-origin: right center;
    transform-origin: right center;
}

.mimikyu-disguise-mouth-1 {
    bottom: 3rem;
    left: 4rem;
    width: 1.5rem;
    transform: rotate(25deg);
    transform: rotate(25deg);
}

.mimikyu-disguise-mouth-1 * {
    bottom: -2px;
}

.mimikyu-disguise-mouth-2 {
    width: 1.25rem;
    transform: rotate(115deg);
    transform: rotate(115deg);
}

.mimikyu-disguise-mouth-3 {
    width: 1rem;
    transform: rotate(-100deg);
    transform: rotate(-100deg);
}

.mimikyu-disguise-mouth-4 {
    width: 1.125rem;
    transform: rotate(95deg);
    transform: rotate(95deg);
}

.mimikyu-disguise-mouth-5 {
    width: 1.375rem;
    transform: rotate(-105deg);
    transform: rotate(-105deg);
}

.mimikyu-disguise-mouth-6 {
    width: 1rem;
    transform: rotate(115deg);
    transform: rotate(115deg);
}

.mimikyu-disguise-face {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-right-radius: 50% 35%;
    border-bottom-left-radius: 50% 35%;
    z-index: 5;
    background-color: #e8deac;
    ;
}

.mimikyu-disguise-torso {
    z-index: 3;
    transform: translate3d(0px, 0px, 0px);
}

.mimikyu-disguise-torso,
.mimikyu-disguise-torso::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.mimikyu-disguise-torso::before {
    border-top-left-radius: 30% 70%;
    border-top-right-radius: 30% 70%;
    border-bottom-right-radius: 50% 20%;
    border-bottom-left-radius: 50% 20%;
    content: '';
    transform: perspective(1rem) rotateX(3deg);
    transform: perspective(1rem) rotateX(3deg);
    background-color: #e8deac;
    ;
}

.mimikyu-disguise-torso::after {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 15%;
    width: 70%;
    height: 3rem;
    transform-origin: 100% center;
    transform-origin: 100% center;
    transform: var(--torso-shadow-transform, scale(1, 1)) translate3d(0px, 0px, 10px);
    transform: var(--torso-shadow-transform, scale(1, 1)) translate3d(0px, 0px, 10px);
    border-radius: 100%;
    background-color: #ddce84;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s, transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
}

.mimikyu-disguise-tail {
    z-index: -1;
    bottom: 1rem;
    right: 0.25rem;
    height: 3rem;
    width: 1rem;
    transform-origin: center bottom;
    transform-origin: center bottom;
    transform: rotate(var(--tail-rotate, 25deg));
    transform: rotate(var(--tail-rotate, 25deg));
    transition: 0.3s 0.4s ease-in-out;
    transition: 0.3s 0.4s ease-in-out;
}

.mimikyu-disguise-tail,
.mimikyu-disguise-tail::before,
.mimikyu-disguise-tail-tip {
    position: absolute;
    border-radius: 0.25rem;
    background-color: #7a6754;
}

.mimikyu-disguise-tail::before,
.mimikyu-disguise-tail-tip {
    border-bottom-left-radius: 0;
}

.mimikyu-disguise-tail::before {
    content: '';
    bottom: calc(100% - 1rem);
    left: 1rem;
    height: 2.5rem;
    width: 1.5rem;
    border-top-right-radius: 0;
}

.mimikyu-disguise-tail-tip {
    bottom: calc(100% - 2.5rem + 2.5rem);
    left: 2.5rem;
    height: 3.5rem;
    width: 2rem;
}

.mimikyu-disguise-tail-tip::before {
    content: '';
    position: absolute;
    top: -0.25rem;
    left: 0;
    width: 100%;
    height: 0.5rem;
    border-radius: 100%;
    background-color: var(--tail-color-tint);
}

.mimikyu-disguise-fray {
    position: absolute;
    z-index: 2;
    border-radius: 0.5rem;
    background-color: #e8deac;
    ;
}

.mimikyu-disguise-fray-1 {
    top: -2rem;
    left: 0;
    height: 3rem;
    width: 3rem;
    transform: skew(-10deg, -10deg) rotate(10deg);
    transform: skew(-10deg, -10deg) rotate(10deg);
}

.mimikyu-disguise-fray-2 {
    top: -1.325rem;
    left: 1.5rem;
    height: 3rem;
    width: 3rem;
    transform: skew(-20deg, -10deg) rotate(-15deg);
    transform: skew(-20deg, -10deg) rotate(-15deg);
}

.mimikyu-disguise-fray-3 {
    top: -0.75rem;
    left: 3.75rem;
    height: 2.5rem;
    width: 2.5rem;
    transform: skew(-10deg, -10deg) rotate(-45deg);
    transform: skew(-10deg, -10deg) rotate(-45deg);
}

.mimikyu-disguise-fray-4 {
    top: -1.75rem;
    right: 0.5rem;
    height: 3rem;
    width: 3rem;
    transform: skew(10deg, 20deg) rotate(-10deg);
    transform: skew(10deg, 20deg) rotate(-10deg);
}

.mimikyu-disguise-fray-5 {
    right: -0.25rem;
    top: -2rem;
    height: 2.5rem;
    width: 2.5rem;
    transform: skew(5deg, 30deg) rotate(-30deg);
    transform: skew(5deg, 30deg) rotate(-30deg);
}

.mimikyu-disguise-frays {
    position: absolute;
    top: calc(100% - 0.75rem);
    left: -5%;
    width: 110%;
}

.mimikyu-shadow-fray {
    position: absolute;
    z-index: -1;
    height: 2rem;
    width: 2rem;
    border-radius: 0.5rem;
    background-color: #3b3737;
}

.mimikyu-shadow-fray-1 {
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    transform: skew(-15deg, -15deg) rotate(5deg);
    transform: skew(-15deg, -15deg) rotate(5deg);
}

.mimikyu-shadow-fray-2 {
    top: 0.75rem;
    left: 2.5rem;
    transform: skew(-5deg, -15deg) rotate(-20deg);
    transform: skew(-5deg, -15deg) rotate(-20deg);
}

/* hover */
.mimikyu-shadow-fray-3 {
    top: 0.25rem;
    left: 4.75rem;
    transform: skew(5deg, 20deg);
    transform: skew(5deg, 20deg);
}

.mimikyu-shadow-fray-4 {
    top: -0.5rem;
    right: -0.5rem;
    transform: skew(20deg, 20deg) rotate(-20deg);
    transform: skew(20deg, 20deg) rotate(-20deg);
}

.mimikyu-shadow-finger {
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
    border-bottom-right-radius: 50% 20%;
    border-bottom-left-radius: 50% 20%;
    position: absolute;
    top: 0;
    height: 100%;
    width: 32%;
    background-color: #3b3737;
}

.mimikyu-shadow-finger-1 {
    left: 0;
}

.mimikyu-shadow-finger-2 {
    top: -0.25rem;
    left: 33%;
}

.mimikyu-shadow-finger-3 {
    right: 0;
}

.mimikyu-shadow-fingers {
    position: absolute;
    left: 1px;
    bottom: calc(100% - 2.25rem);
    width: 2rem;
    height: 2rem;
}

.mimikyu-shadow-claw {
    position: absolute;
    top: -50%;
    left: 2rem;
    height: 6rem;
    width: 6rem;
    border-radius: 100%;
    box-shadow: -1rem 1rem 0 1rem #3b3737;
}

.mimikyu-shadow-claw-wrap {
    position: absolute;
    top: 1.25rem;
    left: 0;
    height: 6rem;
    width: 100%;
    overflow: hidden;
}

.mimikyu-shadow-rotate {
    height: inherit;
    width: inherit;
    transform-origin: center center;
    transform-origin: center center;
    transform: rotate(var(--shadow-claw-wrap-rotate, -180deg));
    transform: rotate(var(--shadow-claw-wrap-rotate, -180deg));
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out, transform 0.2s ease-out;
}

.mimikyu-shadow-clip {
    position: absolute;
    top: calc(100% - 2.5rem);
    right: 4rem;
    height: 6.5rem;
    width: var(--shadow-claw-width, 3rem);
    transform: var(--shadow-claw-transform, translate(1rem, -4rem));
    transform: var(--shadow-claw-transform, translate(1rem, -4rem));
    overflow: hidden;
    transition: 0.5s ease-out;
    visibility: var(--shadow-claw-visibility, hidden);
}

.mimikyu-ear {
    position: absolute;
    z-index: 1;
    bottom: calc(100% - 3rem);
    width: 2.75rem;
    transform-origin: center bottom;
    transform-origin: center bottom;
    border-top-left-radius: 1.375rem;
    border-top-right-radius: 1.375rem;
    background-color: #ddce84;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s, transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
}

.mimikyu-ear-tip {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    overflow: hidden;
}

.mimikyu-ear-tip,
.mimikyu-ear-tip::before,
.mimikyu-ear-tip::after {
    position: absolute;
    top: 0;
}

.mimikyu-ear-tip::before,
.mimikyu-ear-tip::after {
    content: '';
    background-color: #3b3737;
    width: 120%;
}

.mimikyu-ear-tip::before {
    left: -20%;
    height: 2rem;
    transform: rotate(-15deg);
    transform: rotate(-15deg);
}

.mimikyu-ear-tip::after {
    left: 20%;
    height: 1.75rem;
    transform: rotate(35deg);
    transform: rotate(35deg);
}

.mimikyu-ear-top {
    position: absolute;
    background-color: inherit;
}

.mimikyu-ear-left {
    left: 1.75rem;
    height: 6rem;
    transform: rotate(var(--ear-left-rotate, -15deg));
    transform: rotate(var(--ear-left-rotate, -15deg));
    transition-delay: 0.15s;
    transition-delay: 0.15s;
}

.mimikyu-ear-left .mimikyu-ear-top {
    border-top-left-radius: 50% 70%;
    border-top-right-radius: 50% 70%;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    left: 0.5rem;
    bottom: calc(100% - 1rem);
    height: 3.5rem;
    width: calc(100% - 0.5rem);
    transform-origin: bottom right;
    transform-origin: bottom right;
    transform: rotate(-20deg);
    transform: rotate(-20deg);
    background-color: #3b3737;
}

.mimikyu-ear-right {
    right: 1.75rem;
    height: 5.5rem;
    transform: rotate(var(--ear-right-rotate, 70deg));
    transform: rotate(var(--ear-right-rotate, 70deg));
    transition-delay: 0.1s;
    transition-delay: 0.1s;
}

.mimikyu-ear-right .mimikyu-ear-top {
    border-top-left-radius: 50% 70%;
    border-top-right-radius: 50% 70%;
    border-bottom-right-radius: 1.375rem;
    border-bottom-left-radius: 1.375rem;
    bottom: calc(100% - 2.5rem);
    height: 5rem;
    width: 100%;
    transform: rotate(var(--ear-right-tip-rotate, 50deg));
    transform: rotate(var(--ear-right-tip-rotate, 50deg));
    transform-origin: 50% calc(5rem - 1.375rem);
    transform-origin: 50% calc(5rem - 1.375rem);
    overflow: hidden;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s, transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
}

.mimikyu-ear-right .mimikyu-ear-top::before,
.mimikyu-ear-right .mimikyu-ear-top::after {
    content: '';
    position: absolute;
    top: 0;
    background-color: #3b3737;
}

.mimikyu-ear-right .mimikyu-ear-top::before {
    left: -15%;
    height: 2.75rem;
    width: 130%;
    transform: rotate(-15deg);
    transform: rotate(-15deg);
}

.mimikyu-ear-right .mimikyu-ear-top::after {
    left: -50%;
    height: 2.5rem;
    width: 200%;
    transform: rotate(-40deg);
    transform: rotate(-40deg);
}

.mimikyu-head {
    position: relative;
    z-index: 10;
    height: 11rem;
    width: 12.5rem;
    transform-origin: center 90%;
    transform-origin: center 90%;
    transform: rotate(var(--head-rotate, 0deg));
    transform: rotate(var(--head-rotate, 0deg));
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
    transition: transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s, transform 0.6s cubic-bezier(1, -0.6, 0.81, 1.41), height 1s;
}

.mimikyu-eye {
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-right-radius: 50% 30%;
    border-bottom-left-radius: 50% 30%;
    position: absolute;
    z-index: 5;
    top: 2.5rem;
    height: 1.5rem;
    width: 0.5rem;
    transform-origin: center 70%;
    transform-origin: center 70%;
    background-color: #3b3737;
    animation: blinky 7s infinite;
    animation: blinky 7s infinite;
}

.mimikyu-eye-left {
    left: 2.325rem;
}

.mimikyu-eye-right {
    right: 2.325rem;
}

.mimikyu-body {
    position: relative;
    z-index: 9;
    top: -1.5rem;
    left: calc(50% - 3.5rem);
    height: 5.5rem;
    width: 7rem;
    perspective: 1000px;
    perspective: 1000px;
}

.mimikyu-shadow {
    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    width: 80%;
    height: 1.5rem;
    transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 100%;
    background-color: #3b3737;
    opacity: 0.4;
}

.mimikyu-control {
    position: absolute;
    opacity: 0;
}

.mimikyu-control:checked+.mimikyu {
    --head-rotate: 55deg;
    --torso-shadow-transform: scale(0.9, 2.1) rotate(12deg) translate(30px, 5px);
    --ear-left-rotate: 50deg;
    --ear-right-rotate: 100deg;
    --ear-right-tip-rotate: 10deg;
    --tail-rotate: 50deg;
}

.heart {
    position: absolute;
    top: 7rem;
    left: -3rem;
    height: 2rem;
    width: 2rem;
    transform: rotate(-30deg) scale(var(--heart-scale, 0));
    transform: rotate(-30deg) scale(var(--heart-scale, 0));
    transition: var(--heart-transition, 0.2s ease-in-out);
    transition: var(--heart-transition, 0.2s ease-in-out);
}

.heart::before,
.heart::after {
    border-top-left-radius: 50% 25%;
    border-top-right-radius: 50% 25%;
    border-bottom-right-radius: 50% 75%;
    border-bottom-left-radius: 50% 75%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    transform-origin: center bottom;
    transform-origin: center bottom;
    background-color: #d65a2d;
}

.heart::before {
    transform: rotate(-20deg);
    transform: rotate(-20deg);
}

.heart::after {
    transform: rotate(20deg);
    transform: rotate(20deg);
}

@keyframes blinky {

    0%,
    9%,
    11%,
    19%,
    21%,
    69%,
    71%,
    100% {
        transform: scaleY(1);
        transform: scaleY(1);
    }

    10%,
    20%,
    70% {
        transform: scaleY(0);
        transform: scaleY(0);
    }
}

@keyframes blinky {

    0%,
    9%,
    11%,
    19%,
    21%,
    69%,
    71%,
    100% {
        transform: scaleY(1);
        transform: scaleY(1);
    }

    10%,
    20%,
    70% {
        transform: scaleY(0);
        transform: scaleY(0);
    }
}

.mimikyu-control:not(:checked)+.mimikyu {
    --shadow-claw-width: 9rem;
    --shadow-claw-transform: translate(0, 0) rotate(20deg);
    --shadow-claw-wrap-rotate: 0deg;
    --shadow-claw-visibility: visible;
    --shadow-claw-transition: 0.35s 0.5s ease-out;
    --heart-scale: 1;
    --heart-transition: 0.4s 0.9s ease-in-out;
}
</style>