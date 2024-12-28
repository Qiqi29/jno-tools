import { useCarftDataStore } from '@/stores/carft_data'
const carftStore = useCarftDataStore()


/**
 * 修改作品 XML 文件
 */
export function modifyCarftXml() {
    if (!carftStore.carftData) return

    // 使用正则去除 base64 数据中的 BOM（字节顺序标记），然后解码为 XML 字符串
    const carftData = carftStore.carftData.data
    let xmlString = atob(carftData.split(',')[1].replace(/^77u\//, ''))

    // 解析 XML 字符串为 DOM 结构
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml')


    // 增加颜色格
    if (carftStore.colorNum !== 0) {
        const themeElement = xmlDoc.querySelector('DesignerSettings Theme')
        for (let i = 0; i < carftStore.colorNum; i++) {
            const materialElement = xmlDoc.createElement('Material')
            materialElement.setAttribute('name', `New Color`)
            materialElement.setAttribute('color', `#FFFFFF`)
            materialElement.setAttribute('m', 0)
            materialElement.setAttribute('s', 0)
            themeElement.appendChild(materialElement)
        }
    }


    // 把修改后的 XML 转换回字符串，然后编码为 base64
    const serializer = new XMLSerializer()
    const newXMLString = serializer.serializeToString(xmlDoc)
    const newBase64Data = btoa(newXMLString)

    // 调用下载函数
    downloadXML(newBase64Data)
}


// 下载修改后的 XML 文件
function downloadXML(base64Data) {
    const link = document.createElement('a')
    link.href = `data:text/xml;base64,77u/${base64Data}`
    link.download = `${carftStore.carftData.name}.xml`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
