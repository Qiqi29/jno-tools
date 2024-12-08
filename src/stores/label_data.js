import { defineStore } from 'pinia'

// 全局状态管理库
export const useLabelDataStore = defineStore('label_date', {
    state: () => {
        return {
            imageData: null,        // 原始图像数据
            newImageData: null,     // 转换后的图像数据（Canvas类型）
            resultCode: null,       // 转换结果代码

            imageWidth: 80,         // 图像宽度
            colorNum: 3,            // 颜色数量
            colorDetail: 100,       // 透明区域强度

            transMode: 0,           // 透明模式
            transModeList: ['关闭', '自动', '指定颜色'],
            
            transColor: 0,          // 透明颜色
            imageColors: [],        // 获取到的颜色列表

            activeColor: 15,        // 当前选中的颜色索引
            colorList: []           // 默认颜色列表
        }
    },
    actions: {
        update() {
            this.count++
        },
    }
})