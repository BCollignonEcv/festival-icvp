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
            default: 100
        },
    },
}
</script>

<style lang="scss" scoped>
    .c_section{
        padding: var(--header-size);

        &-100{
            height: 100vh;
        }
    }
</style>