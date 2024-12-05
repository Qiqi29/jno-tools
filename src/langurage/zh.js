// 中文语言包
export default {
    web: {
        title: 'JNO - 工具集',
    },
    topbar: {
        jno: 'JNO 官网',
        manual_copy: '手动复制代码',
    },
    home: {
        title: '简单好用的',
        title_name: '小工具',
    },
    tools: {
        ImageToLabel: '图片转 Label',
        empty: '待制作',
    },
    imageToLabel: {
        edit_card: {
            title_1: '原始图片',
            select_image: '点击选择图片',
            title_2: '参数设置',
            set_imageWidth: '图像宽度',
            set_imageWidth_tips: '越宽越清晰，转换后的数据也越大。Label 零件有字符数量限制，推荐正方形图像宽度在200以内。',
            set_colorCount: '颜色数量',
            set_transFineness: '透明精细度',
            set_transMode: '透明模式',
            set_transMode_off: '关闭',
            set_transMode_auto: '自动',
            set_transMode_color: '指定颜色',
            set_transColor: '透明颜色',
        },
        result_card: {
            title_1: '转换预览',
        },
        color_card: {
            title_1: '颜色编辑',
            set_tips: '这里的颜色顺序与游戏内一致，颜色不会保存在代码中，需要在游戏内对应位置修改颜色。',
            title_2: '导出',
            btn_copy: '复制代码',
            btn_m_copy: '手动复制',
            btn_help: '如何使用',    
        },
    },
    footer: {
        text1: '根据 MIT 许可证发布',
        text2: '版权所有 © 2024-至今 琦琦',
    },
    toast: {
        copy: '已复制代码',
        copy_err: '复制失败，请手动复制',
    },
    popup: {
        howToUse_title: '如何使用',
        howToUse_content: `<p class="popup_title">1. 粘贴代码</p>
        <p class="popup_text">把复制的代码粘贴到 Lable 零件的输入框中。</p>

        <p class="popup_title">2. 设置 Label 零件的属性</p>
        <p class="popup_text">字体（Font）设置为 Future Earth。</p>
        <p class="popup_text">水平锚点（Horizontal Anchor）设置为 Left。</p>
        <p class="popup_text">垂直锚点（Vertical Anchor）设置为 Top。</p>
        <p class="popup_text">梯度（Gradient）设置为 Vertical。</p>
        
        <p class="popup_title">3. 调整图像大小</p>
        <p class="popup_text">在 TINKER PANEL 选项内通过 Part Scale（零件大小）调整图像的大小。</p>
        
        <p class="popup_title">小提示</p>
        <p class="popup_text">推荐使用清晰、对比度高、颜色较少的图像进行转换。</p>
        <p class="popup_text">粘贴代码后，如果图像异常，把 FontSize、Width、Height 属性都拉到最大，然后再缩小到合适的大小</p>`,
    },
    error: {
        text1: '小蓝',
        text2: '带着页面上太空啦！',
    }
}