<template>
    <div class="c_iconText" :class="{ 'reverse': _iconFirst !== true}">
        <c_icon :_name="_name" :_color="_color" :_size="_size"></c_icon>
        <slot></slot>
    </div>
</template>

<script>
import { c_icon } from '@/components/ui/pictures/index'

export default {
    components: {
        c_icon
    },
    props: {
        _name: String,
        _size: {
            type: String,
            default: 'small'
        },
        _color: String,
        _iconFirst: {
            type: Boolean,
            default: true
        },
    },
}
</script>

<style lang="scss" scoped>
.c_iconText {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: nowrap;

    &.reverse{
        flex-direction: row-reverse;
    }

    p.small{
        margin-top: .2rem;
        font-size: var(--fs-8);
        white-space: nowrap;
    }
}
</style>