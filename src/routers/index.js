import homeComponent from "@/components/homeComponent.vue";
import cartComponent from "@/components/cartComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: homeComponent,
    },
    {
        path: "/cart",
        component: cartComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;