<template lang="">
    <c_videoLanding></c_videoLanding>
    <c_section class="c_splited">
        <div class="c_splited--title">
            <h2>Evènement</h2>
            <c_countdown></c_countdown>
        </div>
        <div class="c_splited--content">
            <h3>Découvrir le Festivale de Cerf-volant de Paris</h3>
            <c_collapse :_collapsed="true">
                <template v-slot:header>
                    <p>Description</p>
                </template>
                <template v-slot:content>
                    <p>Rejoignez-nous pour une expérience unique au cœur de la magie et de l'écologie. Du 10 au 14 avril, Paris la Défense sera le théâtre d'un événement inoubliable qui mêlera la beauté des cerfs-volants, le respect de l'environnement et le bonheur des petits et des grands.</p>
                    <p>Laissez-vous émerveiller par les danses aériennes des cerfs-volants multicolores, portés par le vent. Admirez les créations uniques d'artistes talentueux venus du monde entier. </p>
                </template>
            </c_collapse>
            <c_collapse>
                <template v-slot:header>
                    <p>Pour qui ?</p>
                </template>
                <template v-slot:content>
                    <p>Rejoignez-nous pour une expérience unique au cœur de la magie et de l'écologie. Du 10 au 14 avril, Paris la Défense sera le théâtre d'un événement inoubliable qui mêlera la beauté des cerfs-volants, le respect de l'environnement et le bonheur des petits et des grands.</p>
                    <p>Laissez-vous émerveiller par les danses aériennes des cerfs-volants multicolores, portés par le vent. Admirez les créations uniques d'artistes talentueux venus du monde entier. </p>
                </template>
            </c_collapse>
            <c_collapse>
                <template v-slot:header>
                    <p>Informations pratiques</p>
                </template>
                <template v-slot:content>
                    <p>Rejoignez-nous pour une expérience unique au cœur de la magie et de l'écologie. Du 10 au 14 avril, Paris la Défense sera le théâtre d'un événement inoubliable qui mêlera la beauté des cerfs-volants, le respect de l'environnement et le bonheur des petits et des grands.</p>
                    <p>Laissez-vous émerveiller par les danses aériennes des cerfs-volants multicolores, portés par le vent. Admirez les créations uniques d'artistes talentueux venus du monde entier. </p>
                </template>
            </c_collapse>
            <div class="c_fakeCollapseLink">
                <div class="c_fakeCollapseLink-header" @click="toggleCollapse">
                    <router-link to="/programme">Découvrir le programme</router-link>
                    <c_icon :_name="'arrow'" :_color="'orange'" class="c_fakeCollapseLink-icon"></c_icon>
                </div>
            </div>
        </div>
    </c_section>
    <c_section :_size="100">
        <c_presentation></c_presentation>
    </c_section>
    <c_section :_size="100" style="background-color: black">
        
    </c_section>
</template>
<script>
import { c_videoLanding, c_presentation, c_countdown } from '@/components/custom/index';
import { c_section, c_collapse } from '@/components/ui/wrappers/index';
import { c_icon } from '@/components/ui/pictures/index'

export default {
    components: {
        c_videoLanding, c_presentation, c_countdown,
        c_section, c_collapse,
        c_icon
    },
}
</script>
<style lang="scss">
.c_splited {
    display: flex;
    gap: $m-4;
    margin: $m-1 0;

    &--title {
        flex: 1;


        h2 {
            text-transform: uppercase;
            font-size: $fs-2;
            color: $c-1-100;
            margin-bottom: $m-6;
        }
    }

    &--content {
        flex: 3;


        h3 {
            font-size: $fs-3;
            font-weight: normal;
            margin-bottom: $m-6;
        }
    }
}

.c_fakeCollapseLink {
    padding: $m-4 0;

    & &-header {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

        a {
            font-size: $fs-4;
            text-transform: uppercase;
            font-weight: bold;
            color: $c-1-100;
            
            &:hover{
                padding-left: 1rem;
            }
        }
    }

    & &-icon {
        margin-right: $m-4;
    }
}
</style>