const apiRoutes = (query, value) => {

    let path = Object.freeze({
        LOGIN: '/users/login',
        
    })

    return path?.[query] ?? 'INVALID_PATH'
}

export default apiRoutes;

// apiRoutes("")