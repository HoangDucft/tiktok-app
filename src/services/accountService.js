import * as request from '~/utils/requestHttp';

export const getUserAccount = async (nickname) => {
    const dataResponse = await request.get(`users/@` + nickname);
    if (dataResponse.data === undefined) {
        return [];
    }
    return dataResponse.data;
};

export const getSuggestedAccount = async (perPage, page = 1) => {
    const dataResponse = await request.get(`users/suggested`, {
        params: {
            page,
            per_page: perPage,
        },
    });
    if (dataResponse.data === undefined) {
        return [];
    }
    return dataResponse.data;
};
