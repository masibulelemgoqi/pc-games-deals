<template>
    <Loading :active="isLoading"
            :isFullPage="true"
            :color="'#14A38B'"
            :loader="'dots'"
            :width="80"
            :height="80"
            :backgroundColor="'#fffff'"
            :opacity=".5"
            :zIndex="999"
    />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    components: {Loading},
    setup() {
        const store = useStore()
        const isLoading = computed(() => store.state.loading)
        return {
            isLoading
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>