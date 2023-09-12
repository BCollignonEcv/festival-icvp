<template lang="">
    <div class="c_input">
        <textarea class="c_input-textarea" :placeholder="_placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
    </div>
</template>
<script>
export default {
    props: {
        _placeholder: {
            type: String,
            default: 'default placeholder'
        },
        modelValue: {
            type: String
        }
    }
}
</script>
<style lang="scss">
    .c_input{
        margin-top: 1rem;
        border-top: 1px solid $c-2-100;
        
        textarea{
            padding: $m-6;
            width: 100%;
            background-color:rgb(223, 223, 223);
            resize: none;
            height: 30vh;
            box-sizing: border-box;
        }
    }
    
</style>