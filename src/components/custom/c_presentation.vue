<template lang="">
    <div class="c_presentation">
        <figure class="c_presentation-img">
            <img :src="`../..${baseUrl}assets/images/landing.jpg`" alt="" srcset="">
            <figcaption class="c_presentation-img--title">
                <h3>Paris la Défense</h3>
                <p>Un lieu <span class="c_hightlightText">Unique</span></p>
            </figcaption>
        </figure>
        <aside class="c_presentation-aside">
            <div class="c_presentation-aside--groupe">
                <p class="c_presentation-aside--fact">180 000</p>
                <p class="c_presentation-aside--unit">Salariés</p>
            </div>
            <div class="c_presentation-aside--groupe">
                <p class="c_presentation-aside--fact">70 000</p>
                <p class="c_presentation-aside--unit">Etudiants</p>
            </div>
            <div class="c_presentation-aside--groupe">
                <p class="c_presentation-aside--fact">50 000</p>
                <p class="c_presentation-aside--unit">Habitants</p>
            </div>
            <div class="c_presentation-aside--groupe">
                <p class="c_presentation-aside--fact">70</p>
                <p class="c_presentation-aside--unit">Oeuvres d'art</p>
            </div>
            <div class="c_presentation-aside--groupe">
                <p class="c_presentation-aside--fact">131</p>
                <p class="c_presentation-aside--unit">Ha végétalisés</p>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL
        }
    },
}
</script>
<style lang="scss">
.c_presentation {
    height: 100%;
    width: 100%;
    position: relative;

    &-img {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;

        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        &--title {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            padding: $m-1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            p {
                font-size: $fs-3;
            }

            h3 {
                font-size: $fs-1;
            }

            p,
            h3 {
                color: $c-w-100;
            }
        }

    }

    &-aside {
        position: absolute;
        top: 0;
        right: 0;
        background-color: $c-1-100;
        height: 100%;
        display: flex;
        flex-direction: column;

        & &--groupe:not(:first-of-type) {
            border-top: 1px solid $c-3-100;
        }

        & &--groupe {
            padding: 0 $m-2;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        & &--fact {
            font-size: $fs-1;
            margin-bottom: $m-8;
        }

        & &--unit {
            font-size: $fs-4;
        }
    }

}
</style>