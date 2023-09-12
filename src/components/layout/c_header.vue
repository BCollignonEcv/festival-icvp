<template lang="">
    <header class="c_header">
        <div class="c_headerBar c_headerBar--right">
            <ul class="c_headerNav">
                <li class="c_headerNav-item">
                    <router-link to="/">
                        <c_icon :_name="'home'" :_size="'small'" :_overlayLabel="'Accueil'" _overlayPosition="left"></c_icon>
                    </router-link>
                </li>
                <!-- <li class="c_headerNav-item">
                    <router-link to="/programme">
                        <c_icon :_name="'calendar'" :_size="'small'" :_overlayLabel="'Programme'" _overlayPosition="left"></c_icon>
                    </router-link>
                </li> -->
                <!-- <li class="c_headerNav-item">
                    <router-link to="/equipe">
                        <c_icon :_name="'team'" :_size="'small'" :_overlayLabel="'Equipe'" _overlayPosition="left"></c_icon>
                    </router-link>
                </li> -->
                <li class="c_headerNav-item">
                    <router-link to="/contact">
                        <c_icon :_name="'chat'" :_size="'small'" :_overlayLabel="'Contact'" _overlayPosition="left"></c_icon>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="c_headerBar c_headerBar--top">
            <div class="c_headerBar-main">
                <router-link to="/">
                    <h1>Paris Kite Challenge</h1>
                </router-link>
                <div class="c_headerMenu">
                    <c_sideFrame>
                        <template v-slot:icon>
                            <div class="c_menuBuger">
                                <c_icon :_name="'menu'" :_color="'white'"></c_icon>
                            </div>
                        </template>
                        <template v-slot:title>
                            <h5>Menu</h5>
                        </template>
                        <template v-slot:content>
                            <div class="c_menuBugerFrame">
                                <nav >
                                    <ul>
                                        <li class="c_menuBugerFrame-item">
                                            <router-link to="/">
                                                <h4>Accueil</h4>
                                            </router-link>
                                        </li>
                                        <!-- <li class="c_menuBugerFrame-item">
                                            <router-link to="/programme">
                                                <c_textIcon :_name="'default'" :_size="'big'">
                                                    <h4>Programme</h4>
                                                </c_textIcon>
                                            </router-link>
                                        </li> -->
                                        <!-- <li class="c_menuBugerFrame-item">
                                            <router-link to="/equipe">
                                                <h4>Team</h4>
                                            </router-link>
                                        </li> -->
                                        <li class="c_menuBugerFrame-item">
                                            <router-link to="/contact">
                                                <h4>Contact</h4>
                                            </router-link>
                                        </li>
                                    </ul>
                                </nav>
                                <div>
                                    <c_image _name="ParisLaDefense-logo" _size="xsmall"></c_image>
                                </div>
                            </div>
                        </template>
                    </c_sideFrame>
                </div>
            </div>
        </div>
        <div class="c_headerBar c_headerBar--bottom"></div>
        <div class="c_headerBar c_headerBar--left">
            <ul class="c_headerNav">
                <li class="c_headerNav-item">
                    <c_icon :_name="'facebook'" :_size="'small'" :_overlayLabel="'A venir'" _overlayPosition="right"></c_icon>
                </li>                
                <li class="c_headerNav-item">
                    <c_icon :_name="'instagram'" :_size="'small'" :_overlayLabel="'A venir'" _overlayPosition="right"></c_icon>
                </li>
                <li class="c_headerNav-item">
                    <c_icon :_name="'linkedin'" :_size="'small'" :_overlayLabel="'A venir'" _overlayPosition="right"></c_icon>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>

import { RouterLink } from 'vue-router'
import { c_sideFrame } from '@/components/ui/wrappers/index'
import { c_icon, c_image } from '@/components/ui/pictures/index'
import { c_textIcon } from '@/components/ui/texts/index'

export default {
    components: {
        RouterLink,
        c_sideFrame,
        c_icon, c_image,
        c_textIcon
    },
    mounted() {
        const base = import.meta.env.BASE_URL;
    },
}
</script>
<style lang="scss">
$scaler: 2;

.c_header {
    position: relative;
    z-index: 50;

    .c_headerBar {
        position: fixed;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        &--top {
            top: 0;
            left: 0;
            width: 100%;
            height: $hs;

            h1 {
                font-size: $fs-6;
                color: $c-3-100;
            }
        }

        &--right {
            top: 0;
            right: 0;
            width: $hs;
            height: 100%;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        &--left {
            top: 0;
            left: 0;
            width: $hs;
            height: 100%;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        &--bottom {
            bottom: 0;
            left: 0;
            width: 100%;
            height: $hs;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        .c_headerNav {
            .c_headerNav-item {
                margin: 5rem 0;
                cursor: pointer;
            }
        }
    }

    .c_headerBar-main {
        position: relative;

        .c_headerMenu {
            position: fixed;
            top: 0;
            right: 0;
        }

        .c_headerLogo {
            position: fixed;
            top: 0;
            left: 0;
        }
    }

    .c_menuBuger {
        background-color: $c-5-100;
        height: $hs*$scaler;
        width: $hs*$scaler;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .5s;

        &:hover {
            background-color: $c-3-100;
        }
    }

    .c_menuBugerFrame {
        height: calc(100vh - 2 * $hs - 3rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        nav {
            flex-grow: 5;
            display: flex;
            flex-direction: column;
            justify-content: space-arround;

            ul {
                margin: auto 0;

                .c_menuBugerFrame-item {
                    transition: .5s;
                    margin-bottom: 2rem;

                    &:hover {
                        margin-left: 3rem;
                    }

                    h4 {
                        font-size: $fs-huge;
                    }
                }


            }
        }




    }
}
</style>