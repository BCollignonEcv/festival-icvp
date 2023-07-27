<template>
    <section :class="`c_section c_section-${_size} c_section-${_type}`">
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
        _type: {
            type: String,
            default: 'unset'
        },
    },
}
</script>

<style lang="scss" scoped>

.c_section {

    &-100 {
        height: 100vh;
    }

    &-0 {
        height: auto;
    }

    &-full{
        padding: $m-4;
    }

    &-unset{
        padding: $m-2;
    }

    &-text{
        padding: $m-2 calc($m-2*2);
    }
}
</style>