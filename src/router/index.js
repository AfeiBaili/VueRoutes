import VueRouter from 'vue-router'
import Routes from "@/pages/Routes.vue";
import Vue from "vue";
import Test from "@/pages/Test.vue";

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/router", component: Routes, meta: {title: "列表主页"}, children: [
                {
                    name: "message", path: "message", component: Test, meta: {title: "消息"}, props: true
                }, {
                    name: "friend", path: "friend", component: Test, meta: {title: "好友"}, props: true
                }, {
                    name: "chatRoom", path: "chatRoom", component: Test, meta: {title: "聊天室"}, props: true
                },
            ], props: true
        },
        {path: "/test", component: Test, meta: {title: "测试"}},
    ],
})
router.afterEach((to) => {
    document.title = to.meta.title || "欢迎"
})
export default router;