<template>
    <section :class="`c_section c_section-${_size}`">
        <slot></slot>
    </section>
</template>

<script>

export default {
    props: {
        _size: {
            type: Number,
            default: 0
        },
    },
}
</script>

<style lang="scss" scoped>

.c_section {
    padding: $m-2;

    &-100 {
        height: 100vh;
    }

    &-0 {
        height: auto;
    }
}
</style>