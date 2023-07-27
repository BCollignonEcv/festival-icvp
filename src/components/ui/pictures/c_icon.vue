<template>
    <div class="c_icon">
        <img :src="`../..${baseUrl}assets/icons/${_name}.${_color}.svg`" :class="_size" />
        <template v-if="_overlayLabel">
            <p :class="`c_icon-label p-${_overlayPosition}`">{{ _overlayLabel }}</p>
        </template>
    </div>
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
        },
        _overlayLabel: {
            type: String,
        },
        _overlayPosition: {
            type: String,
        },
    },
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL,
        }
    },
    computed: {},
    methods: {},
    mounted() { }
}
</script>

<style lang="scss" scoped>
.c_icon {
    position: relative;

    img {
        &.xxsmall {
            width: .6rem;
            height: .6rem;
        }
        &.xsmall {
            width: $fs-5;
            height: $fs-5;
        }

        &.small {
            width: $fs-4;
            height: $fs-4;
        }

        &.normal {
            width: $fs-3;
            height: $fs-3;
        }


        &.big {
            width: $fs-2;
            height: $fs-2;
        }

        &.huge {
            width: $fs-1;
            height: $fs-1;
        }
    }

    .c_icon-label {
        display: none;
        position: absolute;
        right: 0;
        margin-right: 100%;
        margin-top: .2rem;
        transition: all 1s ease;
    }

    &:hover {
        .c_icon-label {
            display: inline;
            margin-right: 200%;
            transition: all 1s ease;
        }
    }
}
</style>