<template>
    <img :src="`../../assets/icons/${_name}.${_color}.png`" class="c_img" :class="_size" />
</template>

<script>
export default {
    props: {
        _size: {
            type: String,
            default: 'normal'
        },
        _name: {
            type: String,
            default: 'default',
            required: true
        },
        _color: {
            type: String,
            default: 'black'
        }
    },
    computed: {},
    methods: {},
    mounted() {}
}
</script>

<style lang="scss" scoped>
.c_icon {
    &.normal {
        width: 24px;
        height: 24px;
    }

    &.xsmall {
        width: 12px;
        height: 12px;
    }

    &.small {
        width: 16px;
        height: 16px;
    }

    &.big {
        width: 32px;
        height: 32px;
    }

    &.huge {
        width: 48px;
        height: 48px;
    }
}
</style>