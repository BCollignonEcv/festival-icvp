<template>
    <img :src="`../..${baseUrl}assets/images/${_name}.png`" class="c_img" :class="_size" />
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
    &.normal {}

    &.xsmall {}

    &.small {}

    &.big {}

    &.huge {}
}
</style>