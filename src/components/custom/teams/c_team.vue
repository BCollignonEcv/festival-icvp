<template>
    <c_section :_size="100" _type="full" class="c_team">
        <figure class="c_team-item" v-for="member in _members">
            <img :src="`../..${baseUrl}assets/images/${member.imgPath}`" alt="" srcset="">
            <figcaption>
                <div class="c_flexContainer c_flexContainer-text">
                    <div>
                        <p class="c_team-item--name">{{ member.name }}</p>
                        <p class="c_team-item--description">
                            <span class="c_team-item--descriptionLine" v-for="line in member.description">
                                <c_textIcon _name="round" _size="xxsmall" _color="orange">
                                    {{ line }}
                                </c_textIcon>
                            </span>
                        </p>
                    </div>
                    <a :href="member.linkedin" target="_blank">
                        <c_icon _name="linkedin" _color="orange"></c_icon>
                    </a>
                </div>
            </figcaption>
        </figure>
        <div class="c_team-item c_team-item-title">
            <h2 class="c_team-item--name">L'equipe</h2>
            <p>Team description</p>
        </div>
    </c_section>
</template>

<script>
import { c_section } from '@/components/ui/wrappers/index';
import { c_icon } from '@/components/ui/pictures/index'
import { c_textIcon } from '@/components/ui/texts/index'

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
        c_icon,
        c_textIcon
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

            p,
            span {
                color: $c-w-100;
            }
        }

        .c_team-item--name {
            font-size: $fs-3;
            margin-bottom: $m-6;
        }

        .c_team-item--description {
            &Line {
                display: block;
                margin-bottom: $m-8;
            }
        }
    }

    &-item-title {
        height: 100%;
        padding: $m-2;
        background-color: $c-3-100;

        >* {
            color: $c-w-100;
        }
    }
}
</style>