<template>
  <div class="deal-card">
    <div class="title">
      {{ deal.title }}
    </div>
    <div class="description">
      <span class="normal-price" :class="deal.salePrice > 0 && 'line-through'"
        >${{ deal.normalPrice }}</span
      >
      <span class="discount-price" v-if="deal.salePrice > 0"
        >${{ deal.salePrice }}</span
      >
    </div>
    <router-link
      class="button button-outline-dark"
      :to="`/deal/${deal.dealID}`"
      exact-path
    >
      View More
    </router-link>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: {
    deal: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const deal = computed(() => props.deal);
    return {
      deal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
