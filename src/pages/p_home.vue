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
            <h3>Découvrir le Festivale de Cerf-volant de Paris</h3>
            <c_collapse :_collapsed="true">
                <template v-slot:header>
                    <h4>Description</h4>
                </template>
                <template v-slot:content>
                    <p>Le festival international de cerf-volant de PARIS va transformer l’esplanade de Paris la Défense en scène magique. Spectacles et innovations techniques vont assurer l’émerveillement du public pendant 5 jours.</p>
                    <p>Des cerfs-volants géants vont s’élever dans le ciel de PARIS pour la première fois, une odyssée éclatante, féérique et démesurée. Baleines, oursons malins, fleurs, poissons tropicaux vont métamorphoser les lieux. Les meilleurs cerfs-volistes de la planète vont également assurer le spectacle au travers d’une compétition de free-style qui se déroulera aux pieds de la grande arche, porte du vent de PARIS. Un village d’exposition vous permettra de découvrir matériel, séjours et activités et de donner vie à vos rêves.</p>
                    <p>Des entreprises pionnières, engagées pour un avenir durable vont également présenter leurs  innovations pour la première fois à PARIS. Solutions pour la production d’énergie, le transport, l’industrie, ces partenaires ont développé des techniques nouvelles pour utiliser la puissance du vent. Vous pourrez découvrir ces produits qui nous emmènent vers une société post carbone et dialoguer avec leurs représentants.</p>
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
                    <h4>Informations pratiques</h4>
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
                    <router-link to="/programme">Découvrir le programme</router-link>
                    <c_icon :_name="'arrow'" :_color="'orange'" class="c_fakeCollapseLink-icon"></c_icon>
                </div>
            </div>
        </div>
    </c_section>

    <!-- SECTION 3 -->
    <c_section :_size="100">
        <c_presentation _color="primary" _imgName="landing.jpg">
            <template v-slot:title>
                <div class="c_overlayTitle">
                    <h3>Paris la Défense</h3>
                    <p>Un lieu <span class="c_hightlightText">Unique</span></p>
                </div>
            </template>
            <template v-slot:aside>
                <c_textFact v-for="fact in dataStore.getFacts" :_fact="fact"></c_textFact>
            </template>
        </c_presentation>
    </c_section>

    <!-- SECTION 4 -->
    <c_section _type="text" class="bg-black">
        <c_textTitle :_size="3">Club des 3</c_textTitle>
        <c_carrousel>
            <c_premiumSponsorItem v-for="sponsor in dataStore.getPremiumSponsors" :_sponsor="sponsor"></c_premiumSponsorItem>
        </c_carrousel>
    </c_section>

    <!-- SECTION 5 -->
    <c_section :_size="100" >
        <c_presentation _imgName="envol.jpg" :_asideSize="40" _color="secondary">
            <template v-slot:title>
                    <div class="c_overlayTitle">
                    <p>Promouvoir un loisir</p>
                    <h3>Responsable et <span class="c_hightlightText">durable</span></h3>
                </div>
            </template>
            <template v-slot:aside>
                <h3>Une aventure<br>durable</h3>
                <p>Les valeurs portées par le cerf-volant à travers les siècles retrouvent écho et notoriété à l'heure du réchauffement climatique.</p>

                <ul class="c_keywords">
                    <li><c_textIcon _size="normal" _color="orange">Durabilité</c_textIcon></li>
                    <li><c_textIcon _size="normal" _color="orange">Energie</c_textIcon></li>
                    <li><c_textIcon _size="normal" _color="orange">Inclusion</c_textIcon></li>
                    <li><c_textIcon _size="normal" _color="orange">Joie</c_textIcon></li>
                </ul>

                <button>Le vol des entreprises</button>
            </template>
        </c_presentation>
    </c_section>

    <!-- SECTION 6 -->
    <c_section _type="text" class="bg-black">
        <c_textTitle :_size="3">Club des 150</c_textTitle>
        <c_carrousel :_autoScroll="true">
            <c_basicSponsorItem v-for="sponsor in dataStore.getBasicSponsors" :_sponsor="sponsor"></c_basicSponsorItem>
        </c_carrousel>  
    </c_section>

    <!-- SECTION 7 -->
    <c_section :_size="100">
        <c_presentation _imgName="responsable.jpg" :_asideSize="40" _color="secondary">
            <!-- <template v-slot:title>
                    <div class="c_overlayTitle">
                    <p>Promouvoir un loisir</p>
                    <h3>Responsable et <span class="c_hightlightText">durable</span></h3>
                </div>
            </template> -->
            <template v-slot:aside>
                <h3>Un vol thématique chaque jour</h3>
                <p>Un envol est un succès et une joie, il traduit l'accomplissement d'un projet, la réalisation d'un objectif, le plaisir de la réussite.</p>
                <br>
                <br>

                <h4>L'Envol des entreprises</h4>
                <p>Un envol est un succès et une joie, il traduit l'accomplissement d'un projet, la réalisation d'un objectif, le plaisir de la réussite.</p>
                <br>
                <br>
                
                <h4>L'Envol des générations</h4>
                <p>Un envol est un succès et une joie, il traduit l'accomplissement d'un projet, la réalisation d'un objectif, le plaisir de la réussite.</p>
                <br>
                <br>
                
                <h4>L'Envol des artistes</h4>
                <p>Un envol est un succès et une joie, il traduit l'accomplissement d'un projet, la réalisation d'un objectif, le plaisir de la réussite.</p>
                <br>
                <br>
                
                <button>En savoir +</button>
            </template>
        </c_presentation>
    </c_section>
    <br>
    <br>
</template>
<script>
import { c_videoLanding, c_presentation, c_countdown, c_premiumSponsorItem, c_basicSponsorItem, c_googleMap } from '@/components/custom/index';
import { c_section, c_collapse, c_carrousel } from '@/components/ui/wrappers/index';
import { c_icon } from '@/components/ui/pictures/index'
import { c_textTitle, c_textIcon, c_textFact } from '@/components/ui/texts/index'

import { useDataStore } from '@/stores/data.store'

export default {
    components: {
        c_videoLanding, c_presentation, c_countdown, c_premiumSponsorItem, c_basicSponsorItem, c_googleMap,
        c_section, c_collapse, c_carrousel,
        c_icon,
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

            &:hover {
                padding-left: 1rem;
            }
        }
    }

    & &-icon {
        margin-right: $m-4;
    }
}

.c_keywords{
    padding: $m-5 0;
    li {
        text-transform: uppercase;
        font-size: $fs-4;
        margin-bottom: $m-8;
    }
}
</style>