import proxy from "express-http-proxy"

const proxyWithHeaders = (targetUrl) => {
    return proxy(targetUrl,{
        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
            if(srcReq.user) {
                proxyReqOpts.headers['x-user-id'] = srcReq.user._id;
                proxyReqOpts.headers['x-user-email'] = srcReq.user.email;
                proxyReqOpts.headers['x-user-name'] = srcReq.user.name;
            }
            return proxyReqOpts;
        }
    })
}

export default proxyWithHeaders