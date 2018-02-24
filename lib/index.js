/**
 * hep-pug-viewbase
 * view base middleware for hep-pug
 */

const middleware = function (path) {
    return (ctx, next) => {
        ctx.hepPug.viewPath = path
        next()
    }
}

module.exports = middleware
