export const commissioningService = {
    getCommissioningData,
    getCurrentTrackerInfo
};

const hostName = window.location.hostname

function getCommissioningData() {
    const requestOptions = {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: null
    };

    return fetch(`https://e1b74734-a299-4ed0-a5d3-3f49e413836c.mock.pstmn.io/getCommissioningData`, requestOptions)
        .then(handleResponse)
}

function getCurrentTrackerInfo(trackerID) {
    const requestOptions = {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: null
    };

    return fetch(`https://7e0f3770-d1c0-4789-8491-eaa080b8937a.mock.pstmn.io/getCurrentTrackerInfo`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
    console.log(response);
    return response.json().then(json => {
        console.log(json);
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