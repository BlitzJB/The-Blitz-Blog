const mcache = require('memory-cache');


function cache(timeout = 60 * 60 * 3) {
    return (req, res, next) => {
        const key = '__express__' + req.originalUrl || req.url
        const cachedBody = mcache.get(key)
        if (cachedBody) {
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, timeout * 1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

function clearCache(url) {
    const key = '__express__' + url
    mcache.del(key)
}

module.exports = {
    cache,
    clearCache
}
