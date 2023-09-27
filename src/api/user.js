import axiosClient from ".";

export const getUserList = async (params) => {
    return axiosClient.get(`/test-users`, {
        params:params
    }).then(res => res.data);
}