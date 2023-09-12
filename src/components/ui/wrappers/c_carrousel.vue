<template>
    <div class="c_carroussel" ref="container" @click="scrollNextElement()">
        <slot></slot>
    </div>
</template>

<script>

export default {
    data() {
        return {};
    },
    props: {
        _configs: Object,
        _autoScroll: Boolean
    },
    mounted() {
        if (this._autoScroll) {
            // TODO : Implement auto scrolling 
        }
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.c_carroussel {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    position: relative;

    &>* {
        flex: 1;
    }
}
</style>