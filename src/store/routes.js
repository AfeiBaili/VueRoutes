//这是store
export default {
    namespaced: true,
    actions: {},
    mutations: {},
    state: {
        routes: [
            {
                pathName: "router", name: "主页", route: [
                    {pathName: "message", name: "消息"},
                    {pathName: "friend", name: "好友"},
                    {pathName: "chatRoom", name: "聊天室"},
                ]
            },
            {pathName: "test", name: "测试组件"},
        ]
    },
    getters: {}
}