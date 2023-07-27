<template lang="">
    <div class="c_input">
        <input class="c_input-input" :placeholder="_placeholder" :type="_type" />
    </div>
</template>
<script>
export default {
    props: {
        _type: {
            type: String,
            default: 'text'
        },
        _placeholder: {
            type: String,
            default: 'default placeholder'
        }
    }
}
</script>
<style lang="scss">
    .c_input{
        margin-top: 1rem;
        position: relative;
        background-color:rgb(223, 223, 223);
        border-top: 1px solid $c-2-100;

        &-input{
            padding: $m-6;
            display: block;
        }
    }
    
</style>