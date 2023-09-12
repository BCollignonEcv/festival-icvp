<template lang="">
    <div class="c_button">
        <button :class="`c_button-${_type}`">
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    props: {
        _type: {
            type: String,
            default: 'primary'
        }
    }
}
</script>
<style lang="scss">
    .c_button{
        margin-top: 1rem;
        width: 100%;

        button {
            padding: $m-6;
            width: 100%;
            transition: all .3s ease-in-out;
        }

        &-primary {
            background-color: $c-1-100;
            &:hover {
                background-color: $c-2-100;
            }
        }

        &-secondary {
            background-color: $c-2-100;
            &:hover {
                background-color: $c-1-100;
            }
        }

        &-terciary {
            background-color: $c-3-50;
            &:hover {
                background-color: $c-1-100;
            }
        }
    }
    
</style>