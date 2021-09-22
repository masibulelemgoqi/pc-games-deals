<template>
    <div class="deals">
        <div class="heading">
            <div class="heading-text">
                Deals
            </div>
            <div class="heading-search">
                <input type="text" placeholder="Seach deals by name" v-model="dealTitle"> <i class="fas fa-search" @click="searchDeal"></i>
            </div>
        </div>
        <select name="" id="" class="filters">
            <option value="">Filters</option>
        </select>
        <div class="on-sale">
            <span>On Sale</span>
            <input type="checkbox" name="" id="" :checked="isChecked" v-model="isChecked">
        </div>
        <div class="divider"></div>
        <div class="deals-container">
            <div class="deals-list" v-if="deals.length > 0">
                <DealCard v-for="deal in deals" :key="deal.dealID" :deal="deal"/>
            </div>
        </div>
    </div>
</template>

<script>
import DealCard from '../components/DealCard.vue'
import {useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
export default {
	components: { DealCard },
    setup () {
        const store = useStore()
        const deals = computed(() => store.state.deals)
        const dealTitle = ref("")

        const isChecked = ref(false)
        function getDeals(query = null) {
            store.dispatch('getDeals', query);
        }

        watch(isChecked, () => {
            if (isChecked.value) {
                store.commit('DEALS_ON_SALE')
            } else {
                getDeals()
            }
        })

        watch(dealTitle, () => {
            if (dealTitle.value.length == 0) {
                getDeals()
            } 
        })

        function searchDeal() {
            console.log(dealTitle.value);
            if (dealTitle.value.length > 0) {
                getDeals({title: dealTitle.value})
            }
        }
        getDeals()
        return {
            deals,
            isChecked,
            searchDeal,
            dealTitle
        }
    }
}
</script>

<style lang="scss" scoped>

</style>