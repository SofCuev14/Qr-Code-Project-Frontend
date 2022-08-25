import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QrCodeGenerator from "../views/QrGeneratorPage.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/generator",
        name: "QrCodeGenerator"
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;