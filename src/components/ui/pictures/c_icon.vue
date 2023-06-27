<template>
    <img :src="`../..${baseUrl}assets/icons/${_name}.${_color}.svg`" class="c_icon" :class="_size" />
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
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL
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
        width: var(--fs-4);
        height: var(--fs-4);
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