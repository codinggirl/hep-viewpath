/**
 * hep-pug-viewbase
 * view base middleware for hep-pug
 */

/**
 * 
 * @param path the view path for view
 * @return {function(*, *)}
 */
const middleware = function (path) {
    return (ctx, next) => {
        if (ctx.hepPug) {
            ctx.hepPug.config.view.basePath = path
        }
        return next()
    }
}

module.exports = middleware
