import axios from "axios";

const url = `https://frontend-test-api.aircall.io`;

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
        await refresh_token();
        
        error.config.__isRetryRequest = true;
        let user = JSON.parse(sessionStorage.user_data);
        error.config.headers.Authorization = 'Bearer ' + user.access_token;
        return new Promise((resolve, reject) => {
            axios(error.config).then(response => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        });
    }
    return Promise.reject(error);
});


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

async function refresh_token(error) {
    try {
        let user = JSON.parse(sessionStorage.user_data);

        await fetch(url + "/auth/refresh-token-v2",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " + user.refresh_token
                }
            }).then(resp => resp.json()).then(data => {
                sessionStorage.setItem("user_data", JSON.stringify(data));
                return data;
            })
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCalls(index, offset) {
    try {
        let user = JSON.parse(sessionStorage.user_data);
        let response = await axios.get(url + `/calls?offset=${index}&limit=${offset}`, { headers: { 'Authorization': "Bearer " + user.access_token } });

        return {
            nodes: response.data.nodes,
            totalCount: response.data.totalCount,
            hasNextPage: response.data.hasNextPage
        } ;
    } catch (error) {
        console.log(error);
        return null;
    }
};