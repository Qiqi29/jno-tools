import { rgbToHex } from '@/utils/Tools'

// 全局状态管理库
import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()


// 颜色ID
export const colorIdList = [
    '#000000', '#010101', '#020202', '#030303', '#040404', 
    '#050505', '#060606', '#070707', '#080808', '#090909', 
    '#0A0A0A', '#0B0B0B', '#0C0C0C', '#0D0D0D', '#0E0E0E', 
    '#0F0F0F', '#101010', '#111111', '#121212', '#131313', 
    '#141414', '#151515', '#161616', '#171717', '#181818',
]


/**
 * 调整图像大小
 * @param {Image} image        图像数据 
 * @param {Number} imageWidth  目标宽度
 * @returns  Canvas 数据
 */
export function resizeImage(image, imageWidth) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const targetHeight = (imageWidth / image.width) * image.height
    canvas.width = imageWidth
    canvas.height = targetHeight
    ctx.drawImage(image, 0, 0, imageWidth, targetHeight)
    return canvas
}



/**
 * 处理图像的像素数据，变成像素画风格
 * @param {Image} image  图像数据
 * @returns 
 */
export function imageToPixel(image) {

    // 调整图像大小
    const canvas = resizeImage(image, labelStore.imageWidth)

    // 读取像素数据
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    // 遍历图像数据，统计不同颜色的数量
    const colorCounts = {}
    for (let i = 0; i < data.length; i += 4) {
        const red = data[i]
        const green = data[i + 1]
        const blue = data[i + 2]
        const alpha = data[i + 3]
        if (alpha === 0) continue
        
        // 创建颜色字符串
        const color = `${red},${green},${blue}`

        // 统计颜色出现次数
        if (colorCounts[color]) {
            colorCounts[color]++
        } else {
            colorCounts[color] = 1
        }
    }

    // 把统计结果转换为数组，并按照数量排序
    const sortedEntries = Object.entries(colorCounts).sort((a, b) => b[1] - a[1])
    // 获取数量最多的颜色值
    const topColors = sortedEntries.slice(0, labelStore.colorNum).map(entry => entry[0])
    labelStore.imageColors = topColors
    setColorList(topColors)

    // 遍历所有像素进行颜色替换
    for (let i = 0; i < data.length; i += 4) {
        const red = data[i]
        const green = data[i + 1]
        const blue = data[i + 2]
        const alpha = data[i + 3]
        if (alpha === 0) continue

        // 创建颜色字符串，查找最接近的颜色
        const color = `${red},${green},${blue}`
        const closestColor = findClosestColor(color, topColors)

        // 替换当前像素
        data[i] = parseColor(closestColor)[0]
        data[i + 1] = parseColor(closestColor)[1]
        data[i + 2] = parseColor(closestColor)[2]
        data[i + 3] = alpha < labelStore.colorDetail ? 0 : 255

        // 指定颜色透明模式
        if (labelStore.transMode === 2) {
            if (closestColor == labelStore.imageColors[labelStore.transColor]) {
                data[i + 3] = 0
            }
        }
    }

    // 自动透明模式
    if (labelStore.transMode === 1) {
        const newColor = [0, 0, 0, 0]
        paintBucket(1, 1, newColor, canvas, data)
        ctx.putImageData(imageData, 0, 0)
    }

    // 创建新的画布，把图像数据转换为 Canvas
    const newCanvas = document.createElement('canvas')
    newCanvas.width = canvas.width
    newCanvas.height = canvas.height
    const newCtx = newCanvas.getContext('2d')
    newCtx.putImageData(imageData, 0, 0)

    // 返回最终结果
    return {
        newCanvas,
        topColors
    }
}


// 辅助函数：从颜色列表中找到最接近的颜色
function findClosestColor(targetColor, colorList) {
    let closestColor = null
    let minDistance = Infinity

    // 转换目标颜色字符串为数组
    const targetColorRgb = parseColor(targetColor)

    // 遍历颜色列表的所有项
    colorList.forEach((colorString) => {
        // 把当前颜色字符串转换为数组
        const colorRgb = parseColor(colorString)
        // 计算目标颜色与当前颜色的距离
        const distance = colorDistance(targetColorRgb, colorRgb)
        // 如果当前距离小于最小距离，更新最接近的颜色
        if (distance < minDistance) {
            minDistance = distance
            closestColor = colorString
        }
    })

    return closestColor
}

// 辅助函数：把字符串颜色转换为RGB数组
function parseColor(colorString) {
    return colorString.split(',').map(str => parseInt(str, 10))
}

