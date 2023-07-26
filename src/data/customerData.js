const _apiUrl = "/customers";

export const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getCustomerById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}