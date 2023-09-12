<template lang="">
    <!-- SECTION 1 -->
    <c_videoLanding></c_videoLanding>

    <!-- SECTION 2 -->
    <c_section class="c_splited">
        <div class="c_splited--title">
            <h2>Evènement</h2>
            <c_countdown></c_countdown>
        </div>
        <div class="c_splited--content">
            <h3>Découvrir le Paris Kite Challenge</h3>
            <c_collapse :_collapsed="true">
                <template v-slot:header>
                    <h4>Description</h4>
                </template>
                <template v-slot:content>
                    <p>Le Paris Kite CHALLENGE va métamorphoser l’esplanade de PARIS LA DEFENSE grâce à des spectacles aériens réalisés pour la première fois au cœur du premier quartier d’affaires européen. Spectacles et innovations techniques vont assurer l’émerveillement du public pendant 5 jours.</p>
                    <p>Des cerfs-volants géants vont s'élever dans le ciel de PARIS pour la première fois, une odyssée éclatante, féérique et démesurée. Baleines, oursons malins, fleurs, poissons tropicaux vont métamorphoser les lieux. Les meilleurs cerfs-volistes de la planète vont également assurer le spectacle au travers d’une compétition de free-style qui se déroulera aux pieds de la grande arche, porte du vent de PARIS. Un village d’exposition vous permettra de découvrir matériel, séjours et activités et de donner vie à vos rêves.</p>
                    <p>Des entreprises pionnières, engagées pour un avenir durable vont également présenter leurs  innovations pour la première fois à PARIS. Solutions pour la production d’énergie, le transport, l’industrie, ces partenaires ont développé des techniques nouvelles pour utiliser la puissance du vent. Vous pourrez découvrir ces produits qui nous emmènent vers une société post carbone et dialoguer avec leurs représentants.</p>
                    <p>Ce CHALLENGE est entièrement dédié et réalisé grâce à une énergie libre, durable et renouvelable : le vent.</p>
                    <br>
                </template>
            </c_collapse>
            <c_collapse>
                <template v-slot:header>
                    <h4>Pour qui ?</h4>
                </template>
                <template v-slot:content>
                    <p>Le festival est un événement grand public. Enfants, familles, amis, adolescents, seul, en groupe, à deux... Le festival est le lieu pour s'émerveiller, rêver, découvrir et se rapprocher des étoiles.</p>
                </template>
            </c_collapse>
            <c_collapse>
                <template v-slot:header>
                    <h4>Informations pratiques et accès</h4>
                </template>
                <template v-slot:content>
                    <div class="c_flexContainer">
                        <div>
                            <br>
                            <c_textIcon :_name="'rer'" :_size="'normal'">
                                <c_textIcon :_name="'rer-a'" :_size="'small'">Arrêt : La Défense Grande Arche</c_textIcon>
                            </c_textIcon>
                            <br>
                            <c_textIcon :_name="'transilien'" :_size="'normal'">
                                <c_textIcon :_name="'transilien-u'" :_size="'small'"></c_textIcon>
                                <c_textIcon :_name="'transilien-l'" :_size="'small'">Arrêt : La Défense Grande Arche</c_textIcon>
                            </c_textIcon>
                            <br>
                            <c_textIcon :_name="'tramway'" :_size="'normal'">
                                <c_textIcon :_name="'tramway-2'" :_size="'small'">Arrêt : La Défense Grande Arche</c_textIcon>
                            </c_textIcon>
                            <br>
                            <c_textIcon :_name="'metro'" :_size="'normal'">
                                <c_textIcon :_name="'metro-1'" :_size="'small'">Arrêt : La Défense Grande Arche ou Esplanade de La Défense</c_textIcon>
                            </c_textIcon>
                            <br>
                            <c_textIcon :_name="'bus'" :_size="'normal'">
                                <c_textIcon :_name="'bus-141'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-144'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-159'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-160'" :_size="'normal'"></c_textIcon>
                                <!-- <c_textIcon :_name="'bus-161'" :_size="'normal'"></c_textIcon> -->
                                <c_textIcon :_name="'bus-174'" :_size="'normal'"></c_textIcon>
                                <!-- <c_textIcon :_name="'bus-246'" :_size="'normal'"></c_textIcon> -->
                                <c_textIcon :_name="'bus-258'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-262'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-272'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-275'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-360'" :_size="'normal'"></c_textIcon>
                                <c_textIcon :_name="'bus-378'" :_size="'normal'"></c_textIcon>
                                <!-- <c_textIcon :_name="'bus-451'" :_size="'normal'"></c_textIcon> -->
                                <p>Balabus</p>
                            </c_textIcon>
                            <br>
                            <c_textIcon :_name="'bus'" :_size="'normal'">
                                <c_textIcon :_name="'bus-n24'" :_size="'normal'"></c_textIcon>
                                <!-- <c_textIcon :_name="'bus-n152'" :_size="'normal'"></c_textIcon> -->
                            </c_textIcon>
                        </div>
                        <div>
                            <c_googleMap :_url="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.531796719874!2d2.2354092278159428!3d48.891269517162755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66503b3dac63b%3A0xcd3fb755c3fe671e!2sParvis%20de%20la%20D%C3%A9fense!5e0!3m2!1sfr!2sfr!4v1690158608007!5m2!1sfr!2sfr'"></c_googleMap>
                        </div>
                    </div>
                </template>
            </c_collapse>
            <div class="c_fakeCollapseLink">
                <div class="c_fakeCollapseLink-header" @click="toggleCollapse">
                    <router-link to="/contact">Nous contacter</router-link>
                    <c_icon :_name="'arrow'" :_color="'pink'" class="c_fakeCollapseLink-icon"></c_icon>
                </div>
            </div>
        </div>
    </c_section>

    <!-- SECTION 3 -->
    <c_section :_size="90" _type="full">
        <c_presentation _color="primary" _imgName="landing.jpg">
            <template v-slot:title>
                <div class="c_overlayTitle">
                    <h3>Paris La Défense</h3>
                    <p>Un site unique<br>pour un événement <span class="c_hightlightText">exceptionnel</span></p>
                </div>
            </template>
            <template v-slot:aside>
                <c_textFact v-for="fact in dataStore.getFacts" :_fact="fact"></c_textFact>
            </template>
        </c_presentation>
    </c_section>

    <!-- SECTION 4 -->
    <c_section _type="text" class="bg-white">
        <c_textTitle :_size="3">Club des partenaires</c_textTitle>
        <c_carrousel>
            <c_premiumSponsorItem v-for="sponsor in dataStore.getPremiumSponsors" :_sponsor="sponsor"></c_premiumSponsorItem>
        </c_carrousel>
    </c_section>

    <!-- SECTION 5 -->
    <c_section :_size="90" _type="full">
        <c_presentation _imgName="envol.jpg" :_asideSize="30" _color="secondary">
            <!-- <template v-slot:title>
                    <div class="c_overlayTitle">
                    
                </div>
            </template> -->
            <template v-slot:aside>
                <p>Un événement</p>
                <h3>Responsable et durable</h3>
                <p>Nous croyons en une vision de l'avenir qui allie la joie de vivre à la responsabilité envers la planète. Voler, faire voler, glisser, rêver, le vent nous permet de partager un bonheur simple. Nous avons créé un événement durable, solidaire et inclusif qui célèbre la joie, le rêve et la liberté de se projeter dans le monde post-carbone.</p>
                
                <br>
                <br>
                <br>
                <br>
                <br>
                <c_image _name="concept"></c_image>
            </template>
        </c_presentation>
    </c_section>

    <!-- SECTION 6 -->

    <!-- SECTION 7 -->
    <!-- <c_section :_size="100" _type="full">
        <c_presentation _imgName="responsable.jpg" :_asideSize="40" _color="white">
            <template v-slot:title>
                    <div class="c_overlayTitle">
                    <p>Les vols thématiques</p>
                    <h3></h3>
                </div>
            </template>
            <template v-slot:aside>
                <p><c_textIcon :_name="'calendar'" :_size="'small'">Mercredi 12H30</c_textIcon></p>
                <br>
                <h3>
                    Le Vol des Entreprises<br>
                </h3>
                <p>Femmes et Hommes feront s'élever 150 cerfs-volants identiques marqués aux couleurs de leur entreprise pour afficher leur volonté d’une croissance décarbonée.</p>
                <p>Ce vol sera réservé à des entreprises engagées dans un process post carbone.</p>
                <p>Ce vol est une clé de communication unique pour valoriser l'innovation portée par les entreprises françaises.</p>
                
                <br>
                <br>
                <h4>Valorisez vos engagements</h4>
                <br>

                <p>Quelques mois avant les jeux olympiques, les entreprises engagées dans le défi du monde post carbone afficheront leur engagement de façon spectaculaire.</p>
                <p>Pour la première fois en Europe, au cœur du plus grand quartier d'affaires, elles offriront une scénographie exceptionnelle à des centaines de milliers de spectateurs venus rêver sous le ciel de PARIS.</p>
                <p>Liberté, audace, et joie guideront les participants, les spectateurs et les partenaires.</p>
                <br>
                <br>
            </template>
        </c_presentation>
    </c_section> -->
    
    <!-- SECTION 8 -->
    <c_section _type="text" class="bg-extra d-m">
        <c_textTitle :_size="3">En 1 mot</c_textTitle>
        <c_video :_name="'teaser'"></c_video>
    </c_section>
    <br>
