/**
 * hep-pug-viewbase
 * view base middleware for hep-pug
 */

/**
 * set `ctx.hepPug.viewPath` with a given path
 * @param path the view path for view
 * @return {function(*, *)}
 */
const middleware = function (path) {
    return (ctx, next) => {
        if (ctx.hepPug) {
            ctx.hepPug.viewPath = path
        }
        return next()
    }
}

module.exports = middleware
