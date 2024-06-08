import VueRouter from 'vue-router'
import Routes from "@/pages/Routes.vue";
import Vue from "vue";
import Test from "@/pages/Test.vue";

Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
        path: "/router",
        component: Routes,
        children: [
            {
                name: "message", path: "message", component: Test,
                props(r) {
                    return {name: r.query.name}
                }
            },
            {
                name: "friend", path: "friend", component: Test,
                props(r) {
                    return {name: r.query.name}
                }
            },
            {
                name: "chatRoom", path: "chatRoom", component: Test,
                props(r) {
                    return {name: r.query.name}
                }
            },
        ],
        props(route) {
            return {route: route.query.route};
        }
    },
        {path: "/test", component: Test},
    ]
})