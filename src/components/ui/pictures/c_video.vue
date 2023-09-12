<template>
    <div class="c_video" :class="_size">
        <video controls>
            <source :src="`../..${baseUrl}assets/videos/teaser.mp4`" type="video/mp4">
            <!-- <source :src="`../..${baseUrl}assets/videos/${_name}.mp4`" type="video/mp4"> -->
            Votre navigateur ne prend pas en charge la vidéo.
        </video>
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
        }
    },
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL
        }
    },
    computed: {},
    methods: {},
    mounted() { }
}
</script>

<style lang="scss" scoped>
.c_video {
    position: relative;
    &.normal {
        max-height: 50vh;
    }

    &.xsmall {
        width: 5rem;
        height: auto;
    }

    &.small {}

    &.big {}

    &.huge {}

    video {
        border-radius: 1rem;
        max-height: 50vh;
    }
}
</style>