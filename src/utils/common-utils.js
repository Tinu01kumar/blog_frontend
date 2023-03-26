

export const getAccessToken=()=>{
    return sessionStorage.getItem('accessToken');
}




export const getType = (value, body) => {
    console.log(value)
    console.log(value.params)
    console.log(body)
    if (value.params) {
        console.log(body)
        return { params: body }
    } else if (value.query) {
        console.log(value.query)
        if (typeof body === 'object') {
            return { query: body._id }
        } else {
            return { query: body }
        }
    }
    return {};
}