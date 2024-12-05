import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 引入 NProgress 加载进度条
import NProgress from 'nprogress'
NProgress.configure({
    minimum: 0.1,      // 最小百分比
    easeFn: 'ease',    // 进度过渡函数
    speed: 500,        // 进度条动画速度
    trickleSpeed: 200, // 自动递增时的速度
    showSpinner: false // 是否显示加载指示器
})


/**
 * < 路由配置 >
 * path      -- 路由地址
 * name      -- 路由名称
 * component -- 路由对应的组件
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
            title: "JNO - 工具集",
        },
    },
    {
        path: '/tool/imagetolabel',
        name: 'imagetolabel',
        component: () => import("@/views/Tools/image_to_label/ImageToLabel.vue"),
        meta: {
            title: "图片转 Label",
        },
    },
    {
        path: '/tool/imagetolabel/copycode',
        name: 'copycode',
        component: () => import("@/views/Tools/image_to_label/CopyCode.vue"),
        meta: {
            title: "手动复制代码",
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
    // history: createWebHistory(),         // history 模式
    routes,
    // base: '/jno-tools-web/',             // 基本地址
    // 每次切换路由强制滚动到顶部
    scrollBehavior: () => ({ left: 0, top: 0 })
})


/**
 * < 路由守卫 >
 * 从一个路由跳转到另一个路由时，会触发 beforeEach 过程
 * 在进入另一个路由之前，会触发 afterEach 过程
 * 调用 next() 才能继续跳转路由
 */
router.beforeEach((to, from, next) => {
    // 显示进度条
    NProgress.start()

    // 根据路由变化设置浏览器标题
    document.title = to.meta.title || conf.web.title

    // 跳转路由
    next()
})

router.afterEach((to, from) => {
    // 隐藏进度条
    NProgress.done()
})

export default router