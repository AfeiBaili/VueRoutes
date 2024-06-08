import VueRouter from 'vue-router'
import Routes from "@/pages/Routes.vue";
import Vue from "vue";
import Test from "@/pages/Test.vue";

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: "/router", component: Routes, meta: {title: "列表主页"}, children: [{
                name: "message", path: "message", component: Test, meta: {title: "消息"}, props(r) {
                    return {name: r.query.name}
                }
            }, {
                name: "friend", path: "friend", component: Test, meta: {title: "好友"}, props(r) {
                    return {name: r.query.name}
                }
            }, {
                name: "chatRoom", path: "chatRoom", component: Test, meta: {title: "聊天室"}, props(r) {
                    return {name: r.query.name}
                }
            },], props(route) {
                return {route: route.query.route};
            }
        },
        {path: "/test", component: Test, meta: {title: "测试"}},
    ],
})
router.afterEach((to) => {
    console.log("已加载")
    document.title = to.meta.title || "欢迎"
})
export default router;