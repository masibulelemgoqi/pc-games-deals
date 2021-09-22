import { createRouter, createWebHistory } from "vue-router";
import Deals from "../views/Deals.vue";
import ViewDeal from "../views/ViewDeal.vue";

const routes = [
  {
    path: "/",
    name: "Deals",
    component: Deals,
  },
  {
    path: "/deal/:dealId",
    name: "ViewDeal",
    component: ViewDeal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
