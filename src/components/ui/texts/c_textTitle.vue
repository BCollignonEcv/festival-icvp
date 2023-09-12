<template>
    <template v-if="_size === 5">
        <h5 class="c_title c_title-5"><slot></slot></h5>
    </template>
    <template v-else-if="_size === 4">
        <h4 class="c_title c_title-4"><slot></slot></h4>
    </template>
    <template v-else-if="_size === 3">
        <h3 class="c_title c_title-3"><slot></slot></h3>
    </template>
    <template v-else-if="_size === 2">
        <h2 class="c_title c_title-2"><slot></slot></h2>
    </template>
    <template v-else-if="_size === 1">
        <h1 class="c_title c_title-1"><slot></slot></h1>
    </template>
</template>

<script>
import { c_icon } from '@/components/ui/pictures/index'

export default {
    components: {
        c_icon
    },
    props: {
        _size: {
            type: Number,
            default: 5
        },
        _direction: {
            type: String,
        },
    },
}
</script>

<style lang="scss" scoped>
.c_title {
    position: relative;
    width: fit-content;
    text-transform: uppercase;
    padding-bottom: $m-7;
    color: $c-1-100;
    margin-bottom: $m-4;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%;
        height: 2px;
        background-color: $c-1-100;
    }

    &-1 {
        font-size: $fs-1;
    }

    &-2 {
        font-size: $fs-2;
    }

    &-3 {
        font-size: $fs-3;
    }

    &-4 {
        font-size: $fs-4;
    }

    &-5 {
        font-size: $fs-5;
    }

    &.tar {
        text-align: right;

        &::after {
            left: auto;
            right: 0;
        }
    }
}

.bg-terciary{
    .c_title {
        color: $c-w-100;
    }
}
</style>