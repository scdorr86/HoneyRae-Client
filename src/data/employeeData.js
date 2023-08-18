const _apiUrl = "/employees";

export const getEmployees = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a employee by id
export const getEmployeeById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const deleteEmployee = (id) => {
    return fetch(`${_apiUrl}/${id}`, { method: "delete" }).then((r) => r.json());
}

export const createEmployee = (payload) => new Promise((resolve, reject) => {
    fetch(_apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(reject);
});