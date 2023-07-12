<template lang="">
    <header class="c_header">
        <div class="c_headerBar c_headerBar--top">
            <h1>Festival International de Cerf-volant de Paris</h1>
        </div>
        <div class="c_headerBar c_headerBar--right">
            <ul class="c_headerNav">
                <li class="c_headerMenu">
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
                            <nav class="c_menuBugerFrame">
                                <ul>
                                    <li class="c_menuBugerFrame-item">
                                        <router-link to="/">
                                            <c_textIcon :_name="'default'" :_size="'big'">
                                                <h4>Accueil</h4>
                                            </c_textIcon>
                                        </router-link>
                                    </li>
                                    <li class="c_menuBugerFrame-item">
                                        <router-link to="/programme">
                                            <c_textIcon :_name="'default'" :_size="'big'">
                                                <h4>Programme</h4>
                                            </c_textIcon>
                                        </router-link>
                                    </li>
                                    <li class="c_menuBugerFrame-item">
                                        <router-link to="/contact">
                                            <c_textIcon :_name="'default'" :_size="'big'">
                                                <h4>Contact</h4>
                                            </c_textIcon>
                                        </router-link>
                                    </li>
                                </ul>
                            </nav>
                        </template>
                    </c_sideFrame>
                </li>
                <li class="c_headerNav-item">
                    <router-link to="/">
                        <c_icon :_name="'home'"></c_icon>
                    </router-link>
                </li>
                <li class="c_headerNav-item">
                    <router-link to="/programme">
                        <c_icon :_name="'calendar'"></c_icon>
                    </router-link>
                </li>
                <li class="c_headerNav-item">
                    <router-link to="/contact">
                        <c_icon :_name="'chat'"></c_icon>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="c_headerBar c_headerBar--bottom"></div>
        <div class="c_headerBar c_headerBar--left">
            <ul class="c_headerNav">
                <li class="c_headerNav-item">
                    <c_icon :_name="'facebook'"></c_icon>
                </li>                
                <li class="c_headerNav-item">
                    <c_icon :_name="'instagram'"></c_icon>
                </li>
                <li class="c_headerNav-item">
                    <c_icon :_name="'linkedin'"></c_icon>
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
        console.log('Base URL:', base);
        // Utilisez la valeur de base comme vous le souhaitez
    },
}
</script>
<style lang="scss">
$scaler:1.75;

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
        }

        &--left {
            top: 0;
            left: 0;
            width: $hs;
            height: 100%;
        }

        &--bottom {
            bottom: 0;
            left: 0;
            width: 100%;
            height: $hs;
        }
    }

    .c_headerNav {
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

        .c_headerNav-item {
            margin: 5rem 0;
            cursor: pointer;
        }
    }

    .c_menuBuger {
        background-color: $c-1-100;
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
        height: calc(100vh - 2 * $hs);
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        ul {
            .c_menuBugerFrame-item {
                margin: 5em 5em;
                transition: .5s;

                &:hover {
                    margin-left: 6rem;
                }
            }
        }
    } 
}
</style>