var userAgent = require('user-agents');

function headers(ip) {
    // This will help you mask your ip address to the provided ip
    // But it isn't necessary to use
    return {
        'x-forwarded-for': ip,
        'x-real-ip': ip,
        "user-agent": new userAgent().toString()
    };
}

module.exports = headers;