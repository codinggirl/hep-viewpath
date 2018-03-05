
module.exports = function hepViewPath(path) {
    return async function hepViewPath(ctx, next) {
        if (ctx.hepPug) {
            ctx.hepPug.config.view.basePath = path
        }
        await next()
    }
}
