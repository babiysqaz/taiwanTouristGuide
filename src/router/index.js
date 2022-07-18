import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import TopicView from '@/views/TopicView.vue'
const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/topic",
        name: "TopicView",
        component: TopicView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;