const { resolve } = require('path')

const defaults = {
    css: true,
    materialDesignIcons: true,
    materialDesignIconsHRef: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css',
    async: true
}

module.exports = async function module(moduleOptions) {
    const options = Object.assign({}, defaults, this.options.buefy, moduleOptions)

    // Add Material Design Icons font
    if (options.materialDesignIcons !== false) {
        const attributes = {
            type: 'text/css',
            href: options.materialDesignIconsHRef
        }

        if (options.async) {
            attributes.rel = 'preload'
            attributes.as = 'style'
            attributes.onload = 'this.rel=\'stylesheet\''
        } else {
            attributes.rel = 'stylesheet'
        }

        this.options.head.link.push(attributes)
    }

    // Add css
    if (options.css !== false) {
        this.options.css.unshift('buefy/dist/buefy.css')

        // Add postcss plugin
        this.options.build.postcss['plugins'] = Object.assign(
            this.options.build.postcss.plugins || {},
            { 'postcss-custom-properties': { warnings: false } }
        )
    }

    // Register plugin
    this.addPlugin({
        src: resolve(__dirname, 'templates/plugin.js'),
        fileName: 'buefy.js',
        options
    })
}
