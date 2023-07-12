<template lang="">
    <c_section :_size="100">
        <h2>Page contact</h2>
    </c_section>

</template>
<script>
import { c_videoLanding, c_countdown } from '@/components/custom/index';
import { c_section, c_collapse } from '@/components/ui/wrappers/index';

export default {
    components: {
        c_videoLanding, c_countdown,
        c_section, c_collapse
    },
}
</script>
<style lang="scss">
</style>