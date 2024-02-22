import * as request from '~/utils/requestHttp';

export const register = async (registerData = {}) => {
    const response = await request.post('auth/register', registerData);
    return response;
};
