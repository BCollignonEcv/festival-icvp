<template>
    <div class="c_collapse">
        <div class="c_collapse-header" @click="toggleCollapse">
            <slot name="header"></slot>
            <c_icon :_name="'add'" class="c_collapse-icon" :class="{ 'open': collapsed }"></c_icon>
        </div>
        <div class="c_collapse-content" ref="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
  
<script>
import { c_icon } from '@/components/ui/pictures/index'

export default {
    components: {
        c_icon,
    },
    props: {
        _collapsed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            collapsed: false
        }
    },
    mounted() {
        if (this._collapsed) {
            this.toggleCollapse()
        }
    },
    methods: {
        toggleCollapse() {
            this.collapsed = !this.collapsed;
            let content = this.$refs.content;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    },
}
</script>
  
<style lang="scss">

.c_collapse {
    border-bottom: 2px solid $c-3-100;
    padding: $m-4 0;

    & &-header {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

        h4 {
            font-size: $fs-4;
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    & &-content {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.2s ease-out;
        width: 90%;

        @media screen and (max-width: 768px) {
            width: 100%;
        }

        p {
            font-size: $fs-6;
            font-weight: lighter;
            text-align: justify;
            padding-top: $m-6;
        }
    }

    & &-icon {
        margin-right: $m-4;
        transition: all .2s ease-out;

        @media screen and (max-width: 768px) {
            margin-right: 0;
        }

        &.open {
            transform: rotate(45deg);
        }
    }


}
</style>