let officers = []

export const useOfficers = () => {
    officers.slice()
    return officers.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        }
        return 0;   
    })
}

export const getOfficers = () => {
    // Fetch accepts a URL.
    // Then, once we have the response from the URL
    // Convert it to Java Script Object Notation, so JS can read the info
    // So after a fetch call, you must ALWAYS have the response.json() conversion.
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        //convertedResponse, is just the returned value of the converted response.
        //It could be named anything
        .then(convertedResponse => officers = convertedResponse)
}