import axiosClient from "."

export const createNewPost = async (data) => {
    return axiosClient.post('/test-posts', data).then(res => res.data);
}

export const getPostList = async (params) => {
    return axiosClient.get('/test-posts', {
        params:params
    }).then(res => res.data);
}