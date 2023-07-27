<template>
    <div>
        <div class="c_inputs-inline">
            <c_input _type="text" _placeholder="Nom"></c_input>
            <c_input _type="text" _placeholder="Prenom"></c_input>
        </div>
        <div class="c_inputs-inline">
            <c_input _type="email" _placeholder="Email"></c_input>
            <c_input _type="phone" _placeholder="Téléphone"></c_input>
        </div>
        <c_textarea _placeholder="Message"></c_textarea>
        <div class="c_inputs-inline">
            <c_button _type="secondary">Envoyer</c_button>
            <c_button _type="terciary">Téléchargé PDF</c_button>
        </div>
    </div>
</template>

<script>
    import { c_input, c_button, c_textarea } from '@/components/ui/inputs/index'

    export default {
        components: {
            c_input, c_button, c_textarea
        }
    }
</script>

<style lang="scss">
.c_inputs-inline {
    width: 100%;
    display: flex;
    gap: $m-4;

    .c_input {
        flex: 1;
    }
}
</style>