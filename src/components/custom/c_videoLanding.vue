<template lang="">
    <div class="c_videoLanding">
        <!-- <img :src="'../../assets/images/landing.mp4'" alt="" srcset=""> -->
        <video class="c_videoLanding-video" autoplay loop muted>
            <source :src="'../../assets/videos/landing.mp4'" type="video/mp4">
        </video>
        <div class="c_siteTitle">
            <h1 >Le festival internationnal <br>de <span class="c_hightlightText">cerf-volant</span> de paris</h1>
        </div>
    </div>
</template>
<script>

export default {}
</script>
<style lang="scss">
.c_videoLanding {
    position: relative;
    height: 100vh;
    /* Ajustez la hauteur selon vos besoins */
    overflow: hidden;
}

.c_videoLanding-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.c_siteTitle {
    position: absolute;
    left: calc(10vw + var(--header-size));
    bottom: calc(10vw + var(--header-size));
}
</style>