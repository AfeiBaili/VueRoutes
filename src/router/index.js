import VueRouter from 'vue-router'
import Routes from "@/pages/Routes.vue";
import Vue from "vue";
import Test from "@/pages/Test.vue";

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {path: "/router", component: Routes},
        {path: "/test", component: Test},
    ]
})