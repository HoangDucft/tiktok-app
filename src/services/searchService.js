import * as request from '~/utils/requestHttp';

export const search = async (q, type = `less`) => {
    try {
        // đường base lấy bên request tự động được nối chuỗi vào
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        // res.data : chứa các account trong mảng
        return res.data;
    } catch (error) {
        console.log('error');
    }
};
