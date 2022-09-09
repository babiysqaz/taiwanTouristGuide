import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import TopicView from '@/views/TopicView.vue'
const routes = [
    {
        path: "/home",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/topic",
        name: "TopicView",
        component: TopicView,
    },
    {
        path: "/taiwanTouristGuide/",
        redirect: "/home",
    },
    {
        path: "",
        redirect: "/home",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;