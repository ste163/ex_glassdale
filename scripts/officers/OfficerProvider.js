let officers = []

export const useOfficers = () => {
    return officers.slice()
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
        .then(convertedResponse => {
                console.table(convertedResponse)
                officers = convertedResponse
            }
        )
}