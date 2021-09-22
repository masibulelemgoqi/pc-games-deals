<template>
    <div class="view-deal" v-if="deal != null">
        <div class="game-deal">
            <div class="heading">
                <div class="title">
                    {{deal.gameInfo.name}}
                </div>
                <div class="pricing">
                    <div class="deal-price">
                        <div class="normal-price" :class="deal.gameInfo.salePrice > 0 && 'line-through'">${{deal.gameInfo.retailPrice}}</div>
                        <div class="discount-price" v-if="deal.gameInfo.salePrice > 0">${{deal.gameInfo.salePrice}}</div>
                    </div>
                    <div class="amount-saved" v-if="deal.gameInfo.salePrice > 0">
                        You save ${{amountSaved()}}
                    </div>
                </div>
            </div>
            <div class="game-seller">
                <span>
                    Available at {{deal.gameInfo.storeName}}
                </span>
                
            </div>
            <div class="game-image">
                <img :src="deal.gameInfo.thumb" alt="">
            </div>
        </div>
        <div class="other-deals">
            <div class="heading">
                <span>Other deals for this game</span>
            </div>
            <div class="other-deals-list" v-if="deal.cheaperStores.length > 0">
                <GameDeal v-for="cheaperStore in deal.cheaperStores" :key="cheaperStore.storeID" :cheaperStore="cheaperStore"/>
            </div>

        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import GameDeal from '../components/GameDeal.vue'
import router from '../router'
import { watch } from '@vue/runtime-core'
export default {
	components: { GameDeal },
    setup () {
        const store = useStore()
        const deal = computed(() => store.state.deal)

        function amountSaved() {
            return (deal.value.gameInfo.retailPrice - deal.value.gameInfo.salePrice).toFixed(2) 
        }

        watch(router.currentRoute, (to) => {
            store.dispatch('getDeal', to.params.dealId)
        })
        store.dispatch('getDeal', router.currentRoute.value.params.dealId)
        return {
            deal,
            amountSaved
        }
    }
}
</script>