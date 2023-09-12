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

    &-90 {
        height: 90vh;
    }

    &-0 {
        height: auto;
    }

    &-full {
        padding: 0 $m-4;
    }

    &-unset {
        padding: $m-2;
    }

    &-text {
        padding: $m-2 calc($m-2*2);
    }

    @media screen and (max-width: 768px) {
        &-100 {
            height: auto;
        }

        &-90 {
            height: auto;
        }

        &-0 {}

        &-full {
            padding: 0 $m-5;
        }

        &-unset {
            padding: $m-5;
        }

        &-text {
            padding: $m-4 ;
        }
    }
}
</style>