// 辅助函数：计算两个颜色之间的距离
function colorDistance(color1, color2) {
    return Math.sqrt(
        Math.pow(color1[0] - color2[0], 2) +
        Math.pow(color1[1] - color2[1], 2) +
        Math.pow(color1[2] - color2[2], 2)
    )
}



// 修改颜色列表中的颜色为获取到的颜色
function setColorList(imageColors) {
    // 所有颜色恢复默认
    for(let i = 0; i < 25; i++) {
        labelStore.colorList[i].color = '#000000'
    }
    // 从第十五个开始，替换为获取的颜色
    for(let i = 0; i < 10; i++) {
        if (imageColors[i]) {
            labelStore.colorList[i + 15].color = rgbToHex(imageColors[i])
        }
    }
}




/**
 * 油漆桶功能
 * @param {*} x         X坐标
 * @param {*} y         Y坐标
 * @param {*} newColor  新颜色
 * @param {*} canvas    画布
 * @param {*} data      图像数据
 */
function paintBucket(x, y, newColor, canvas, data) {
    // 获取指定坐标颜色
    const targetColor = getPixelColor(x, y, canvas, data)
    // 如果颜色是透明色，不执行
    if (targetColor[3] === 0) {
        return
    }

    // 创建一个栈，存储需要处理的像素坐标
    const stack = [[x, y]]
    let currentPixel

    // 当栈不为空时，持续处理像素
    while(stack.length) {
        // 从栈中取出一个像素坐标进行处理
        currentPixel = stack.pop()
        x = currentPixel[0]
        y = currentPixel[1]

        // 如果坐标超出画布范围，不处理
        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
            continue
        }
        
        // 如果当前像素颜色与目标颜色不匹配，不处理
        let currentColor = getPixelColor(x, y, canvas, data)
        if (!matchColor(currentColor, targetColor)) {
            continue
        }

        // 计算当前像素在图像data数组中的索引位置
        let idx = (x + y * canvas.width) * 4
        // 使用新颜色替换当前像素
        data.set(newColor, idx)

        // 把上下左右相邻的像素坐标加入栈中，继续处理
        stack.push([x + 1, y])
        stack.push([x - 1, y])
        stack.push([x, y + 1])
        stack.push([x, y - 1])
    }
}

// 辅助函数：获取指定坐标中像素的颜色
function getPixelColor(x, y, canvas, data) {
    var idx = (x + y * canvas.width) * 4
    return [data[idx], data[idx+1], data[idx+2], data[idx+3]]
}

// 辅助函数：比较两个颜色是否相同
function matchColor(color1, color2) {
    return color1[0] === color2[0] && 
           color1[1] === color2[1] &&
           color1[2] === color2[2] && 
           color1[3] === color2[3]
}



/*

<mspace=0.2><line-height=0.2><size=0.65><br>
<br><#0F0F0F>... ...<br>
...<space=0.2>...<br>

*/

// 把图像转换为Label代码
export function imageToCode() {
    const imageCanvas = labelStore.newImageData
    if (imageCanvas == null) return

    let resultCode = `<mspace=0.2><line-height=0.2><size=0.65>`

    // 把像素数据转换为文本数据
    const ctx = imageCanvas.getContext('2d', { willReadFrequently: true })
    const imageData = ctx.getImageData(0, 0, imageCanvas.width, imageCanvas.height)
    const data = imageData.data
    
    let lastColor = null
    
    // 遍历像素数据，转换为字符串
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const a = data[i + 3]
        const currentColor = `${r},${g},${b}`

        // 首次循环初始化
        if (lastColor === null) {
            lastColor = currentColor
            if (a !== 0) {
                resultCode += `<${getColorId(currentColor)}>`
            }
        }

        if (currentColor !== lastColor) {
            if (a !== 0) {
                resultCode += `<${getColorId(currentColor)}>`
                lastColor = currentColor
            }
        }

        if ((i / 4) % imageCanvas.width === 0) {
            resultCode += `<br>`
        }

        if (a === 255) {
            resultCode += `.`
        } else {
            resultCode += ` `
        }
    }

    // 去除换行符前面的空格，去除结尾的空格
    resultCode = resultCode.replace(/\s*<br>/g, '<br>').trimEnd()
    resultCode = resultCode.trimEnd()
    
    // 处理剩余的空格，如果连续长度大于12个，替换为使用标签空格
    resultCode = resultCode.replace(/\s{12,}/g, (match) => {
        const spaceCount = match.length
        return `<space=${(spaceCount * 0.2).toFixed(1)}>`
    })

    return resultCode
}

// 辅助函数：获取当前颜色对应的颜色ID
function getColorId(currentColor) {
    const color = rgbToHex(currentColor)
    const index = labelStore.colorList.findIndex(item => item.color === color)
    const colorId = colorIdList[index]
    return colorId
}