<template>
    <!-- <a class="c_sponsor-item" :href="_sponsor.website" target="_blank"> -->
    <a class="c_sponsor-item" target="_blank">
        <figure class="c_sponsor-item--container">
            <img class="c_sponsor-item--logo" :src="`../..${baseUrl}assets/images/logo.png`" alt="" srcset="">
            <figcaption class="c_sponsor-item--labels">
                <h5 class="c_sponsor-item--title">{{ _sponsor.name }}</h5>
            </figcaption>
        </figure>
    </a>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL,
        };
    },
    props: {
        _sponsor: Object,
    },
    mounted() {

    },
    methods: {}
};
</script>
 
<style lang="scss" scoped>
.c_sponsor-item {
    flex: 1;
    min-width: 15vw;

    &--container {
        display: flex;
        gap: $m-6;
        flex-direction: column;
        align-items: center;
        width: fit-content;
    }

    &--logo {
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 100%;
        object-fit: contain;
        padding: 10px;
    }

    &--labels {
        & .c_sponsor-item--title {
            margin-top: $m-6;
            color: $c-w-100;
            text-transform: uppercase;
        }
    }
}
</style>