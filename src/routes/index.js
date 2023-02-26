import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../components/base-layout.vue";
import Home from "../pages/home.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HomeLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Introduction']
                }
            },
        ]
    },
    {
        path: "*",
        redirect: { name: "404" }
    },
    {
        path: "/not-found/404",
        component: () => import("../pages/errors/404.vue"),
        name: "404"
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    // base: "",
    routes,
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0, behavior: "smooth" });
            }, 100);
        });
    },
});








export default router;
