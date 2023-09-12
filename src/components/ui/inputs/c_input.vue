<template lang="">
    <div class="c_input">
        <input class="c_input-input" :placeholder="_placeholder" :type="_type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: {
        _type: {
            type: String,
            default: 'text'
        },
        _placeholder: {
            type: String,
            default: 'default placeholder'
        },
        modelValue: {
            type: String
        }
    },
    data() {
        return {
            inputValue: '' 
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
        min-width: 200px;

        &-input{
            padding: $m-6;
            display: block;
        }
    }
    
</style>