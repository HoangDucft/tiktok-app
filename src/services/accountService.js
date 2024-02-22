import * as request from '~/utils/requestHttp';

export const getUserAccount = async (nickname) => {
    try {
        // đường base lấy bên request tự động được nối chuỗi vào
        const res = await request.get(`users/@` + nickname);
        // res.data : chứa các account trong mảng
        return res.data;
    } catch (error) {
        console.log('error in service');
    }
};

export const getSuggestedAccount = async (page, perPage) => {
    try {
        // đường base lấy bên request tự động được nối chuỗi vào
        const res = await request.get(`users/suggested`, {
            params: {
                page: page,
                per_page: perPage,
            },
        });
        // res.data : chứa các account trong mảng
        return res.data;
    } catch (error) {
        console.log('error');
    }
};
