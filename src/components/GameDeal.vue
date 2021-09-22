<template>
    <div class="game-deal">
        <div>
            <div class="seller">{{cheaperStore.storeName}}</div>
            <div class="pricing">
                <div class="deal-price">
                    <div class="normal-price" :class="cheaperStore.salePrice > 0 && 'line-through'">${{cheaperStore.retailPrice}}</div>
                    <div class="discount-price" v-if="cheaperStore.salePrice > 0">${{cheaperStore.salePrice}}</div>
                </div>
            </div>
        </div>
        <router-link :to="`/deal/${cheaperStore.dealID}`" class="button button-outline-dark">View More</router-link>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props: {
        cheaperStore: {
            type: Object,
            required: true,
        }
    },
    setup (props) {
        const cheaperStore = computed(() => props.cheaperStore)
        return {
            cheaperStore,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>