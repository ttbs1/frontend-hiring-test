import axios from "axios";

const url = `https://frontend-test-api.aircall.io`;

export async function authUser() {
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

export async function refresh_token(user) {
    try {
        const response = await axios.post(url + '/auth/refresh-token-v2', { 'headers': { 'Authorization': "Bearer " + user.refresh_token } })

        console.log(response)
        return response.status === 200 ? {
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
            user: response.data.user
        } : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCalls(user) {
    try {
        let response = await axios.get(url + '/calls?offset=1&limit=10', { 'headers': { 'Authorization': "Bearer " + user.access_token } });

        return {
            nodes: response.data.nodes,
            totalCount: response.data.totalCount,
            hasNextPage: response.data.hasNextPage
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};