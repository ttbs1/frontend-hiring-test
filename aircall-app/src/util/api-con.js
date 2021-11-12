import axios from "axios";

export async function authUser() {
    const url = `https://frontend-test-api.aircall.io`;

    try {
        const response = await axios.post(url + '/auth/login', {
            username: 'fred',
            password: '123456'
        })

        return response.status === 201 ? {
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
            user: response.data.user
        } : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}