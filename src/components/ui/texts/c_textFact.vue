<template>
    <div class="c_textFact">
        <p class="c_textFact--label">{{ _fact.label }}</p>
        <p v-if="_fact.unit" class="c_textFact--unit">{{ _fact.unit }}</p>
    </div>
</template>

<script>

export default {
    props: {
        _fact: {
            type: Object
        },
    },
}
</script>

<style lang="scss" scoped>
.c_textFact {
    padding: 0 $m-2;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & &--label {
        font-size: $fs-huge;
        font-weight: bold;
        margin-bottom: $m-8;
        color: white;
    }

    & &--unit {
        font-size: $fs-4;
        font-weight: medium;
        color: white;
    }

    &+& {
        border-top: 1px solid $c-3-100;
    }

    @media screen and (max-width: 768px) {
        padding: $m-4 $m-2;

        & &--label {
            font-size: $fs-1;
        }

        & &--unit {
            font-size: $fs-5;
        }
    }
}
</style>