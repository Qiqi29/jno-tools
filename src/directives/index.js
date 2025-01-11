// Vue 自定义指令
export const customDirectives = {
    install(app) {

        // v-img-loaded 指令，图片加载完成后渐显
        app.directive('img-loaded', {
            mounted(el, binding) {
                el.style.opacity = 0
                el.style.transition = 'opacity 0.3s'
                
                const img = new Image()
                img.src = binding.value

                img.onload = () => {
                    el.src = binding.value
                    el.style.opacity = 1
                    el.addEventListener('transitionend', () => {
                        el.style.transition = ''
                        el.style.opacity = ''
                    })
                }
            }
        })

    }
}