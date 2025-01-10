import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import('../pages/HomePage.vue') },
    { path: "/blog", component: () => import('../pages/BlogPage.vue') },
    { path: "/getQuote", component: () => import('../pages/GetAQuotePage.vue') },
    { path: "/aboutpage", component: () => import('../pages/AboutPage.vue') },
    { path: "/media", component: () => import('../pages/MediaPage.vue') },
    { path: "/shop", component: () => import('../pages/ShopPage.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes
}
)
export default router;