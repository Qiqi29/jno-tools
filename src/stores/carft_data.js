import { defineStore } from 'pinia'

const defaultState = {
    colorNum: 0,        // 颜色格数量
}

export const useCarftDataStore = defineStore('carft_date', {
    state: () => {
        return { 
            carftData: null,    // 原始存档数据
            ...defaultState,
        }
    },
    actions: {
        reset(carft = false) {
            Object.assign(this, defaultState)
            if (carft) {
                this.carftData = null
            }
        },
    }
})