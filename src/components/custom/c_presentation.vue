<template lang="">
        <div :class="`c_presentation ${_color}`">
            <figure class="c_presentation-img">
                <img :src="`../..${baseUrl}assets/images/${_imgName}`" alt="" srcset="">
                <figcaption class="c_presentation-img--title">
                    <slot name="title"></slot>
                </figcaption>
            </figure>
            <aside :class="`c_presentation-aside as-${_asideSize}`" >
                <slot name="aside"></slot>
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
    props: {
        _imgName: {
            type: String,
            default: 'landing.jpg'
        },
        _asideSize: {
            type: Number,
        },
        _color: {
            type: String,
            default: 'primary'
        }
    }
}
</script>
<style lang="scss">
.c_presentation {
    height: 100%;
    width: 100%;
    position: relative;

    &.primary {
        .c_presentation-aside {
            background-color: $c-1-100;
        }
    }

    &.secondary {
        .c_presentation-aside {
            background-color: $c-2-100;
        }

        .c_presentation-img--title {
            background-color: $c-3-25;
        }
    }

    &.black {
        .c_presentation-aside {
            background-color: $c-3-25;
            color: white;

            h3,
            p {
                color: white;
            }
        }
    }

    &.white {
        .c_presentation-aside {
            background-color: $c-w-100;
        }
    }

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
                font-size: $fs-1;

                span {
                    font-size: $fs-1;
                }
            }

            h3 {
                font-size: $fs-huge;

                span {
                    font-size: $fs-huge;
                }
            }
        }

    }

    &-aside {
        position: absolute;
        top: $m-4;
        right: $m-4;
        height: calc(100% - $m-4 * 2);
        display: flex;
        flex-direction: column;

        &.as-20 {
            width: 20%;
            padding: $m-4;
        }

        &.as-30 {
            width: 30%;
            padding: $m-4;
        }

        &.as-40 {
            width: 40%;
            padding: $m-2;
        }

        &.as-50 {
            width: 50%;
            padding: $m-2;
        }

        h3 {
            text-transform: uppercase;
            margin-bottom: $m-4;
        }

        p {
            font-size: $fs-5;
            font-weight: normal;
        }
    }

    @media screen and (max-width: 768px) {

        &-img {

            &--title {
                position: unset;
                top: unset;
                left: unset;
                height: 100%;
                width: 100%;
                padding: $m-4 0;
            }
        }

        &-aside {
            position: relative;
            top: unset;
            right: unset;
            width: 100%;

            &.as-20 {
                width: 100%;
            }

            &.as-30 {
                width: 100%;
            }

            &.as-40 {
                width: 100%;
            }

            &.as-50 {
                width: 100%;
            }
        }
    }

}
</style>