export const siteImageService = {
    getSiteImage
};

function getSiteImage() {
    const requestOptions = {
        method: "GET",
        body: null
    };

    return fetch(`https://a2130f95-1bf8-4327-83a4-3bfdaf55c062.mock.pstmn.io/trackerMetrics/graphics`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
    return response.json().then(json => {
        if (!response.ok) {
            if (response.status === 403) {
                console.log("403")
                localStorage.removeItem('user')
                window.location.reload(true);
            }

            const error = (json && json.message) || response.statusText;
            return Promise.reject(error);
        }
        return json;
    });
}