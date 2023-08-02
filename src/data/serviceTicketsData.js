const _apiUrl = "/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const deleteServiceTicket = (id) => {
    return fetch(`${_apiUrl}/${id}`, { method: "delete" }).then((r) => r.json());
}

export const createServiceTicket = (ticketPayload) => {
    return fetch(_apiUrl, { method: "post", body: JSON.stringify(ticketPayload)}).then((r) => r.json());
}

export const completeServiceTicket = (ticketPayload) => {
    return fetch(`${ _apiUrl }/${ ticketPayload.id }`, { method: "put" }).then((r) => r.json());
}

export const createTicket = (payload) => new Promise((resolve, reject) => {
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

export const completeTicket = (payload) => new Promise((resolve, reject) => {
    fetch(`${_apiUrl}/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then(resolve)
        .catch(reject);
});

