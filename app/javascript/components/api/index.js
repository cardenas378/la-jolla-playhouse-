const getLocations = function() {
  return fetch("/locations").then(response => {
    return response.json();
  });
};

const createLocation = function(attributes) {
  return fetch("/locations", {
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": document.querySelector("[name=csrf-token]").content,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ location: attributes })
  }).then(resp => {
    return resp.json();
  });
};

const findLocation = function(id) {
  return fetch(`/locations/${id}`).then(resp => {
    return resp.json();
  });
};

const createBooking = function(attributes) {
  return fetch("/bookings", {
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": document.querySelector("[name=csrf-token]").content,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ booking: attributes })
  }).then(resp => {
    return resp.json();
  });
};

export { getLocations, createLocation, findLocation, createBooking };
