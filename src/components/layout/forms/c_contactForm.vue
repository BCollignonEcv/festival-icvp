<template>
    <form @submit.prevent="">
        <div class="c_inputs-inline">
            <c_input _type="text" _placeholder="Nom" v-model="formData.lastname"></c_input>
            <c_input _type="text" _placeholder="Prenom" v-model="formData.firstname"></c_input>
        </div>
        <div class="c_inputs-inline">
            <c_input _type="email" _placeholder="Email" v-model="formData.email"></c_input>
            <c_input _type="tel" _placeholder="Téléphone" v-model="formData.phone"></c_input>
        </div>
        <c_textarea _placeholder="Message" v-model="formData.message"></c_textarea>
        <div class="c_inputs-inline">
            <c_button _type="secondary" type="submit" @click="send">Envoyer</c_button>
            <a :href="`../..${baseUrl}assets/documents/ParisKiteCHALLENGE-2024.pdf`" download="ParisKiteCHALLENGE-2024.pdf">
                <c_button _type="terciary">Télécharger PDF</c_button>
            </a>
        </div>
        <br>
        <p>{{ response }}</p>
    </form>
</template>

<script>
import axios from 'axios';
import { c_input, c_button, c_textarea } from '@/components/ui/inputs/index'

export default {
    components: {
        c_input, c_button, c_textarea
    },
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL,
            formData: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                message: ''
            },
            response: null
        }
    },
    methods: {
        async send() {
            this.response = "Envoie en cours"
            try {
                const response = await axios.post('http://pariskitechallenge.com/php/sendMail.php', this.formData);
                if (response) {
                    this.response = response.data.message
                    if (response.data.status == "OK") {
                        this.cleanForm()
                    }
                }

            } catch (error) {
                console.error(error);
            }
        },
        cleanForm() {
            this.formData = {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                message: ''
            }
        }
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

    .c_button {
        display: inline-block;
        flex: 1;
    }

    a {
        display: inline-block;
        flex: 1;
    }
}

@media screen and (max-width: 768px) {
    .c_inputs-inline {
        flex-wrap: wrap;
        gap: 0;
    }
}
</style>