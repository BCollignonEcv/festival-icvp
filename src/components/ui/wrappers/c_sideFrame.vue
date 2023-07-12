<template>
    <transition name="slide-fade">
        <div v-if="!isOpen" @click="toggleFrame" class="c_sideFrame-trigger">
            <slot name="icon"></slot>
        </div>
        <section v-else class="c_sideFrame bg-white" :class="{ 'left-side': from === 'left' }">
            <div class="c_sideFrame__header">
                <slot name="title"></slot>
                <c_icon :_name="'close'" @click="toggleFrame"></c_icon>
            </div>
            <div class="c_sideFrame__content">
                <slot name="content" @close="toggleFrame"></slot>
            </div>
        </section>
    </transition>
</template>

<script>
import { c_icon } from '@/components/ui/pictures/index'

export default {
    components: {
        c_icon
    },
    props: ['from'],
    setup() {},
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleFrame() {
            this.isOpen = !this.isOpen
        },
    }
}
</script>

<style lang="scss" scoped>
$frameWidth: 50vw;

.c_sideFrame-trigger {
    width: 100%;
    height: 100%;
}

.c_sideFrame {
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    width: $frameWidth;
    min-height: 100vh;
    background-color: $c-w-100;
    box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.8);

    .left {
        left: 0;
    }

    &__header {
        height: $hs;
        padding: 0 $m-4;
        font-weight: bold;
        display: flex;
        gap: $m-4;
        align-items: center;
        justify-content: space-between;

        img{
            cursor: pointer;
        }
    }

    &__content {
        padding: 0 $m-4;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>