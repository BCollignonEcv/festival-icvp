<template lang="">
    <c_team :_members="dataStore.getMembers"></c_team>
</template>
<script>
import { c_team } from '@/components/custom/index';
import { useDataStore } from '@/stores/data.store'

export default {
    components: {
        c_team
    },
    setup() {
        const dataStore = useDataStore();
        return { dataStore }
    },
}
</script>
<style lang="scss">
</style>