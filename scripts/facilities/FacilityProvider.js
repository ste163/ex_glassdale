// Module goals: fetch list of facilities

let facilities = [];

// Return a copy of facilities
export const useFacilities = () => facilities.slice();

// Fetch facilities
export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
    .then(response => response.json())
    .then(data => {
        facilities = data
    })
}