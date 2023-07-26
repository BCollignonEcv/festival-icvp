<template>
    <c_section :_size="100" _type="full" class="c_team">
        <figure class="c_team-item" v-for="member in _members">
            <img :src="`../..${baseUrl}assets/images/${member.imgPath}`" alt="" srcset="">
            <figcaption>
                <p class="c_team-item--description">{{ member.description }}</p>
                <div class="c_flexContainer">
                    <p class="c_team-item--name">{{ member.name }}</p>
                    <c_icon _name="linkedin" _color="orange"></c_icon>
                </div>
            </figcaption>
        </figure>
        <div class="c_team-item c_team-item-title">
            <h2>L'equipe</h2>
        </div>
    </c_section>
</template>

<script>
import { c_section } from '@/components/ui/wrappers/index';
import { c_icon } from '@/components/ui/pictures/index'

export default {
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL
        }
    },
    props: {
        _members: Object
    },
    components: {
        c_section,
        c_icon
    },
    mounted() {
    },
    methods: {
    }
};
</script>
 
<style scoped lang="scss">
.c_team {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    &-item {
        width: 25%;
        height: 50%;
        position: relative;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        figcaption {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #1818188e;
            padding: $m-4;
            display: flex;
            flex-direction: column-reverse;
            gap: $m-8;

            p {
                color: $c-w-100;
            }

            .c_team-item--name {
                font-size: $fs-3;
            }

            .c_team-item--description {

            }
        }
    }

    // &-item-title{
    //     height: 100%;
    // }
}
</style>