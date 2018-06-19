const { resolve } = require('path')

const defaults = {
    css: true,
    materialDesignIcons: true
}

module.exports = async function module(moduleOptions) {
    const options = Object.assign({}, defaults, this.options.buefy, moduleOptions)

    // Add Material Design Icons font
    if (options.materialDesignIcons !== false) {
        this.options.head.link.push({
            rel: 'stylesheet',
            type: 'text/css',
            href: '//cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css'
        })
    }

    // Add css
    if (options.css !== false) {
        this.options.css.unshift('buefy/lib/buefy.css')

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
