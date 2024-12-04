
// 十六进制转rgb
export function hexToRgb(hex) {
    hex = hex.replace('#', '')
    var r = parseInt(hex.substring(0, 2), 16)
    var g = parseInt(hex.substring(2, 4), 16)
    var b = parseInt(hex.substring(4, 6), 16)
    return [r, g, b]
}

// rgb转十六进制
export function rgbToHex(rgb) {
    let color = rgb
    if (typeof rgb === 'string') {
        color = rgb.split(',').map(str => parseInt(str, 10))
    }
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
    return '#' + toHex(color[0]) + toHex(color[1]) + toHex(color[2]);
}

// 映射数值范围
export function mapRange(value, inMin, inMax, outMin, outMax) {
    const ratio = (value - inMin) / (inMax - inMin)
    const mapped = outMin + ratio * (outMax - outMin)
    return Math.min(outMax, Math.max(outMin, mapped))
}