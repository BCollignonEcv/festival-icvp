<template>
    <figure class="c_sponsor-item">
        <img class="c_sponsor-item--img" :src="`../..${baseUrl}assets/images/${_sponsor.imgPath}`" alt="" srcset="">
        <figcaption class="c_sponsor-item--content">
            <h5 class="c_sponsor-item--title">{{ _sponsor.name }}</h5>
            <p v-for="description in _sponsor.descriptions" class="c_sponsor-item--description">{{ description }}</p>
            <a v-if="_sponsor.website" class="c_sponsor-item--action" :href="_sponsor.website" target="_blank">En savoir
                +</a>
        </figcaption>
    </figure>
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
    display: flex;
    gap: $m-4;
    flex-direction: row;
    align-items: center;
    max-width: 33vw;

    &--img {
        width: 150px;
        height: 150px;
        background-color: white;
        object-fit: contain;
        padding: 10px;
    }

    &--content {
        display: flex;
        flex-direction: column;
        gap: $m-6;
        height: 100%;

        * {
            color: $c-w-100;
        }
    }

    &--title {
        text-transform: uppercase;
        color: $c-4-100;
    }

    &--description {
        text-align: justify;
        font-weight: lighter;
        color: $c-4-100;
    }

    &--action {
        margin-top: auto;
        color: $c-1-100;
    }

    @media screen and (max-width: 768px) {
        max-width: 100vw;

        &--img {
            width: 150px;
            height: 150px;
            background-color: white;
            object-fit: contain;
            padding: 10px;
        }

        &--content {
            display: flex;
            flex-direction: column;
            gap: $m-6;
            height: 100%;
        }

        &--title {

        }

        &--description {

        }

        &--action {

        }
    }
}
</style>