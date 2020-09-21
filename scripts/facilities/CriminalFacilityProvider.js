// Module goals: fetch list of criminal facilities

let criminalFacilities = [];

export const useCriminalFacilities = () => {
    return criminalFacilities.slice()
}

export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(response => response.json())
        .then(data => {
            criminalFacilities = data
        })
}