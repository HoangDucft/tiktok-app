import * as request from '~/utils/requestHttp';

export const getVideo = async (type, page) => {
    try {
        // đường base lấy bên request tự động được nối chuỗi vào
        const res = await request.get(`videos`, {
            params: {
                type: type,
                page: page,
            },
        });
        // res.data : chứa các account trong mảng
        return res.data;
    } catch (error) {
        console.log('error');
    }
};
