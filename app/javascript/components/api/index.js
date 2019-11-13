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

const viewLocation = function(id) {
  return fetch(`/locations/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(resp => {
    if (resp.status === 200) {
      const json = resp.json();

      return json;
    }
  });
};

export { viewLocation, getLocations, createLocation, findLocation };
