const _apiUrl = "/customers";

export const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getCustomerById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const deleteCustomer = (id) => {
    return fetch(`${_apiUrl}/${id}`, { method: "delete" }).then((r) => r.json());
}

export const createCustomer = (payload) => new Promise((resolve, reject) => {
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