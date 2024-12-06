// 英文语言包
export default {
    web: {
        title: 'JNO - Toolset',
    },
    topbar: {
        jno: 'JNO Site',
        manual_copy: 'Copy the code manually',
    },
    home: {
        title1: 'Simple ',
        title2: 'Gadget',
    },
    tools: {
        empty: 'To be made',
    },
    imageToLabel: {
        title: 'Image To Label',
        edit: {
            title_1: 'Original image',
            select_image: 'Click to select picture',
            title_2: 'Parameter Setting',
            imgw: 'Image width',
            imgw_tips: 'The wider the clearer, the larger the converted data. Label parts have a limit on the number of characters, and the recommended square image width is within 200.',
            colorNum: 'Number of colors',
            tranValue: 'Transparency intensity',
            tranMode: 'Transparent mode',
            tranMode_off: 'Off',
            tranMode_auto: 'Auto',
            tranMode_color: 'Specify color',
            tranColor: 'Transparent color',
        },
        result: {
            title_1: 'Convert Preview',
        },
        color: {
            title_1: 'Color editing',
            color_tips: 'The color order here is the same as in-game, and the colors will not be saved in the code. You need to modify the colors at the corresponding location in the game.',
            title_2: 'Export',
            btn_copy: 'Copy code',
            btn_m_copy: 'Manual copy',
            btn_help: 'How to use',
        },
    },
    footer: {
        text1: 'Released under the MIT License.',
        text2: 'Copyright © 2024-present 琦琦',
    },
    toast: {
        copy: 'Code copied successfully',
        copy_err: 'Copy failed, please copy manually',
    },
    popup: {
        howToUse_title: 'How to use',
        howToUse_content: `<p class="popup_title">1. Paste code</p>
        <p class="popup_text">Paste the copied code into the text box of the Lable part.</p>

        <p class="popup_title">2. Set the properties of the Label part</p>
        <p class="popup_text">(Font) Set to Future Earth.</p>
        <p class="popup_text">(Horizontal Anchor) Set to Left.</p>
        <p class="popup_text">(Vertical Anchor) Set to Top.</p>
        <p class="popup_text">(Gradient) Set to Vertical.</p>
        
        <p class="popup_title">3. Resize image</p>
        <p class="popup_text">Resize the image by Part Scale in the TINKER PANEL option.</p>
        
        <p class="popup_title">Tips</p>
        <p class="popup_text">It is recommended to use clear, high-contrast, and low-color images for conversion.</p>
        <p class="popup_text">After pasting the code, if the image is abnormal, pull the FontSize, Width, and Height properties to the maximum, and then shrink them to the appropriate size.</p>`,
    },
    error: {
        text1: 'Drood',
        text2: ' took the page to space!',
    }
}