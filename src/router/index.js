import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 引入 NProgress 加载条
import NProgress from 'nprogress'
NProgress.configure({
    minimum: 0.1,       // 最小百分比
    easing: 'ease',     // 动画函数
    speed: 500,         // 动画速度
    trickleSpeed: 200,  // 自动递增速度
    showSpinner: false  // 加载指示器
})


/**
 * < 路由配置 >
 * path      -- 路由地址
 * name      -- 路由名称
 * component -- 路由对应的页面
 * meta      -- 路由元信息
 * redirect  -- 重定向路由
 * children  -- 子路由(数组)
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/Home/Home.vue"),
        meta: {
            title: "JNO 工具集",
        },
    },
    {
        path: '/tool/imagetolabel',
        name: 'imagetolabel',
        component: () => import("@/views/Tools/image_to_label/ImageToLabel.vue"),
        meta: {
            title: "JNO 工具 - 图片转 Label",
        },
    },
    {
        path: '/tool/imagetomfd',
        name: 'imagetomfd',
        component: () => import("@/views/Tools/image_to_mfd/ImageToMFD.vue"),
        meta: {
            title: "JNO 工具 - 图片转 MFD",
        },
    },
    {
        path: '/:catchAll(.*)',
        component: () => import("@/views/Error/404.vue"),
        meta: {
            title: '404 · Not Found',
        },
    }
]

const router = createRouter({
    history: createWebHashHistory(),  // hash 模式（在Github中需要使用此模式）
    // history: createWebHistory(),         // history 模式（在服务器中可使用此模式）
    routes,
    // 每次切换路由强制滚动到顶部
    scrollBehavior: () => ({ left: 0, top: 0 })
})


// 路由守卫，从一个路由跳转到另一个路由时触发
router.beforeEach((to, from, next) => {
    NProgress.start()
    document.title = to.meta.title || "JNO"
    next()
})

// 路由守卫，路由跳转完成时触发
router.afterEach((to, from) => {
    NProgress.done()
})

export default router;