</template>
<script>
import { c_videoLanding, c_presentation, c_countdown, c_premiumSponsorItem, c_basicSponsorItem, c_googleMap } from '@/components/custom/index';
import { c_section, c_collapse, c_carrousel } from '@/components/ui/wrappers/index';
import { c_icon, c_image, c_video } from '@/components/ui/pictures/index'
import { c_textTitle, c_textIcon, c_textFact } from '@/components/ui/texts/index'

import { useDataStore } from '@/stores/data.store'

export default {
    components: {
        c_videoLanding, c_presentation, c_countdown, c_premiumSponsorItem, c_basicSponsorItem, c_googleMap,
        c_section, c_collapse, c_carrousel,
        c_icon, c_image, c_video,
        c_textTitle, c_textIcon, c_textFact
    },
    setup() {
        const dataStore = useDataStore();
        return { dataStore }
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

@media screen and (max-width: 768px) {
    .c_splited {
        flex-direction: column;

        &--title {
            flex: auto;
        }

        &--content {
            flex: auto;
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
            color: $c-5-100;

            &:hover {
                padding-left: 1rem;
            }
        }
    }

    & &-icon {
        margin-right: $m-4;

        @media screen and (max-width: 768px) {
            margin-right: 0;
        }
    }
}

.c_keywords {
    padding: $m-5 0;

    li {
        text-transform: uppercase;
        font-size: $fs-4;
        margin-bottom: $m-8;
    }
}
</style>