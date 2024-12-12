// 中文语言包
export default {
    web: {
        title: 'JNO 工具集',
    },
    topbar: {
        jno: 'JNO 官网',
        manual_copy: '手动复制代码',
    },
    footer: {
        mit: '本网站根据 <a href="https://opensource.org/license/MIT" target="_blank">MIT 许可证</a> 发布',
        copyright: '版权所有 2024 - 至今，琦琦',
    },
    home: {
        title1: '简单好用的',
        title2: '小工具',
        team_title: '航天员们',
    },
    tools: {
        empty: '待制作',
    },
    imageToLabel: {
        title: '图片转 Label',
        edit: {
            title_1: '原始图片',
            select_image: '点击选择图片，或拖拽到此处',
            title_2: '参数设置',
            imgw: '图像宽度',
            imgw_tips: '越宽越清晰，转换后的数据也越大。Label 零件有字符数量限制，推荐正方形图像宽度在200以内。',
            colorNum: '颜色数量',
            colorTh: '取色阈值',
            tranValue: '透明区域强度',
            tranMode: '透明模式',
            tranMode_off: '关闭',
            tranMode_auto: '自动',
            tranMode_color: '指定颜色',
            tranColor: '透明颜色',
        },
        result: {
            title_1: '转换预览',
        },
        color: {
            title_1: '颜色编辑',
            color_tips: '这里的颜色顺序与游戏内一致，颜色不会保存在代码中，需要在游戏内对应位置修改颜色。',
            title_2: '导出',
            btn_copy: '复制代码',
            btn_m_copy: '手动复制',
            btn_help: '如何使用',    
        },
    },
    imageToMFD: {
        title: '图片转 MFD',
    },
    toast: {
        copy: '已复制代码',
        copy_err: '复制失败，请手动复制',
    },
    popup_howToUse: {
        main_title: '如何使用',
        title_1: '1. 粘贴代码',
        text_1: '把复制的代码粘贴到 Lable 零件的输入框中。',
        title_2: '2. 设置 Label 零件的属性',
        text_2: 'Font (字体) 设置为 Future Earth。',
        text_3: 'Horizontal Anchor (水平锚点) 设置为 Left。',
        text_4: 'Vertical Anchor (垂直锚点) 设置为 Top。',
        text_5: 'Gradient (梯度) 设置为 Vertical。',
        title_3: '3. 调整图像大小',
        text_6: '在 TINKER PANEL 选项内通过 Part Scale（零件大小）调整图像的大小。',
        title_4: '小提示',
        text_7: '推荐使用清晰、对比度高、颜色较少的图像进行转换。',
        text_8: '粘贴代码后，如果图像异常，把 FontSize、Width、Height 属性都拉到最大，然后再缩小到合适的大小',
    },
    popup_manualCopy: {
        main_title: '手动复制',
    },
    error: {
        text1: '小蓝',
        text2: '带着页面上太空啦！',
    }
}