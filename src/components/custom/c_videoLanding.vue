<template lang="">
    <div class="c_videoLanding">
        <video class="c_videoLanding-video" autoplay loop muted>
            <source :src="`../..${baseUrl}assets/videos/landing.mp4`" type="video/mp4">
        </video>
        <c_section :_size="100" class="c_videoOverlay">
            <div class="c_overlayItem c_overlayItem--img">
                <img :src="`../..${baseUrl}assets/images/logo.png`" alt="" srcset="">
            </div>
            <div class="c_overlayItem c_overlayItem--content">
                <p class="c_itemLabel">10 au 14 avril 2024</p>
                <span class="c_itemDescription">Date</span>
            </div>
            <div class="c_overlayItem c_overlayItem--content">
                <p class="c_itemLabel">Esplanade de Paris la Défense</p>
                <span class="c_itemDescription">Lieu</span>
            </div>
        </c_section>
    </div>
</template>

<script>
import { c_icon } from '@/components/ui/pictures/index'
import { c_section } from '@/components/ui/wrappers/index'

export default {
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL
        }
    },
    components: {
        c_icon,
        c_section
    }
}
</script>
<style lang="scss">
.c_videoLanding {
    position: relative;
    height: 100vh;
    /* Ajustez la hauteur selon vos besoins */
    overflow: hidden;
}

.c_videoLanding-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.c_videoOverlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    gap: $m-5;

    .c_overlayItem {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: $c-w-75;
        padding: $m-4;
        overflow: auto;

        &.c_overlayItem--img {
            flex-grow: 2;

            img {
                min-width: 400px;
                width: 35vw;
                height: 100%;
                object-fit: contain;
            }
        }

        &.c_overlayItem--content {
            overflow: visible;
        }


        .c_itemLabel {
            font-size: $fs-3;
            color: $c-1-100;
            margin-bottom: .3rem;
        }

        .c_itemDescription {
            font-size: $fs-5;
        }
    }
}
</style>