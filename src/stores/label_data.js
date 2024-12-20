import { defineStore } from 'pinia'

const defaultState = {
    imageData: null,        // 原始图像数据
    newImageData: null,     // 转换后的图像数据（Canvas类型）
    resultCode: null,       // 转换结果代码

    imageWidth: 150,        // 图像宽度
    colorNum: 3,            // 颜色数量
    colorDetail: 100,       // 透明区域强度
    
    colorAlgorithm: false,  // 使用取色算法
    colorIntensity: 30,     // 取色强度

    transMode: 0,           // 透明模式
    transModeList: ['关闭', '自动', '指定颜色'],
    
    transColor: 0,          // 透明颜色
    imageColors: [],        // 获取到的颜色列表

    activeColor: 15,        // 当前选中的颜色索引
    colorList: []           // 颜色列表
}

export const useLabelDataStore = defineStore('label_date', {
    state: () => {
        return { ...defaultState }
    },
    actions: {
        reset() {
            Object.assign(this, defaultState)
            this.colorList = []
        },
    }
})